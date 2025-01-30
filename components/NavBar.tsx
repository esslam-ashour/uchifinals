import localFont from "next/font/local";
import Link from "next/link";

const fettefraktur = localFont({
  src: "../public/fonts/fettefraktur.ttf"
});

export default function NavBar() {
  return (
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