import Link from 'next/link';
export default function Navbar(){

    return(
        <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="text-orange-800 hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/reviews" className="text-orange-800 hover:underline">Reviews</Link>
          </li>
          <li>
            <Link href="/about" prefetch={false} className="text-orange-800 hover:underline">About</Link>
          </li>
        </ul>
      </nav>
    );
}