// app/page.js
import Link from 'next/link';

// HINT: Use the `usePathname` hook to get the current pathname.
// HINT: Use the `clsx` utility to conditionally apply the 'dark-mode' class.
// HINT: There should also be two new pages we are redirecting to. Think about how we make more pages within Next.js.

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <Link href="/dark-mode"><button>Dark-Mode</button></Link>
      <Link href="/light-mode"><button>Light-Mode</button></Link>
    </div>
  );
}

export default Home;