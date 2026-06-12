import type { ReactNode } from 'react';

interface PolicySectionProps {
  title: string;
  children: ReactNode;
}

export function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section>
      <h2 className="mb-4 font-serif text-2xl text-foreground">{title}</h2>
      <div className="space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
