import Link from 'next/link'


export default function Header() {
    return (
     <header className="site-container py-6">
        <nav className="space-x-4">
          <Link href="/">
            <a>Hakkımda</a>
          </Link>
          <Link href="/blog">
            <a>Yazılar</a>
          </Link>
          <button id="toggletheme" className="text-sm bg-white p-3  border border-black text-black rounded dark:bg-black ">
            Dark Mod
          </button>
        </nav>
     </header>
    )
}