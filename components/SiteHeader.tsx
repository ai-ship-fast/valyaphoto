'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IG, IG_HANDLE, NAV } from '@/lib/site';

function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const navLinks = (onClick?: () => void) =>
    NAV.map((p) => (
      <Link
        key={p.key}
        href={p.href}
        className={isActive(p.href, pathname) ? 'on' : undefined}
        onClick={onClick}
      >
        {p.label}
      </Link>
    ));

  return (
    <>
      <header className="site-head">
        <div className="wrap head-in">
          <Link className="brand" href="/">
            valentina<b>.gl</b>
          </Link>
          <nav className="nav">{navLinks()}</nav>
          <a className="ig" href={IG} target="_blank" rel="noopener">
            {IG_HANDLE}
          </a>
          <button
            className={open ? 'burger x' : 'burger'}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-drawer"
        className={open ? 'drawer open' : 'drawer'}
        aria-hidden={!open}
      >
        {navLinks(() => setOpen(false))}
        <a
          className="dig"
          href={IG}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
        >
          {IG_HANDLE}
        </a>
      </div>
    </>
  );
}
