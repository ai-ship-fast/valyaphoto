import type { ReactNode } from 'react';

type Props = {
  title: string;
  text: string;
  children: ReactNode;
};

export default function CtaBlock({ title, text, children }: Props) {
  return (
    <section className="wrap cta">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="actions" style={{ justifyContent: 'center' }}>
        {children}
      </div>
    </section>
  );
}
