'use client'

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export default function DarkModePage() {
  const pathname = usePathname();

  return (
    <div className={clsx("container", { "dark-mode": pathname === "/dark-mode" })}>
      <h1>Dark Mode Page</h1>
      <Link href="/light-mode"><button>Light-Mode</button></Link>
    </div>
  );
}