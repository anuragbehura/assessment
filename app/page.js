"use client"

import React, { useState } from 'react';
import { Bell, ChevronDown, Search, User, Menu, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4 lg:space-x-8">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-extrabold text-2xl">P</div>
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search (ctrl + k)"
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-full"
              />
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">Launches</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Products</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">News</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Community</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Advertise</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-orange-50 text-orange-500 px-4 py-2 rounded-md">Submit</button>
            <button className="md:hidden bg-pink-100 text-pink-500 px-4 py-1 rounded-md text-sm">Submit</button>
            <Bell className="text-gray-600" />
            <div className="bg-gray-100 rounded-full items-center justify-center"><User /></div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <Menu className="text-gray-600" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4">
            <div className="mb-4">
              <Search className="inline-block mr-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search (ctrl + k)"
                className="bg-gray-100 rounded-full px-4 py-2"
              />
            </div>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-600 hover:text-gray-900">Launches</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">News</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Community</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Advertise</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Onboarding Banner */}
      <div className="bg-green-800 md:bg-green-800 bg-opacity-80 text-white py-2 px-4 flex justify-between md:justify-center items-center">
        <p className="text-sm md:text-base">Hey there! Please, complete your onboarding.</p>
        <button className="bg-white text-green-600 md:text-black px-4 py-1 rounded text-sm md:ml-3">Complete onboarding</button>
      </div>

      <div className="flex-grow flex flex-col items-center">
        {/* Breadcrumb */}
        <div className="w-full max-w-4xl mx-auto px-4 py-2">
          <p className="text-sm text-gray-500">Home &gt; Product &gt; VideoDubber - Fast Video Translator</p>
        </div>

        {/* Main Content */}
        <main className="w-full max-w-4xl mx-auto px-4 py-4 md:py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-500 md:bg-pink-500 rounded-full flex items-center justify-center mb-4 md:mb-0">
              <Heart size={32} color="white" className="md:hidden" />
              <Image
                className="hidden md:block"
                src="logo.svg"
                width={82}
                height={82}
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold flex items-center justify-center md:justify-start">
                VideoDubber - Fast Video Translator
                <ChevronDown className="ml-2" size={20} />
              </h1>
              <p className="text-gray-600 text-sm md:text-base">Translate videos in your own voice, globalize in a click!</p>
            </div>
          </div>
          <div className="mt-4 flex space-x-2 md:space-x-4">
            <button className="flex-1 md:flex-none px-4 py-2 border border-gray-300 rounded text-sm md:text-base">Visit</button>
            <div className="flex-1 md:flex-none px-4 py-2 bg-red-100 text-red-600 rounded flex items-center justify-center text-sm md:text-base">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 21h22L12 2z" />
              </svg>
              UPVOTED 143
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;