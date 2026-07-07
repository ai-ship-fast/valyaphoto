import Image from 'next/image';
import Link from 'next/link';
import TgButton from '@/components/TgButton';
import CtaBlock from '@/components/CtaBlock';
import { TG } from '@/lib/site';
import { IMG } from '@/lib/images';

const categories = [
  { href: '/reportage', img: IMG.repStretch, title: 'Репортаж', n: '01', desc: 'Балет, события, живые серии', alt: 'Репортаж' },
  { href: '/portrait', img: IMG.portraitDancer, title: 'Портрет', n: '02', desc: 'Характер и настроение', alt: 'Портрет' },
  { href: '/wedding', img: IMG.wedVeil, title: 'Свадьба', n: '03', desc: 'Тёплые истории пары', alt: 'Свадьба' },
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="wrap hero">
        <div className="hero-l">
          <div className="tag">Фотограф · Владивосток</div>
          <h1 className="h1">
            Искренние кадры <span>в естественном свете</span>
          </h1>
          <p className="lead">
            Люблю съёмку — ищу подходящий ракурс и ловлю живую эмоцию. Снимаю
            людей в красивой среде: от бетонных джунглей города до хвойной тайги
            Приморья.
          </p>
          <div className="actions">
            <TgButton label="Записаться на съёмку" />
            <a className="tlink" href={TG} target="_blank" rel="noopener">
              Узнать свободную дату
            </a>
          </div>
        </div>
        <div className="hero-r">
          <Image
            src={IMG.valentina}
            alt="Валентина Головко, фотограф"
            fill
            priority
            placeholder="blur"
            sizes="(max-width:760px) 100vw, 50vw"
          />
          <div className="fcap">Приморье · 2026</div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head">
          <h2>Направления</h2>
          <span className="c">Репортаж · Портрет · Свадьба</span>
        </div>
        <div className="cat-grid">
          {categories.map((c) => (
            <Link key={c.href} className="cat" href={c.href}>
              <div className="ph">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width:760px) 100vw, 33vw"
                />
              </div>
              <div className="cat-foot">
                <h3>{c.title}</h3>
                <span className="n">{c.n}</span>
              </div>
              <div className="desc">{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBlock
        title="Снимем вашу историю?"
        text="Напишите в Telegram — обсудим идею, локацию и подберём свободную дату."
      >
        <TgButton label="Записаться на съёмку" />
        <a className="btn ghost" href={TG} target="_blank" rel="noopener">
          Узнать свободную дату
        </a>
      </CtaBlock>
    </main>
  );
}
