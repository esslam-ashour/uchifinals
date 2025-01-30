import localFont from "next/font/local";
import Link from "next/link";

const fettefraktur = localFont({
  src: "../public/fonts/fettefraktur.ttf"
});

export default function NavBar() {
  return (
<<<<<<< HEAD
    <div>
      <header className="text-white">
        <div className="container mx-auto flex md:flex-row items-center justify-between">
          <div className={`${fettefraktur.className} text-4xl md:text-5xl lg:text-6xl mt-6 md:my-8 lg:mb-2`}>
            uchifinals
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <div>Made by Esslam Ashour, Class of 2027</div>
              <a href="https://github.com/esslam-ashour">GitHub</a><br></br>
              <a href="https://www.linkedin.com/in/esslam-ashour/">LinkedIn</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
=======
    <header className="text-white py-2 md:py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-2 md:px-4">
        <Link href="/">
          <div className="flex flex-col items-center md:items-start">
            <h1 className={`${fettefraktur.className} text-2xl md:text-5xl`}>
              uchifinals
            </h1>
            <p className="text-xs md:text-sm mt-1 text-center md:text-left">
              find your uchicago final exam schedule fast
            </p>
            <p className="text-xs md:text-sm mt-1 text-center md:text-left">
              current quarter: <span className="font-bold">autumn 2024</span>
            </p>
          </div>
        </Link>
        <nav className="mt-2 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-xs md:text-base font-bold items-center">
            <li className="text-center">
              Made by Esslam Ashour, class of 2027
            </li>
            <li>
              <a href="mailto:esslamashour@uchicago.edu" className="text-[#800000] bg-white p-1 md:p-3 rounded-3xl font-normal hover:underline text-center block">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
>>>>>>> 9156fe287f1cde12a19074a0c313f38f5c9ffcda
