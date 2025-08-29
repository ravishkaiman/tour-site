
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [nights, setNights] = useState("2");
  const [calendarOpen, setCalendarOpen] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      destination,
      checkIn,
      checkOut,
      guests: guests.toString()
    });
    // Navigate to WhatsApp with prefilled message instead of booking page
    const msg = encodeURIComponent(`Inquiry: ${destination} from ${checkIn} to ${checkOut} for ${guests} guests`);
    window.location.href = `https://wa.me/94764519940?text=${msg}`;
  };
  
  return (
    <form 
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="flex-1 space-y-2">
        <label className="text-sm font-medium">Check-in Date</label>
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !checkInDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkInDate ? format(checkInDate, "PPP") : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={checkInDate}
              onSelect={(date) => {
                setCheckInDate(date);
                // Close the calendar popover after selection
                setCalendarOpen(false);
              }}
              initialFocus
              disabled={(date) => date < new Date()}
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="flex-1 space-y-2">
        <label className="text-sm font-medium">Nights</label>
        <Select value={nights} onValueChange={setNights}>
          <SelectTrigger>
            <SelectValue placeholder="Select nights" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'night' : 'nights'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex-1 space-y-2">
        <label className="text-sm font-medium">Adults</label>
        <Select value={adults} onValueChange={setAdults}>
          <SelectTrigger>
            <SelectValue placeholder="Select adults" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'adult' : 'adults'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex-1 space-y-2">
        <label className="text-sm font-medium">Children</label>
        <Select value={children} onValueChange={setChildren}>
          <SelectTrigger>
            <SelectValue placeholder="Select children" />
          </SelectTrigger>
          <SelectContent>
            {[0, 1, 2, 3, 4].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'child' : 'children'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex-none self-end">
        <Button type="submit" size="lg" className="h-10">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </form>
  );
};
