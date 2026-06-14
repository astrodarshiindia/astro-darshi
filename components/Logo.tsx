'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { SITE_LOGO } from '@/lib/seo';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export default function Logo({
  className = 'group flex shrink-0 items-center gap-2.5',
  imageClassName = 'h-9 w-9 shrink-0 md:h-10 md:w-10',
  textClassName = 'whitespace-nowrap text-xl font-serif font-bold tracking-tighter text-stone-600 md:text-2xl',
  showText = true,
}: LogoProps) {
  const { t, language } = useLanguage();
  const isEnglishBrand = language === 'en';

  return (
    <Link href="/" className={`${className} overflow-visible`}>
      <Image
        src={SITE_LOGO}
        alt={t('brand.name.full')}
        width={80}
        height={80}
        className={`rounded-full object-cover ${imageClassName}`}
        priority
      />
      {showText && (
        <span
          className={`overflow-visible ${textClassName} ${
            isEnglishBrand ? 'max-md:whitespace-normal md:whitespace-nowrap' : 'whitespace-nowrap'
          }`}
        >
          {isEnglishBrand ? (
            <>
              <span className="block leading-none md:inline md:leading-inherit">Astro</span>
              <span className="block leading-none md:inline md:leading-inherit">
                <span className="hidden md:inline"> </span>
                Paramarsh
              </span>
            </>
          ) : (
            t('brand.name.full')
          )}
        </span>
      )}
    </Link>
  );
}
