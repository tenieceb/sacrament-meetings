'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const today = new Date();
  const isSunday = today.getDay() === 0;

  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className={pathname === '/' ? 'font-bold underline' : ''}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/meetings"
            className={pathname === '/meetings' ? 'font-bold underline' : ''}
          >
            Meetings Archive
          </Link>
        </li>

        <li>
          <Link
            href="/meetings/current"
            className={
              pathname === '/meetings/current'
                ? 'font-bold underline'
                : ''
            }
          >
            {isSunday ? 'Current Meeting' : 'Upcoming Meeting'}
          </Link>
        </li>
      </ul>
    </nav>
  );
}