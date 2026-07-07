import type { Metadata } from 'next';
import Gallery, { type GalleryItem } from '@/components/Gallery';
import CtaBlock from '@/components/CtaBlock';
import TgButton from '@/components/TgButton';
import { IMG } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Портрет — Валентина Головко',
};

const items: GalleryItem[] = [
  { src: IMG.portraitDancer, alt: 'Портрет — в движении', caption: 'В движении' },
  { src: IMG.repBoy, alt: 'Портрет — свет из окна', caption: 'Свет из окна' },
  { src: IMG.valentina, alt: 'Портрет — на природе', caption: 'На природе' },
  { placeholder: true },
  { placeholder: true },
  { placeholder: true },
];

export default function PortraitPage() {
  return (
    <main className="page">
      <section className="wrap phero">
        <div>
          <div className="crumb">02 — Направление</div>
          <h1>Портрет</h1>
        </div>
        <p>
          Снимаю характер и настроение — в студии и на улице. Красивая среда
          вокруг героя так же важна, как и сам кадр.
        </p>
      </section>

      <Gallery items={items} />

      <CtaBlock
        title="Хотите портретную съёмку?"
        text="Обсудим идею, образ и локацию — от городской натуры до тайги Приморья."
      >
        <TgButton label="Записаться на съёмку" />
      </CtaBlock>
    </main>
  );
}
