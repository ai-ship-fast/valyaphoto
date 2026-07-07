import type { Metadata } from 'next';
import Gallery, { type GalleryItem } from '@/components/Gallery';
import CtaBlock from '@/components/CtaBlock';
import TgButton from '@/components/TgButton';
import { IMG } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Репортаж — Валентина Головко',
};

const items: GalleryItem[] = [
  { src: IMG.repBarre, alt: 'Репортаж — балет у станка', caption: 'У станка' },
  { src: IMG.repBoy, alt: 'Репортаж — портрет в зале', caption: 'Перед выходом' },
  { src: IMG.repHands, alt: 'Репортаж — детали', caption: 'Детали' },
  { src: IMG.repStretch, alt: 'Репортаж — растяжка', caption: 'Разминка' },
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
