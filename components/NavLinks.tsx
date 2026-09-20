'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const today = new Date();
  const dayOfWeek = today.getDay();
  const isSunday = dayOfWeek === 0;

  return (
    <nav className="border-b bg-white px-8 py-3">
      <ul className="mx-auto flex max-w-5xl gap-2">
        <li>
          <Link
            href="/"
            className={`rounded px-3 py-2 hover:bg-gray-100 ${
              pathname === '/' ? 'font-bold underline' : ''
            }`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/meetings"
            className={`rounded px-3 py-2 hover:bg-gray-100 ${
              pathname === '/meetings' ? 'font-bold underline' : ''
            }`}
          >
            Meetings Archive
          </Link>
        </li>

        <li>
          <Link
            href="/meetings/current"
            className={`rounded px-3 py-2 hover:bg-gray-100 ${
              pathname === '/meetings/current' ? 'font-bold underline' : ''
            }`}
          >
            {isSunday ? 'Current Meeting' : 'Upcoming Meeting'}
          </Link>
        </li>
      </ul>
    </nav>
  );
}