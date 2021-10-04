import Link from 'next/link'

export default function Header(){
  return(
    <header className="flex items-center justify-between p-4 bg-indigo-900 text-gray-50 text-2xl mb-7">
    <h1>Cookie Stand Admin</h1>
    <nav className="flex items-center justify-left space-x-10">
    <Link href="/overview">
      <a className="px-3 py-1.5 bg-gray-50 rounded-lg">Overview</a>
    </Link>
    </nav>
</header>
  )
}