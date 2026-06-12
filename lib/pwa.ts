export const PWA_DISMISS_KEY = 'pwa-install-dismissed-until';
export const PWA_DISMISS_DAYS = 2;

export function isStandaloneMode(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

export function isIosDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function isIosSafari(): boolean {
  if (!isIosDevice() || typeof window === 'undefined') return false;
  const ua = navigator.userAgent;
  const isOtherIosBrowser = /CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
  return !isOtherIosBrowser;
}

export function shouldShowInstallPrompt(): boolean {
  if (typeof window === 'undefined') return false;
  if (isStandaloneMode()) return false;

  const dismissedUntil = localStorage.getItem(PWA_DISMISS_KEY);
  if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
    return false;
  }

  return isMobileDevice();
}

export function dismissInstallPrompt(days = PWA_DISMISS_DAYS) {
  const until = Date.now() + days * 24 * 60 * 60 * 1000;
  localStorage.setItem(PWA_DISMISS_KEY, String(until));
}

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
