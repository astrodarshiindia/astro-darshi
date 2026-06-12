import Image from 'next/image';
import Link from 'next/link';
import { SITE_LOGO, SITE_NAME } from '@/lib/seo';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export default function Logo({
  className = 'group flex min-w-0 items-center gap-2.5',
  imageClassName = 'h-9 w-9 shrink-0 md:h-10 md:w-10',
  textClassName = 'truncate text-xl font-serif font-bold tracking-tighter md:text-2xl',
  showText = true,
}: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src={SITE_LOGO}
        alt={SITE_NAME}
        width={80}
        height={80}
        className={`rounded-full object-cover ${imageClassName}`}
        priority
      />
      {showText && (
        <span className={textClassName}>
          ASTRO <span className="text-primary">Darshi</span>
        </span>
      )}
    </Link>
  );
}
