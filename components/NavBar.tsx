import localFont from "next/font/local";
import Link from "next/link";

const fettefraktur = localFont({
  src: "../public/fonts/fettefraktur.ttf"
});

export default function NavBar() {
  return (
    <Link href="/">
      <header className="text-white">
        <div className="container mx-auto flex md:flex-row items-center justify-center">
          <div className={`${fettefraktur.className} text-4xl md:text-5xl lg:text-6xl mt-6 md:my-8 lg:mb-2`}>
            uchifinals
          </div>
        </div>
      </header>
    </Link>
  )
}
