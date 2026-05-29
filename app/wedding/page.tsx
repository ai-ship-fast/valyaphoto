import type { Metadata } from 'next';
import Gallery, { type GalleryItem } from '@/components/Gallery';
import CtaBlock from '@/components/CtaBlock';
import TgButton from '@/components/TgButton';

export const metadata: Metadata = {
  title: 'Свадьба — Валентина Головко',
};

const items: GalleryItem[] = [
  { src: '/img/wed-forest-lead.jpg', w: 1200, h: 1800, alt: 'Свадьба — в лесу', caption: 'Хвойная тайга' },
  { src: '/img/wed-laugh.jpg', w: 1200, h: 1800, alt: 'Свадьба — эмоция', caption: 'Искренний смех' },
  { src: '/img/wed-rings.jpg', w: 1200, h: 1800, alt: 'Свадьба — кольца', caption: 'Детали' },
  { src: '/img/wed-lift.jpg', w: 1200, h: 1800, alt: 'Свадьба — пара', caption: 'Вдвоём' },
  { src: '/img/wed-groom-tie.jpg', w: 1200, h: 1800, alt: 'Свадьба — сборы', caption: 'Сборы' },
  { src: '/img/wed-veil.jpg', w: 1200, h: 1800, alt: 'Свадьба — фата', caption: 'Фата' },
  { src: '/img/wed-ivy.jpg', w: 1200, h: 1800, alt: 'Свадьба — портрет невесты', caption: 'Среди зелени' },
  { placeholder: true },
];

export default function WeddingPage() {
  return (
    <main className="page">
      <section className="wrap phero">
        <div>
          <div className="crumb">03 — Направление</div>
          <h1>Свадьба</h1>
        </div>
        <p>
          Тёплая, честная свадебная история среди хвойной тайги Приморья. Эмоции,
          детали и атмосфера дня — без суеты и навязанных поз.
        </p>
      </section>

      <Gallery items={items} />

      <CtaBlock
        title="Планируете свадьбу?"
        text="Напишите дату и место — расскажу, как проходит съёмка дня, и зарезервирую время."
      >
        <TgButton label="Узнать свободную дату" />
      </CtaBlock>
    </main>
  );
}
