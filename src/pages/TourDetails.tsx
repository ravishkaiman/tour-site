import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { tours } from '@/data/tours';

const TourDetails: React.FC = () => {
	const { slug } = useParams<{ slug: string }>();
	const tour = tours.find(t => t.slug === slug);
	const [htmlContent, setHtmlContent] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	if (!tour) {
		return (
			<div className="min-h-screen flex flex-col">
				<Navbar />
				<main className="container mx-auto px-4 py-16">
					<h1 className="text-2xl font-display font-bold mb-4">Tour not found</h1>
					<Link to="/" className="text-blue-700 hover:underline">Go back home</Link>
				</main>
				<Footer />
			</div>
		);
	}

	const htmlPath = `/tours/${slug}.html`;

	useEffect(() => {
		if (!slug) return;
		setIsLoading(true);
		setError('');
		fetch(htmlPath)
			.then(async (res) => {
				if (!res.ok) throw new Error(`Failed to load ${htmlPath}`);
				const text = await res.text();
				let bodyOnly = text;
				try {
					const parser = new DOMParser();
					const doc = parser.parseFromString(text, 'text/html');
					bodyOnly = doc.body ? doc.body.innerHTML : text;
				} catch {
					// Fallback to raw text if DOMParser is unavailable
				}
				// Sanitize content: remove images, scripts, iframes, inline styles, and brand phrase
				bodyOnly = bodyOnly
					.replace(/<img[^>]*>/gi, '')
					.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
					.replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, '')
					.replace(/\sstyle="[^"]*"/gi, '')
					.replace(/Mahaweli\s+Tours\s*&\s*Holidays/gi, '');
				setHtmlContent(bodyOnly);
			})
			.catch((e: unknown) => {
				setError(e instanceof Error ? e.message : 'Failed to load content');
			})
			.finally(() => setIsLoading(false));
	}, [htmlPath, slug]);

	const whatsappHref = `https://wa.me/94764519940?text=${encodeURIComponent('Hello, I am interested in the ' + tour.title + ' tour. Can you share more details?')}`;

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-grow">
				<section className="relative h-[50vh] w-full mt-20">
					<img src={tour.image} alt={tour.title} className="absolute inset-0 w-full h-full object-cover blur-sm" />
					<div className="absolute inset-0 bg-black/30" />
					<div className="container relative h-full flex items-end pb-8 z-10">
						<h1 className="text-3xl md:text-5xl font-display font-bold text-white">{tour.title}</h1>
					</div>
				</section>

				<section className="container mx-auto px-4 py-12">
					<div className="grid grid-cols-1 gap-8">
						<div>
							{/* Full description */}
							<div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
								{isLoading && (
									<div className="p-6 text-foreground/70">Loading tour details…</div>
								)}
								{error && !isLoading && (
									<div className="p-6 text-red-600">{error}</div>
								)}
								{!isLoading && !error && (
									<div className="min-h-screen tour-content p-6">
										<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
									</div>
								)}
							</div>

							{/* WhatsApp CTA below content */}
							<div className="mt-6">
								<a
									href={whatsappHref}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-600 text-white font-medium shadow hover:bg-green-700 hover:shadow-md transition-all"
								>
									Contact on WhatsApp
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default TourDetails;
