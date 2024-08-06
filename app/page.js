import React from 'react';
import { Bell, ChevronDown, Search, User } from 'lucide-react';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-extrabold text-2xl">P</div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search (ctrl + k)"
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-full"
              />
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Launches</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">News</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Advertise</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-orange-50 text-orange-500 px-4 py-2 rounded-md">Submit</button>
            <Bell className="text-gray-600" />
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"><User /></div>
          </div>
        </div>
      </header>

      {/* Onboarding Banner */}
      <div className="bg-green-800 bg-opacity-80 text-white py-2 px-4 flex justify-center items-center space-x-3">
        <p>Hey there! Please, complete your onboarding.</p>
        <button className="bg-white text-black px-4 py-1 rounded">Complete onboarding</button>
      </div>

      <div className="flex-grow flex flex-col items-center">
        {/* Breadcrumb */}
        <div className="w-full max-w-4xl mx-auto px-4 py-2">
          <p className="text-sm text-gray-500">Home &gt; Product &gt; VideoDubber - Fast Video Translator</p>
        </div>

        {/* Main Content */}
        <main className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center space-x-4">
            <Image className="bg-pink-500 rounded-full flex items-center justify-center" 
            src="logo.svg"
            width={82}
            height={82}
            priority
            />
            <div>
              <h1 className="text-2xl font-bold flex items-center">
                VideoDubber - Fast Video Translator
                <ChevronDown className="ml-2" />
              </h1>
              <p className="text-gray-600">Translate videos in your own voice, globalize in a click!</p>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded">Visit</button>
            <div className="px-4 py-2 bg-red-100 text-red-600 rounded flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 21h22L12 2z" />
              </svg>
              UPVOTED 122
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;
