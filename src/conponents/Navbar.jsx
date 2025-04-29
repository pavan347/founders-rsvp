import React from 'react'

const Navbar = () => {
  return (
    <div>
          <section id="header" className="bg-white border-b border-gray-200">
    <header className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">

        <div className="flex items-center">
          <a href="#hero" className="text-2xl font-bold text-blue-600">Founders RSVP</a>
        </div>

        <nav className="bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Founders RSVP</span>
            </a>
            <div className="flex md:order-2">
              <a href="#register" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-6 py-2.5 text-center">Register Now</a>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li><a href="#" className="block py-2 pl-3 pr-4 text-blue-600 md:p-0" aria-current="page">Home</a></li>
                <li><a href="#about" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-600 md:p-0">About</a></li>
                <li><a href="#itinerary" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-600 md:p-0">Itinerary</a></li>
                <li><a href="#speakers" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-600 md:p-0">Speakers</a></li>
                <li><a href="#sponsors" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-600 md:p-0">Sponsors</a></li>
                <li><a href="#venue" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-600 md:p-0">Venue</a></li>
                <li><a href="#podcast" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-600 md:p-0">Podcast</a></li>
                <li><a href="#register" className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-600 md:p-0">Register</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </section>
    </div>
  )
}

export default Navbar