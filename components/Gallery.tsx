'use client';

import { useCallback, useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';

export type Photo = { src: StaticImageData; alt: string; caption: string };
export type GalleryItem = Photo | { placeholder: true };

function isPhoto(it: GalleryItem): it is Photo {
  return !('placeholder' in it);
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const photos = items.filter(isPhoto);
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const show = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') show(1);
      else if (e.key === 'ArrowLeft') show(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close, show]);

  return (
    <section className="wrap">
      <div className="gal">
        {items.map((it, i) =>
          isPhoto(it) ? (
            <figure key={i}>
              <button
                type="button"
                className="gal-btn"
                aria-label={`Открыть фото: ${it.caption}`}
                onClick={() => setActive(photos.indexOf(it))}
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  placeholder="blur"
                  sizes="(max-width:760px) 100vw, (max-width:1024px) 50vw, 33vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <figcaption>{it.caption}</figcaption>
              </button>
            </figure>
          ) : (
            <figure key={i} className="ph-empty">
              + фото для замены
            </figure>
          )
        )}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lb-close" aria-label="Закрыть" onClick={close}>
            ✕
          </button>
          <button
            className="lb-nav lb-prev"
            aria-label="Предыдущее фото"
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
          >
            ‹
          </button>
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              placeholder="blur"
              sizes="90vw"
              style={{ width: 'auto', height: 'auto', maxWidth: '90vw', maxHeight: '82vh' }}
            />
            <figcaption>{photos[active].caption}</figcaption>
          </figure>
          <button
            className="lb-nav lb-next"
            aria-label="Следующее фото"
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
