import Image from 'next/image';

export type GalleryItem =
  | { src: string; w: number; h: number; alt: string; caption: string }
  | { placeholder: true };

export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <section className="wrap">
      <div className="gal">
        {items.map((it, i) =>
          'placeholder' in it ? (
            <figure key={i} className="ph-empty">
              + фото для замены
            </figure>
          ) : (
            <figure key={i}>
              <Image
                src={it.src}
                alt={it.alt}
                width={it.w}
                height={it.h}
                sizes="(max-width:760px) 100vw, (max-width:1024px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>{it.caption}</figcaption>
            </figure>
          )
        )}
      </div>
    </section>
  );
}
