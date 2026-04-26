'use client';

import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Sparkles, Loader2, CheckCircle2, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface MatrimonialFormModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MatrimonialFormModal({ isOpen, onOpenChange }: MatrimonialFormModalProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    pob: '',
    gender: '',
    caste: '',
    height: '',
    weight: '',
    education: '',
    profession: '',
    location: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = `*New Matrimonial Registration*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*DOB:* ${formData.dob}\n` +
        `*Time:* ${formData.tob}\n` +
        `*Place:* ${formData.pob}\n` +
        `*Gender:* ${formData.gender}\n` +
        `*Caste/Gotra:* ${formData.caste}\n` +
        `*Height:* ${formData.height}\n` +
        `*Weight:* ${formData.weight}\n` +
        `*Education:* ${formData.education}\n` +
        `*Profession:* ${formData.profession}\n` +
        `*Location:* ${formData.location}`;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: 'matrimonial@astrodarshi.com',
          phone: 'N/A',
          service_type: 'matrimonial',
          message: message.replace(/\*/g, '')
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setIsSuccess(true);
      toast({
        title: t('contact.success'),
        description: "Your matrimonial profile has been submitted successfully.",
      });

      setTimeout(() => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/919999999999?text=${encodedMessage}`, '_blank');
      }, 1500);

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem submitting your form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[650px] p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl">
        {!isSuccess ? (
          <div className="flex flex-col h-full bg-white">
            <div className="p-8 pb-6 bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <DialogTitle className="text-3xl font-serif flex items-center gap-3">
                  <Heart className="text-primary fill-primary" />
                  {t('matrimonial.form.title')}
                </DialogTitle>
                <DialogDescription className="text-slate-400 mt-2 text-lg">
                  Share your details to find your cosmic match.
                </DialogDescription>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-bold">{t('matrimonial.form.name')}</Label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-slate-700 font-bold">{t('matrimonial.form.gender')}</Label>
                  <Select onValueChange={(v) => setFormData({...formData, gender: v})}>
                    <SelectTrigger className="h-12 rounded-xl border-slate-200">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male / पुरुष</SelectItem>
                      <SelectItem value="female">Female / महिला</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dob" className="text-slate-700 font-bold">{t('matrimonial.form.dob')}</Label>
                  <Input 
                    id="dob" 
                    type="date"
                    required 
                    value={formData.dob}
                    onChange={(e) => setFormData({...formData, dob: e.target.value})}
                    className="h-12 rounded-xl border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tob" className="text-slate-700 font-bold">{t('matrimonial.form.tob')}</Label>
                  <Input 
                    id="tob" 
                    type="time"
                    required 
                    value={formData.tob}
                    onChange={(e) => setFormData({...formData, tob: e.target.value})}
                    className="h-12 rounded-xl border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pob" className="text-slate-700 font-bold">{t('matrimonial.form.pob')}</Label>
                  <Input 
                    id="pob" 
                    required 
                    placeholder="Birth City"
                    value={formData.pob}
                    onChange={(e) => setFormData({...formData, pob: e.target.value})}
                    className="h-12 rounded-xl border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="caste" className="text-slate-700 font-bold">{t('matrimonial.form.caste')}</Label>
                  <Input 
                    id="caste" 
                    required 
                    placeholder="Caste / Gotra"
                    value={formData.caste}
                    onChange={(e) => setFormData({...formData, caste: e.target.value})}
                    className="h-12 rounded-xl border-slate-200"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height" className="text-slate-700 font-bold">{t('matrimonial.form.height')}</Label>
                    <Input 
                      id="height" 
                      placeholder="5'8\""
                      value={formData.height}
                      onChange={(e) => setFormData({...formData, height: e.target.value})}
                      className="h-12 rounded-xl border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight" className="text-slate-700 font-bold">{t('matrimonial.form.weight')}</Label>
                    <Input 
                      id="weight" 
                      placeholder="70kg"
                      value={formData.weight}
                      onChange={(e) => setFormData({...formData, weight: e.target.value})}
                      className="h-12 rounded-xl border-slate-200"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="education" className="text-slate-700 font-bold">{t('matrimonial.form.education')}</Label>
                  <Input 
                    id="education" 
                    required 
                    placeholder="Degree / Qualification"
                    value={formData.education}
                    onChange={(e) => setFormData({...formData, education: e.target.value})}
                    className="h-12 rounded-xl border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profession" className="text-slate-700 font-bold">{t('matrimonial.form.profession')}</Label>
                  <Input 
                    id="profession" 
                    required 
                    placeholder="Job / Business"
                    value={formData.profession}
                    onChange={(e) => setFormData({...formData, profession: e.target.value})}
                    className="h-12 rounded-xl border-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-2 pb-4">
                <Label htmlFor="location" className="text-slate-700 font-bold">{t('matrimonial.form.location')}</Label>
                <Input 
                  id="location" 
                  required 
                  placeholder="Current City, State"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="h-12 rounded-xl border-slate-200"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold tracking-wider uppercase rounded-xl shadow-lg shadow-primary/20"
              >
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
                ) : (
                  'Complete Registration'
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center space-y-6 bg-white">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-serif text-slate-900">Registration Successful!</h3>
              <p className="text-slate-600 text-lg">
                Your profile has been received. Our team will contact you shortly for verification.
              </p>
            </div>
            <Button 
              onClick={() => {
                setIsSuccess(false);
                onOpenChange(false);
              }}
              variant="outline"
              className="px-8 rounded-full h-12"
            >
              Close Window
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
