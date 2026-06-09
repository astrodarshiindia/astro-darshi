'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Calendar, Clock, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import { submitEnquiry } from '@/lib/submitEnquiry';
import { useToast } from '@/hooks/use-toast';

export default function MatchmakingForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    boyName: '',
    boyDob: '',
    boyTime: '',
    boyPlace: '',
    girlName: '',
    girlDob: '',
    girlTime: '',
    girlPlace: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const FormSection = ({ title, type }: { title: string; type: 'Boy' | 'Girl' }) => {
    const prefix = type === 'Boy' ? 'boy' : 'girl';

    return (
      <div className="space-y-6 p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${type === 'Boy' ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600'}`}>
            <User size={20} />
          </div>
          <h3 className="text-xl font-bold font-serif text-slate-900">{title}</h3>
        </div>

        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor={`${prefix}-name`}>Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input
                id={`${prefix}-name`}
                required
                value={formData[`${prefix}Name` as keyof typeof formData]}
                onChange={(e) => updateField(`${prefix}Name`, e.target.value)}
                placeholder="Enter name"
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${prefix}-dob`}>Date of Birth</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input
                id={`${prefix}-dob`}
                type="date"
                required
                value={formData[`${prefix}Dob` as keyof typeof formData]}
                onChange={(e) => updateField(`${prefix}Dob`, e.target.value)}
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${prefix}-time`}>Time of Birth</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input
                id={`${prefix}-time`}
                type="time"
                required
                value={formData[`${prefix}Time` as keyof typeof formData]}
                onChange={(e) => updateField(`${prefix}Time`, e.target.value)}
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${prefix}-place`}>Place of Birth</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input
                id={`${prefix}-place`}
                required
                value={formData[`${prefix}Place` as keyof typeof formData]}
                onChange={(e) => updateField(`${prefix}Place`, e.target.value)}
                placeholder="City, State, Country"
                className="pl-10 h-12 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message =
      `Matchmaking Analysis Request\n\n` +
      `Boy's Details:\nName: ${formData.boyName}\nDOB: ${formData.boyDob}\nTime: ${formData.boyTime}\nPlace: ${formData.boyPlace}\n\n` +
      `Girl's Details:\nName: ${formData.girlName}\nDOB: ${formData.girlDob}\nTime: ${formData.girlTime}\nPlace: ${formData.girlPlace}`;

    const result = await submitEnquiry({
      name: formData.contactName,
      email: formData.contactEmail,
      phone: formData.contactPhone,
      service_type: 'matchmaking',
      source_page: 'Matchmaking Page',
      message,
    });

    if (result.success) {
      toast({
        title: 'Details submitted!',
        description: 'We will analyse compatibility and contact you soon.',
      });
      setFormData({
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        boyName: '',
        boyDob: '',
        boyTime: '',
        boyPlace: '',
        girlName: '',
        girlDob: '',
        girlTime: '',
        girlPlace: '',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Submission failed',
        description: result.error || 'Please try again.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-white" id="details">
      <div className="section-container">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900">Required Details</h2>
            <p className="text-slate-600 text-lg">Please provide accurate birth details for both individuals.</p>
          </div>

          <div className="p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
            <h3 className="text-lg font-serif text-slate-900">Your Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input required value={formData.contactName} onChange={(e) => updateField('contactName', e.target.value)} className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input required type="tel" value={formData.contactPhone} onChange={(e) => updateField('contactPhone', e.target.value)} className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" value={formData.contactEmail} onChange={(e) => updateField('contactEmail', e.target.value)} className="h-12 rounded-xl" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormSection title="Boy's Details" type="Boy" />
            <FormSection title="Girl's Details" type="Girl" />
          </div>

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full sm:w-auto px-10 h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20"
            >
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
              ) : (
                'Book Matchmaking Analysis'
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
