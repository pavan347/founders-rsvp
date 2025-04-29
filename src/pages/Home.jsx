import React from 'react';

const Home = () => {
    return (
        <>

{/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/90 z-10"></div>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MTB8fGx1eHVyeSUyQnBvb2xzaWRlJTJCbmV0d29ya2luZyUyQmV2ZW50JTJCYXQlMkJKVyUyQk1hcnJpb3R0JTJCQmFuZ2Fsb3JlfGVufDB8fHx8MTc0NTgzNTM5NXww&ixlib=rb-4.0.3&q=80&w=1200" 
               alt="Luxury poolside at JW Marriott Bangalore" 
               className="w-full h-full object-cover opacity-80"/>
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">Founders RSVP</h1>
          <p className="text-3xl text-blue-300 mb-6">Where Builders Pause to Evolve</p>
          <p className="text-xl mb-12">An exclusive poolside networking event for startup founders, VCs, and advisors.</p>
          
          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>May 4th, 2023</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10:30 AM - 12:30 PM</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>JW Marriott, Bangalore</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Reserve Your Spot
            </a>
            <a href="#itinerary" className="bg-black/30 hover:bg-black/40 text-white px-8 py-3 rounded-lg text-lg font-medium backdrop-blur-sm transition-colors border border-white/10">
              View Itinerary
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

        {/* About Section */}
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Founders RSVP</h2>
        <p className="text-xl text-gray-600 mb-8">A unique opportunity to connect, collaborate, and evolve your startup journey.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Where Builders Pause to Evolve</h3>
          <p className="text-gray-600 mb-4">Founders RSVP is not just another networking event. It's a carefully curated experience designed for startup founders to forge meaningful connections in a relaxed poolside setting.</p>
          <p className="text-gray-600 mb-6">Taking place at the luxurious JW Marriott in the heart of Bangalore, this exclusive gathering brings together visionary entrepreneurs, investors, and industry advisors.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Connect with fellow founders</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Meet potential investors</span>
            </div>
          </div>
          
          <a href="#registration" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">Join Us Poolside</a>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <img 
            src="https://images.unsplash.com/photo-1470376619031-a6791e534bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OHx8SlclMkJNYXJyaW90dCUyQkJhbmdhbG9yZSUyQnBvb2wlMkJhcmVhJTJCZGF5dGltZSUyQmV2ZW50fGVufDB8fHx8MTc0NTgzNTQ0OHww&ixlib=rb-4.0.3&q=80&w=400" 
            alt="Relaxing poolside setting at JW Marriott Bangalore" 
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-blue-600 rounded-lg -z-10 translate-x-4 translate-y-4 opacity-20"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Networking</h3>
          <p className="text-gray-600">Make meaningful connections with fellow founders, VCs, and industry advisors in a relaxed setting.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Time Well Spent</h3>
          <p className="text-gray-600">Two focused hours that deliver real value, respecting your busy schedule while maximizing opportunities.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Podcast Spotlight</h3>
          <p className="text-gray-600">Share your founder story in our live podcast recording and gain valuable exposure for your startup.</p>
        </div>
      </div>
    </div>
  </section>

        {/* Itinerary Section */}
  <section id="itinerary" className="py-20 bg-neutral-50">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Event Schedule</h2>
        <p className="text-xl text-gray-600 mb-8">Your 2-hour journey of meaningful connections and inspired growth.</p>
      </div>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-400"></div>
        
        {/* Timeline Events */}
        <div className="space-y-8 md:space-y-0">
          {/* Event 1 */}
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:ml-auto md:mr-0 max-w-md">
                <span className="text-sm font-semibold text-blue-600 block mb-1">10:30 AM</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome & Check-In</h3>
                <p className="text-gray-600">Arrive at JW Marriott's exclusive poolside area and check in with our welcome team.</p>
              </div>
            </div>
            
            <div className="md:w-1/2 hidden md:block">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto z-10 relative border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Event 2 */}
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:order-2 md:pl-12 mb-4 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:mr-auto md:ml-0 max-w-md">
                <span className="text-sm font-semibold text-blue-600 block mb-1">10:45 AM</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Networking Kickoff</h3>
                <p className="text-gray-600">Brief introduction and icebreaker session to get conversations flowing naturally.</p>
              </div>
            </div>
            
            <div className="md:w-1/2 md:order-1 hidden md:block">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto z-10 relative border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Event 3 */}
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:ml-auto md:mr-0 max-w-md">
                <span className="text-sm font-semibold text-blue-600 block mb-1">11:00 AM</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Brunch & Structured Networking</h3>
                                    <p className="text-gray-600">Enjoy gourmet brunch offerings while participating in our curated networking format.</p>
              </div>
            </div>
            
            <div className="md:w-1/2 hidden md:block">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto z-10 relative border-4 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>
          
                        {/* Add more events following the same pattern */}
        </div>
      </div>
      
      {/* CTA */}
      <div className="mt-16 text-center">
                    <a href="#registration" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Reserve Your Spot
                    </a>
                    <p className="mt-4 text-gray-600">Limited to 50 attendees for quality networking</p>
      </div>
    </div>
  </section>

        {/* Speakers Section */}
  <section id="speakers" className="py-16 bg-gradient-to-r from-blue-50 to-sky-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Featured Speakers</h2>
                    <p className="text-xl text-neutral-700 max-w-3xl mx-auto">Connect with industry leaders and visionaries</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* First Row */}
        {/* Speaker 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="h-64 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTJCc3BlYWtlciUyQmF0JTJCb3V0ZG9vciUyQm5ldHdvcmtpbmclMkJldmVudHxlbnwwfHx8fDE3NDU4MzU2MjV8MA&ixlib=rb-4.0.3&q=80&w=400" 
                                 alt="Alex Johnson" 
                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-1">Alex Johnson</h3>
            <p className="text-blue-600 font-medium mb-3">Founder & CEO, TechVentures</p>
                            <p className="text-neutral-600 mb-4">Pioneering innovative solutions in the tech space with multiple successful exits.</p>
            <div className="flex items-center">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Keynote</span>
              <span className="ml-2 text-neutral-500 text-sm">10:45 AM</span>
            </div>
          </div>
        </div>
        
        {/* Speaker 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="h-64 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTJCc3BlYWtlciUyQmF0JTJCb3V0ZG9vciUyQm5ldHdvcmtpbmclMkJldmVudHxlbnwwfHx8fDE3NDU4MzU2MjV8MA&ixlib=rb-4.0.3&q=80&w=400" 
                                 alt="Samantha Rivera" 
                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-1">Samantha Rivera</h3>
            <p className="text-blue-600 font-medium mb-3">Managing Partner, Horizon VC</p>
            <p className="text-neutral-600 mb-4">Leading venture investments in emerging markets with a focus on sustainable technology.</p>
            <div className="flex items-center">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Panel</span>
              <span className="ml-2 text-neutral-500 text-sm">11:15 AM</span>
            </div>
          </div>
        </div>
        
        {/* Speaker 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="h-64 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTJCc3BlYWtlciUyQmF0JTJCb3V0ZG9vciUyQm5ldHdvcmtpbmclMkJldmVudHxlbnwwfHx8fDE3NDU4MzU2MjV8MA&ixlib=rb-4.0.3&q=80&w=400" 
                                 alt="Michael Chen" 
                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-1">Michael Chen</h3>
            <p className="text-blue-600 font-medium mb-3">Founder, GrowthLabs</p>
                            <p className="text-neutral-600 mb-4">Serial entrepreneur with expertise in scaling startups from seed to Series B.</p>
            <div className="flex items-center">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Workshop</span>
              <span className="ml-2 text-neutral-500 text-sm">11:45 AM</span>
            </div>
          </div>
        </div>
        
                    {/* Second Row */}
        {/* Speaker 4 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                                 alt="Priya Mehta - Co-founder of CloudScale" 
                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-1">Priya Mehta</h3>
            <p className="text-blue-600 font-medium mb-3">Co-founder, CloudScale</p>
            <p className="text-neutral-600 mb-4">Tech innovator specializing in SaaS platforms with a focus on AI and machine learning applications.</p>
            <div className="flex items-center">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">Fireside Chat</span>
              <span className="ml-2 text-neutral-500 text-sm">12:00 PM</span>
            </div>
          </div>
        </div>
        
        {/* Speaker 5 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                                 alt="David Rodriguez - Partner at Elevation Capital" 
                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-1">David Rodriguez</h3>
            <p className="text-blue-600 font-medium mb-3">Partner, Elevation Capital</p>
            <p className="text-neutral-600 mb-4">Early-stage investor with a passion for identifying promising founders in emerging markets.</p>
            <div className="flex items-center">
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Q&A Session</span>
              <span className="ml-2 text-neutral-500 text-sm">12:15 PM</span>
            </div>
          </div>
        </div>
        
        {/* Speaker 6 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                                 alt="Anika Sharma - Founder of Symbiotes.ai" 
                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-900 mb-1">Anika Sharma</h3>
            <p className="text-blue-600 font-medium mb-3">Founder, Symbiotes.ai</p>
            <p className="text-neutral-600 mb-4">AI specialist helping businesses refine their MVPs and build strong market presence.</p>
            <div className="flex items-center">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">Podcast Host</span>
              <span className="ml-2 text-neutral-500 text-sm">Throughout</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Want to be part of the conversation?</h3>
                    <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">Join us at JW Marriott Bangalore to connect with these speakers and many more industry pioneers.</p>
                    <a href="#registration" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Reserve Your Spot
                    </a>
      </div>
    </div>
  </section>

        {/* Sponsors Section */}
  <section id="sponsors" className="py-16 bg-gradient-to-b from-white to-blue-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Our Sponsors</h2>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">Partnering with leading brands to bring you an exceptional poolside experience</p>
      </div>
      
      {/* Premium Sponsors */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Premium Partners</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TechVision Inc. */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="TechVision Inc." 
                   className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 text-neutral-900">TechVision Inc.</h4>
              <p className="text-neutral-600 mb-4">Leading innovation in AI solutions for modern businesses.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">Platinum Sponsor</span>
                <a href="#" className="text-blue-500 hover:text-blue-700 underline">Learn more</a>
              </div>
            </div>
          </div>
          
          {/* Digital Nexus */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="Digital Nexus" 
                   className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 text-neutral-900">Digital Nexus</h4>
              <p className="text-neutral-600 mb-4">Empowering startups with cutting-edge digital infrastructure.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">Platinum Sponsor</span>
                <a href="#" className="text-blue-500 hover:text-blue-700 underline">Learn more</a>
              </div>
            </div>
          </div>
          
          {/* Workspace Hub */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="Workspace Hub" 
                   className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 text-neutral-900">Workspace Hub</h4>
              <p className="text-neutral-600 mb-4">Creating collaborative environments for tomorrow's innovators.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">Platinum Sponsor</span>
                <a href="#" className="text-blue-500 hover:text-blue-700 underline">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gold Partners */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-blue-800 text-center mb-12">Gold Partners</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AudioTech */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="AudioTech" 
                   className="w-full h-full object-cover"/>
            </div>
            <h4 className="text-xl font-bold text-neutral-900 mb-2">AudioTech</h4>
            <p className="text-neutral-600">Premium audio solutions</p>
          </div>
          
          {/* Compute Cloud */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="Compute Cloud" 
                   className="w-full h-full object-cover"/>
            </div>
            <h4 className="text-xl font-bold text-neutral-900 mb-2">Compute Cloud</h4>
            <p className="text-neutral-600">Scalable cloud solutions</p>
          </div>
          
          {/* WearFuture */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="WearFuture" 
                   className="w-full h-full object-cover"/>
            </div>
            <h4 className="text-xl font-bold text-neutral-900 mb-2">WearFuture</h4>
            <p className="text-neutral-600">Next-gen wearable devices</p>
          </div>
          
          {/* DataVault */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="DataVault" 
                   className="w-full h-full object-cover"/>
            </div>
            <h4 className="text-xl font-bold text-neutral-900 mb-2">DataVault</h4>
            <p className="text-neutral-600">Secure data management</p>
          </div>
        </div>
      </div>
      
      {/* Experience Partners */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-blue-800 text-center mb-12">Experience Partners</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gourmet Caterers */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
            <div className="flex">
              <div className="w-1/3">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                     alt="Gourmet Caterers" 
                     className="w-full h-48 object-cover"/>
            </div>
              <div className="w-2/3 p-6">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Gourmet Caterers</h4>
                <p className="text-neutral-600 mb-4">Providing an exquisite spread of culinary delights for our brunch.</p>
                <span className="text-blue-600">Culinary Partner</span>
              </div>
            </div>
          </div>
          
          {/* Craft Mixology */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
            <div className="flex">
              <div className="w-1/3">
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                     alt="Craft Mixology" 
                     className="w-full h-48 object-cover"/>
            </div>
              <div className="w-2/3 p-6">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Craft Mixology</h4>
                <p className="text-neutral-600 mb-4">Expert mixologists creating signature cocktails for a refreshing experience.</p>
                <span className="text-blue-600">Beverage Partner</span>
              </div>
            </div>
          </div>
          
          {/* Ferment Fresh */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
            <div className="flex">
              <div className="w-1/3">
                <img src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                     alt="Ferment Fresh" 
                     className="w-full h-48 object-cover"/>
            </div>
              <div className="w-2/3 p-6">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Ferment Fresh</h4>
                <p className="text-neutral-600 mb-4">Artisanal kombucha blends made with organic ingredients for health-conscious founders.</p>
                <span className="text-blue-600">Wellness Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Supporting Partners */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-blue-800 text-center mb-12">Supporting Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Circuit Tech */}
          <div className="transform transition duration-300 hover:scale-110">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="Circuit Tech Partner" 
                   className="w-full h-full object-cover"/>
            </div>
          </div>
          
          {/* Digital Solutions */}
          <div className="transform transition duration-300 hover:scale-110">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="Digital Solutions Partner" 
                   className="w-full h-full object-cover"/>
            </div>
          </div>
          
          {/* Hardware Solutions */}
          <div className="transform transition duration-300 hover:scale-110">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1597225244660-1cd128c64284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="Hardware Solutions Partner" 
                   className="w-full h-full object-cover"/>
            </div>
          </div>
          
          {/* Software Development */}
          <div className="transform transition duration-300 hover:scale-110">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="Software Development Partner" 
                   className="w-full h-full object-cover"/>
            </div>
          </div>
          
          {/* Innovation Lab */}
          <div className="transform transition duration-300 hover:scale-110">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                   alt="Innovation Lab Partner" 
                   className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
      
      {/* Become a Sponsor CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Interested in sponsoring?</h3>
        <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">Limited sponsorship opportunities are still available. Showcase your brand to Bangalore's most innovative founders.</p>
        <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
          Become a Sponsor
        </a>
      </div>
    </div>
  </section>

        {/* Venue Section */}
  <section id="venue" className="py-16 bg-gradient-to-r from-sky-50 to-blue-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Venue</h2>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">Join us for an exclusive poolside networking experience at one of Bangalore's most prestigious locations</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-6">JW Marriott Bangalore</h3>
          <p className="text-neutral-700 mb-8">Located in the heart of Bangalore, the JW Marriott offers an elegant poolside setting for meaningful connections in a relaxed atmosphere.</p>
          
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Location</h4>
                <p className="text-neutral-700">24/1 Vittal Mallya Road, Bangalore 560001</p>
              </div>
            </div>
            
            {/* Date & Time */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Date & Time</h4>
                <p className="text-neutral-700">May 4th, 2024 | 10:30 AM - 12:30 PM</p>
              </div>
            </div>
            
            {/* COVID Safety */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">COVID Safety</h4>
                <p className="text-neutral-700">Enhanced safety protocols in place for your well-being</p>
              </div>
            </div>
            
            {/* Contact */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Contact</h4>
                <p className="text-neutral-700">events@foundersrsvp.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="https://maps.google.com" target="_blank" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Get Directions
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                 alt="JW Marriott Poolside" 
                 className="w-full h-[500px] object-cover"/>
        </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      </div>
    </div>
  </section>
      
  {/* Event Features Section */}
  <section className="py-8 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Gourmet Brunch */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1">
          <div className="h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                 alt="Gourmet Brunch Spread" 
                 className="w-full h-full object-cover"/>
          </div>
          <div className="p-4">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Gourmet Brunch</h3>
            <p className="text-sm text-neutral-600">Enjoy a spread of delicious cuisine with curated menu options.</p>
          </div>
        </div>
        
        {/* Craft Beverages */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1">
          <div className="h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                 alt="Craft Cocktails" 
                 className="w-full h-full object-cover"/>
          </div>
          <div className="p-4">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Craft Beverages</h3>
            <p className="text-sm text-neutral-600">Professional mixologists creating signature cocktails.</p>
          </div>
        </div>
        
        {/* Podcast Recording */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1">
          <div className="h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                 alt="Podcast Recording Setup" 
                 className="w-full h-full object-cover"/>
          </div>
          <div className="p-4">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">Podcast Recording</h3>
            <p className="text-sm text-neutral-600">Share your founder story at our professional setup.</p>
        </div>
      </div>
          </div>
          </div>
  </section>
      
  {/* The Perfect Environment Section */}
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div className="lg:pl-0">
          <h2 className="text-3xl font-bold text-[#1e40af] mb-8 -ml-[2px]">The Perfect Environment</h2>
          <div className="space-y-5 -ml-[2px]">
            <div className="flex items-start">
              <svg className="w-[18px] h-[18px] text-[#22c55e] flex-shrink-0 mt-1.5" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 13l3 3L17 8"></path>
                  </svg>
              <p className="text-[#4b5563] text-lg font-medium ml-2.5">Premium poolside setting with comfortable seating</p>
                </div>
            
            <div className="flex items-start">
              <svg className="w-[18px] h-[18px] text-[#22c55e] flex-shrink-0 mt-1.5" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 13l3 3L17 8"></path>
                  </svg>
              <p className="text-[#4b5563] text-lg font-medium ml-3">Exclusive access to JW Marriott's renowned hospitality</p>
                </div>
            
            <div className="flex items-start">
              <svg className="w-[18px] h-[18px] text-[#22c55e] flex-shrink-0 mt-1.5" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 13l3 3L17 8"></path>
                  </svg>
              <p className="text-[#4b5563] text-lg font-medium ml-3">Ambient music setting the perfect networking tone</p>
                </div>
            
            <div className="flex items-start">
              <svg className="w-[18px] h-[18px] text-[#22c55e] flex-shrink-0 mt-1.5" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 13l3 3L17 8"></path>
                  </svg>
              <p className="text-[#4b5563] text-lg font-medium ml-3">Dedicated spaces for one-on-one conversations</p>
                </div>
            
            <div className="flex items-start">
              <svg className="w-[18px] h-[18px] text-[#22c55e] flex-shrink-0 mt-1.5" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 13l3 3L17 8"></path>
                </svg>
              <p className="text-[#4b5563] text-lg font-medium ml-3">High-speed WiFi and charging stations available</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
                 alt="Luxury poolside lounge area with comfortable seating" 
                 className="w-full h-[380px] object-cover"/>
      </div>
    </div>
</div>
</div>
  </section>

  {/* Getting Here Section */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&q=80&w=1800&ixlib=rb-4.0.3" 
                 alt="Elevated view of wide Bangalore road with buses and apartment buildings" 
                 className="w-full h-[400px] object-cover object-center"/>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
              </div>
      </div>
      
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Getting Here</h2>
          
          <div className="space-y-8">
            {/* From the Airport */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
          </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">From the Airport</h3>
                <p className="text-gray-600">Approximately 35-40 minutes by car from Kempegowda International Airport.</p>
              </div>
            </div>
            
            {/* Parking */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Parking</h3>
                <p className="text-gray-600">Complimentary valet parking available for all attendees.</p>
              </div>
            </div>
            
            {/* Public Transit */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v6a2 2 0 002 2h2" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Public Transit</h3>
                <p className="text-gray-600">Multiple bus routes available, with Cubbon Park Metro Station within walking distance.</p>
              </div>
            </div>
            
            {/* Need Help */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Need Help?</h3>
                <p className="text-gray-600">Contact our event team at +91 9876543210 for assistance.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="#registration" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Reserve Your Spot
            </a>
          </div>
        </div>
      </div>
      </div>
  </section>

        {/* Podcast Section */}
  <section id="podcast" className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Podcast</h2>
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">Share your founder story and amplify your brand's presence through our professional poolside recording setup</p>
      </div>

      {/* Featured Founder Interviews Section */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12">Featured Founder Interviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sarah Chen Interview */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1800&ixlib=rb-4.0.3" 
                   alt="Sarah Chen interview in library setting" 
                   className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                AI Innovation
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
              <p className="text-gray-600 mb-2">Founder & CEO, NeuralTech</p>
              <p className="text-gray-700 mb-4">"The intimate setting allowed me to share insights I've never discussed publicly before."</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Listen to Interview
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Ankit Patel Interview */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1800&ixlib=rb-4.0.3" 
                   alt="Ankit Patel recording podcast interview" 
                   className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                Sustainable Tech
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ankit Patel</h3>
              <p className="text-gray-600 mb-2">Co-founder, GreenLoop Solutions</p>
              <p className="text-gray-700 mb-4">"The interview led to two partnership opportunities with fellow attendees."</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Listen to Interview
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Miguel Rodriguez Interview */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1558383331-f520f2888351?auto=format&fit=crop&q=80&w=1800&ixlib=rb-4.0.3" 
                   alt="Miguel Rodriguez podcast setup" 
                   className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                FinTech
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Miguel Rodriguez</h3>
              <p className="text-gray-600 mb-2">Founder, PayFast</p>
              <p className="text-gray-700 mb-4">"The social media exposure from our interview drove significant user acquisition."</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Listen to Interview
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional Recording Environment Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Professional Recording Environment</h2>
          <p className="text-gray-700 mb-8">Our dedicated podcast zone features premium recording equipment in a comfortable, poolside setting that creates the perfect atmosphere for meaningful conversations.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Studio-Quality Audio */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Studio-Quality Audio</h3>
              <p className="text-gray-600">Crisp, clear recordings that make you sound your best</p>
            </div>
            
            {/* Professional Editing */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Editing</h3>
              <p className="text-gray-600">Post-production enhancements for polished final content</p>
            </div>
            
            {/* Relaxed Atmosphere */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Relaxed Atmosphere</h3>
              <p className="text-gray-600">Casual setting for authentic conversations</p>
            </div>
            
            {/* Social Media Assets */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media Assets</h3>
              <p className="text-gray-600">Custom graphics and clips for your channels</p>
            </div>
          </div>
          
          <div className="mt-8 flex items-center">
            <span className="text-gray-600 mr-2">Powered by</span>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">symbiotes.ai</a>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=1800&ixlib=rb-4.0.3" 
                 alt="Professional podcast recording setup with person" 
                 className="w-full h-[600px] object-cover"/>
        </div>
      </div>
      </div>
          </div>
  </section>

  {/* Limited Interview Slots Section */}
  <section className="relative py-12 bg-gradient-to-r from-blue-600 to-cyan-500">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Limited Interview Slots Available</h2>
      <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
        Reserve your exclusive podcast interview at Founders RSVP and share your founder story with our audience of entrepreneurs, investors, and industry leaders.
      </p>
      <a href="#" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
        Schedule Your Interview
      </a>
            </div>
  </section>

  {/* Registration Section */}
  <section id="registration" className="py-16 bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Registration</h2>
        <p className="text-xl text-neutral-700">Secure your spot at this exclusive poolside networking experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Event Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-8">Event Details</h3>
            
          {/* Date & Time */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
            </div>
                <div>
              <h4 className="font-semibold text-gray-900 mb-1">Date & Time</h4>
              <p className="text-gray-600">May 4th, 2024 | 10:30 AM - 12:30 PM</p>
                </div>
              </div>
              
          {/* Location */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
            </div>
                <div>
              <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
              <p className="text-gray-600">JW Marriott Poolside, Bangalore</p>
                </div>
              </div>
              
          {/* Who Should Attend */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
            </div>
                <div>
              <h4 className="font-semibold text-gray-900 mb-1">Who Should Attend</h4>
              <p className="text-gray-600">Startup Founders, Entrepreneurs, VCs, Advisors</p>
                </div>
              </div>
              
          {/* Ticket Price */}
          <div className="flex items-start space-x-4 mb-12">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
            </div>
                <div>
              <h4 className="font-semibold text-gray-900 mb-1">Ticket Price</h4>
              <p className="text-gray-600">₹2,999 (Early Bird: ₹1,999 until April 20th)</p>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-6">What's Included</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Access to exclusive poolside networking area</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Gourmet brunch with premium menu selections</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Craft cocktails and kombucha refreshments</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Opportunity to be featured on our podcast</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Direct connections with VCs and advisors</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Professional event photography for your socials</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Swag bag with exclusive sponsor offerings</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Registration Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-blue-900">Reserve Your Spot</h3>
            <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">Limited Spots!</span>
              </div>
              
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                  </div>
                  <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                  </div>
                </div>
                
                <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company / Startup</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select your role</option>
                <option>Founder</option>
                <option>Co-founder</option>
                <option>Investor</option>
                <option>Advisor</option>
                  </select>
                </div>
                
                <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Early Bird Ticket - ₹1,999</option>
                <option>Regular Ticket - ₹2,999</option>
                  </select>
                </div>
                
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
              <label className="ml-2 block text-sm text-gray-700">
                I'm interested in being featured on the podcast
                  </label>
                </div>
                
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                    Secure My Spot
                  </button>
                
            <p className="text-center text-sm text-gray-600">Limited to 50 attendees for quality networking</p>
              </form>
          
          {/* Seamless Check-in Info */}
          <div className="mt-8 flex items-start space-x-4 bg-gray-50 rounded-xl p-4">
            <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=120&h=120" 
                 alt="Check-in Process" 
                 className="w-16 h-16 rounded-lg object-cover"/>
              <div>
              <h4 className="font-semibold text-gray-900 mb-1">Seamless Check-in</h4>
              <p className="text-sm text-gray-600">On arrival, head to our dedicated registration desk where you'll receive your name badge, welcome kit, and complimentary welcome drink.</p>
            </div>
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Cancellations received 48 hours before the event will receive a full refund.
          </p>
          </div>
        </div>
      </div>
  </section>
      
  {/* Testimonial Section */}
  <section className="relative py-12 bg-gradient-to-r from-blue-600 to-cyan-500">
    <div className="container mx-auto px-4">
      <div className="bg-blue-600/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
          </div>
          <div className="flex-1">
            <blockquote className="text-white text-xl font-medium mb-4">
              "Last year's Founders RSVP created three partnership opportunities that resulted in a 40% boost to our customer acquisition strategy."
            </blockquote>
            <div className="text-white">
              <p className="font-semibold text-lg">Rahul Sharma</p>
              <p className="text-white/90">CEO, CloudStack Technologies</p>
            </div>
          </div>
        </div>
      </div>
          </div>
  </section>

  {/* FAQ Section */}
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8">Frequently Asked Questions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* FAQ Item 1 */}
        <div className="bg-white rounded-lg border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this event only for funded startups?</h3>
          <p className="text-gray-600 text-sm">No, we welcome founders at all stages – from ideation to Series A and beyond. The diverse mix creates valuable connections.</p>
          </div>
          
        {/* FAQ Item 2 */}
        <div className="bg-white rounded-lg border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I bring to the event?</h3>
          <p className="text-gray-600 text-sm">Business cards, a positive attitude, and your elevator pitch! Everything else, including refreshments, will be provided.</p>
    </div>
    
        {/* FAQ Item 3 */}
        <div className="bg-white rounded-lg border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">How is the podcast interview selected?</h3>
          <p className="text-gray-600 text-sm">Express your interest during registration. Our team will contact you to schedule your session based on availability.</p>
        </div>
        
        {/* FAQ Item 4 */}
        <div className="bg-white rounded-lg border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I bring a team member?</h3>
          <p className="text-gray-600 text-sm">Yes! Each additional team member needs to register separately to ensure we maintain our attendee cap.</p>
          </div>
        </div>
        </div>
  </section>

  {/* RSVP Now Section */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">RSVP Now</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Secure your spot at Founders RSVP: Where builders pause to evolve. Connect with fellow founders, VCs, and advisors poolside at JW Marriott Bangalore.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Event Details */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
                  <span>Date: May 4th, 2024</span>
            </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
                  <span>Time: 10:30 AM - 12:30 PM</span>
            </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
                  <span>Location: JW Marriott Poolside, Bangalore</span>
            </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
                  <span>Includes: Brunch, Cocktails, Kombucha & Networking</span>
            </li>
        </ul>
            </div>
        </div>
        
          <div className="rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=1800&ixlib=rb-4.0.3" 
                 alt="JW Marriott poolside" 
                 className="w-full h-[300px] object-cover"/>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-600">Limited spots available</span>
            </span>
            <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
              View on Map
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      
        {/* Right Column - RSVP Form */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Reserve Your Spot</h3>
          <form className="space-y-6" >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" placeholder="Your full name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company/Startup</label>
              <input type="text" placeholder="Your company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select your role</option>
                <option>Founder</option>
                <option>Co-founder</option>
                <option>Investor</option>
                <option>Advisor</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What are you looking to gain from this event?</label>
              <textarea rows="4" placeholder="Share your expectations or questions" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
              <label className="ml-2 block text-sm text-gray-700">
                I'm interested in being featured on the podcast
              </label>
          </div>
          
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Confirm RSVP
            </button>

            <p className="text-center text-sm text-gray-500">You'll receive a confirmation email with details</p>
        </form>
      </div>
    </div>
    
      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16 px-4">
        {/* Email Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
          <a href="mailto:event@symbiotes.ai" className="text-blue-600 hover:text-blue-800 text-lg">event@symbiotes.ai</a>
          <p className="text-gray-600 mt-3">For event inquiries and questions</p>
      </div>
      
        {/* Call Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
          <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800 text-lg">+91 98765 43210</a>
          <p className="text-gray-600 mt-3">Mon-Fri, 9:00 AM - 6:00 PM</p>
      </div>
      
        {/* Live Chat Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Chat</h3>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-lg">Start Chat</a>
          <p className="text-gray-600 mt-3">Get instant assistance</p>
      </div>
    </div>
    </div>
  </section>
        </>
    );
};

export default Home;
