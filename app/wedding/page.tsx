import type { Metadata } from 'next';
import Gallery, { type GalleryItem } from '@/components/Gallery';
import CtaBlock from '@/components/CtaBlock';
import TgButton from '@/components/TgButton';
import { IMG } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Свадьба — Валентина Головко',
};

const items: GalleryItem[] = [
  { src: IMG.wedForestLead, alt: 'Свадьба — в лесу', caption: 'Хвойная тайга' },
  { src: IMG.wedLaugh, alt: 'Свадьба — эмоция', caption: 'Искренний смех' },
  { src: IMG.wedRings, alt: 'Свадьба — кольца', caption: 'Детали' },
  { src: IMG.wedLift, alt: 'Свадьба — пара', caption: 'Вдвоём' },
  { src: IMG.wedGroomTie, alt: 'Свадьба — сборы', caption: 'Сборы' },
  { src: IMG.wedVeil, alt: 'Свадьба — фата', caption: 'Фата' },
  { src: IMG.wedIvy, alt: 'Свадьба — портрет невесты', caption: 'Среди зелени' },
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
