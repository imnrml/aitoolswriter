import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-zinc-950/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">A</span>
          </div>
          <span className="font-semibold text-xl tracking-tight">AI Tools Writer</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link 
            href="/blog" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/about" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>

          <Link 
            href="/blog" 
            className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
          >
            Jelajahi Artikel
          </Link>
        </div>
      </div>
    </nav>
  );
}