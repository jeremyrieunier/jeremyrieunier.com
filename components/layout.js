import Link from 'next/link';
import headerNavLinks from './headerNav';

const name =`Jeremy Rieunier`;
export const siteTitle = `Jeremy Rieunier`

export default function Layout({children, home}) {
  return(
    <div className="max-w-xl mx-auto mb-16">
      <header className="flex py-7">
        <nav className="flex items-center">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="p-4">{link.title}</Link>
          ))}
        </nav>
      </header>
      <main className="px-4">
        {children}
        {!home && (
          <div className="mt-12">
            <Link href="/">← Back to 🏠 home</Link>
          </div>
        )}
      </main>
    </div>        
  );
}