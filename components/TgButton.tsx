import type { CSSProperties } from 'react';
import { TG } from '@/lib/site';
import TgIcon from './TgIcon';

type Props = {
  label: string;
  ghost?: boolean;
  style?: CSSProperties;
};

export default function TgButton({ label, ghost, style }: Props) {
  return (
    <a
      className={ghost ? 'btn ghost' : 'btn'}
      href={TG}
      target="_blank"
      rel="noopener"
      style={style}
    >
      <TgIcon /> {label}
    </a>
  );
}
