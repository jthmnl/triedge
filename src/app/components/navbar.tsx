import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="
        my-5 mx-auto
        max-w-4xl
        flex
        justify-start
        p-5
        ">
        <div className="flex lg:justify-start items-center">
          {/* Logo on the left */}
          <div className="font-bold">
            <Link href="/">
            — triedge.
            </Link>
          </div>
        </div>
      </nav>
    )
}