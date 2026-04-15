'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage(t('contact.error.name'));
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage(t('contact.error.email'));
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage(t('contact.error.phone'));
      return false;
    }
    if (!formData.service) {
      setErrorMessage(t('contact.error.service'));
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage(t('contact.error.message'));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || t('contact.error.message'));
        setStatus('error');
        return;
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(t('contact.error.message'));
    }
  };

  return (
    <Card className="cosmic-border glass-effect max-w-2xl mx-auto">
      <CardHeader className="space-y-2">
        <CardTitle className="text-3xl">{t('contact.title')}</CardTitle>
        <CardDescription>
          {t('contact.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {status === 'success' && (
          <Alert className="mb-6 border-primary/50 bg-primary/10">
            <CheckCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              {t('contact.success')}
            </AlertDescription>
          </Alert>
        )}

        {status === 'error' && errorMessage && (
          <Alert className="mb-6 border-destructive/50 bg-destructive/10">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive">
              {errorMessage}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('contact.label.name')}</label>
              <Input
                type="text"
                name="name"
                placeholder={t('contact.placeholder.name')}
                value={formData.name}
                onChange={handleChange}
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('contact.label.email')}</label>
              <Input
                type="email"
                name="email"
                placeholder={t('contact.placeholder.email')}
                value={formData.email}
                onChange={handleChange}
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('contact.label.phone')}</label>
              <Input
                type="tel"
                name="phone"
                placeholder={t('contact.placeholder.phone')}
                value={formData.phone}
                onChange={handleChange}
                className="bg-muted/50 border-border focus:border-primary"
              />
            </div>

            {/* Service */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('contact.label.service')}</label>
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="bg-muted/50 border-border focus:border-primary">
                  <SelectValue placeholder={t('contact.placeholder.service')} />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="vedic-astrology">{t('contact.service.vedic')}</SelectItem>
                  <SelectItem value="tarot-reading">{t('contact.service.tarot')}</SelectItem>
                  <SelectItem value="both">{t('contact.service.both')}</SelectItem>
                  <SelectItem value="other">{t('contact.service.other')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">{t('contact.label.message')}</label>
            <Textarea
              name="message"
              placeholder={t('contact.placeholder.message')}
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="bg-muted/50 border-border focus:border-primary resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="btn-premium w-full py-6 text-base"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('contact.button.sending')}
              </>
            ) : (
              t('contact.button.send')
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            {t('contact.privacy')}
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
