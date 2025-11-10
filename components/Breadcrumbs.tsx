'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-8 text-sm text-charcoal/60">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
        </li>

        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-charcoal/40">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-charcoal transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-charcoal font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
