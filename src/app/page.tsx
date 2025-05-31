import Image from "next/image";
import Link from 'next/link';
import PageWrapper from '@/components/page-wrapper';

export default function Home() {
  return (
    <PageWrapper>
    <main className="min-h-screen">
      <div className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-blue-600">
            Super
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600">
            Jigjiga&apos;s Coolest Spot
          </p>
          <div className="pt-4">
            <Link 
              href="/menu" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Our Menu
            </Link>
          </div>
        </div>
        {/* Decorative ice cream cone background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      {/* Welcome Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Welcome to Super Ice Cream
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Experience the sweetest moments in Jigjiga at our welcoming ice cream cafe. We&apos;re proud to be Jigjiga&apos;s favorite ice cream destination, serving our community with love.
            <span className="font-semibold">24 hours a day, 7 days a week</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Whether it's a scorching afternoon or a midnight craving, 
            our doors are always open to satisfy your sweet tooth with our premium ice cream selection.
          </p>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Featured Flavors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Vanilla Dream */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/vanilla.jpg"
                  alt="Vanilla Dream Ice Cream"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h1 className="text-5xl font-bold mb-4">Jigjiga's Coolest Ice Cream Spot</h1>
                <p className="text-gray-600">Rich and creamy Madagascar vanilla bean ice cream with a silky smooth texture</p>
                <p className="text-blue-600 font-semibold">ETB 150</p>
              </div>
            </div>

            {/* Chocolate Bliss */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/chocolate.jpg"
                  alt="Chocolate Bliss Ice Cream"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Chocolate Bliss</h3>
                <p className="text-gray-600">Decadent dark chocolate ice cream made with premium cocoa</p>
                <p className="text-blue-600 font-semibold">ETB 180</p>
              </div>
            </div>

            {/* Strawberry Delight */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/strawberry.jpg"
                  alt="Strawberry Delight Ice Cream"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Strawberry Delight</h3>
                <p className="text-gray-600">Fresh strawberry ice cream with real fruit pieces</p>
                <p className="text-blue-600 font-semibold">ETB 200</p>
              </div>
            </div>

            {/* Caramel Swirl */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/caramel.jpg"
                  alt="Caramel Swirl Ice Cream"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-3xl font-semibold mb-6">Why We're Special</h2>
                <p className="text-gray-600">Smooth vanilla ice cream with rich caramel ribbons</p>
                <p className="text-blue-600 font-semibold">ETB 170</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/menu" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 24/7 Service */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Open 24/7</h3>
                <p className="text-gray-600">We&apos;re open 24/7 to satisfy your ice cream cravings any time of day or night.</p>
              </div>
            </div>

            {/* Fresh Ingredients */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">Quality ingredients for the perfect scoop every time.</p>
              </div>
            </div>

            {/* Family Friendly */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Family Friendly</h3>
                <p className="text-gray-600">A welcoming atmosphere for families and friends to enjoy together.</p>
              </div>
            </div>

            {/* Affordable Prices */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Affordable Prices</h3>
                <p className="text-gray-600">Quality ice cream at prices that won't break the bank.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </PageWrapper>
  );
}
