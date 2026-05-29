import type { Metadata } from 'next';
import Gallery, { type GalleryItem } from '@/components/Gallery';
import CtaBlock from '@/components/CtaBlock';
import TgButton from '@/components/TgButton';

export const metadata: Metadata = {
  title: 'Репортаж — Валентина Головко',
};

const items: GalleryItem[] = [
  { src: '/img/rep-barre.jpg', w: 1800, h: 1200, alt: 'Репортаж — балет у станка', caption: 'У станка' },
  { src: '/img/rep-boy.jpg', w: 1200, h: 1800, alt: 'Репортаж — портрет в зале', caption: 'Перед выходом' },
  { src: '/img/rep-hands.jpg', w: 1800, h: 1200, alt: 'Репортаж — детали', caption: 'Детали' },
  { src: '/img/rep-stretch.jpg', w: 1800, h: 1200, alt: 'Репортаж — растяжка', caption: 'Разминка' },
  { placeholder: true },
  { placeholder: true },
];

export default function ReportagePage() {
  return (
    <main className="page">
      <section className="wrap phero">
        <div>
          <div className="crumb">01 — Направление</div>
          <h1>Репортаж</h1>
        </div>
        <p>
          Живые серии без постановки: репетиции, события, движение. Ловлю момент,
          в который человек забывает про камеру.
        </p>
      </section>

      <Gallery items={items} />

      <CtaBlock
        title="Нужен репортаж?"
        text="Расскажите про событие и формат — подберём время и обсудим детали."
      >
        <TgButton label="Записаться на съёмку" />
      </CtaBlock>
    </main>
  );
}
