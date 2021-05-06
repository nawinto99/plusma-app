export default function Footer() {
  return (
    <footer className="p-4 bg-black">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{' '}
          <a
            href="https://nawinto99.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Naveen Thurimerla
          </a>
        </li>

        <li>
          <a
            href="https://github.com/nawinto99/plusma-app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}
