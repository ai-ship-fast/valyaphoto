import Link from 'next/link';
import { IG, IG_HANDLE, TG } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-in">
        <div className="l">Валентина Головко · фотограф</div>
        <div className="r">
          <a href={TG} target="_blank" rel="noopener">
            Telegram
          </a>
          <a href={IG} target="_blank" rel="noopener">
            {IG_HANDLE}
          </a>
          <Link href="/pricing">Стоимость</Link>
          <span>Владивосток · Приморье</span>
        </div>
      </div>
    </footer>
  );
}
