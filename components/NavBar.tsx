import localFont from "next/font/local";
import Link from "next/link";

const fettefraktur = localFont({
  src: "../public/fonts/fettefraktur.ttf"
});

export default function NavBar() {
  return (
    <header className="text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex flex-col">
            <h1 className={`${fettefraktur.className} text-4xl md:text-5xl`}>
              uchifinals
            </h1>
            <p className="text-sm md:text-sm mt-1">
              find your uchicago final exam schedule fast
            </p>
            <p className="text-xs md:text-sm mt-1">
              current qurater: <span className="font-bold">autumn 2024</span>
            </p>
          </div>
        </Link>
        <nav>
          <ul className="flex gap-6 text-sm md:text-base font-bold">
            <li>
              Made by Esslam Ashour, class of 2027
            </li>
            <li>
              <a href="mailto:esslamashour@uchicago.edu" className="text-[#800000] bg-white p-3 rounded-3xl font-normal hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
