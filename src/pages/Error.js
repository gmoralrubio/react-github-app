import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="flex h-screen justify-center">
      <div className="relative flex flex-col items-center ">
        <h1 className="relative z-50 mb-4 mt-40 text-8xl font-bold after:absolute after:left-0 after:top-10 after:-z-10 after:h-8 after:w-full after:bg-yellow-400">
          404
        </h1>
        <span className="text-xl">Ups! Page not found.</span>
        <Link
          to="/"
          className="mt-10 rounded-full bg-emerald-500 px-8 py-2 text-lg font-bold text-white hover:bg-emerald-600"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
