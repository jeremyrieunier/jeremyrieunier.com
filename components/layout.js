import Head from 'next/head';
import Link from 'next/link';
import headerNavLinks from './headerNav';

const name =`Jeremy Rieunier`;
export const sitTitle = `Jeremy Rieunier`

export default function Layout({children, home}) {
  return(
    <div>
      <header>
        <nav>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>{link.title}</Link>
          ))}
        </nav>
      </header>
      <main>
        {!home && (
          <div>
            <Link href="/">← Back to 🏠 home</Link>
          </div>
        )}
      </main>
    </div>        
  );
}