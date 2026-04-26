'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Calendar, Clock, MapPin, Upload, BookOpen } from 'lucide-react';

export default function MatchmakingForm() {
  const FormSection = ({ title, type }: { title: string, type: 'Boy' | 'Girl' }) => (
    <div className="space-y-6 p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${type === 'Boy' ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600'}`}>
          <User size={20} />
        </div>
        <h3 className="text-xl font-bold font-serif text-slate-900">{title}</h3>
      </div>
      
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor={`${type}-name`}>Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input id={`${type}-name`} placeholder="Enter name" className="pl-10 h-12 rounded-xl" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${type}-dob`}>Date of Birth</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input id={`${type}-dob`} type="date" className="pl-10 h-12 rounded-xl" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${type}-time`}>Time of Birth</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input id={`${type}-time`} type="time" className="pl-10 h-12 rounded-xl" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${type}-place`}>Place of Birth</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input id={`${type}-place`} placeholder="City, State, Country" className="pl-10 h-12 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white" id="details">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900">Required Details</h2>
            <p className="text-slate-600 text-lg">Please provide accurate birth details for both individuals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormSection title="Boy's Details" type="Boy" />
            <FormSection title="Girl's Details" type="Girl" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button size="lg" className="w-full sm:w-auto px-10 h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 flex items-center gap-2 group transition-all">
              <Upload size={20} className="group-hover:scale-110 transition-transform" />
              Upload Details
            </Button>
            
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 h-14 rounded-full border-2 border-slate-200 hover:border-primary hover:text-primary font-bold text-lg flex items-center gap-2 group transition-all">
              <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
              Book Matchmaking Analysis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
