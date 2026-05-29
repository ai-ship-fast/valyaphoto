import type { Metadata } from 'next';
import Gallery, { type GalleryItem } from '@/components/Gallery';
import CtaBlock from '@/components/CtaBlock';
import TgButton from '@/components/TgButton';

export const metadata: Metadata = {
  title: 'Портрет — Валентина Головко',
};

const items: GalleryItem[] = [
  { src: '/img/portrait-dancer.jpg', w: 1200, h: 1800, alt: 'Портрет', caption: 'В движении' },
  { src: '/img/rep-boy.jpg', w: 1200, h: 1800, alt: 'Портрет', caption: 'Свет из окна' },
  { src: '/img/valentina.jpg', w: 853, h: 1280, alt: 'Портрет', caption: 'На природе' },
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
