'use client'

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export default function LightModePage() {
  const pathname = usePathname();

  return (
    <div className={clsx("container", { "dark-mode": pathname === "/dark-mode" })}>
      <h1>Light Mode Page</h1>
      <Link href="/dark-mode"><button>Dark-Mode</button></Link>
    </div>
  );
}