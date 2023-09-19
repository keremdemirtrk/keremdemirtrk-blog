import Link from 'next/link'


export default function Header() {
    return (
     <header className="site-container py-6">
        <nav className="space-x-4">
          <Link href="/">
            <a>Main</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <Link>
            <a>Education</a>
          </Link>
          <Link>
            <a>Projects</a>
          </Link>
          <Link>
            <a>Experience</a>
          </Link>
          <Link>
            <a>Certification</a>
          </Link>
          <Link>
            <a>Social Media</a>
          </Link>
          <button id="toggletheme" className="text-sm bg-white p-3  border border-black text-black rounded dark:bg-black ">
            Dark Mod
          </button>
        </nav>
     </header>
    )
}