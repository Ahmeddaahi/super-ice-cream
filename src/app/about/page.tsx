import { Metadata } from 'next';
import PageWrapper from '@/components/page-wrapper';

export const metadata: Metadata = {
  title: 'About Us | Super Ice Cream - Jigjiga\'s Coolest Spot',
  description: 'Learn about Super Ice Cream, Jigjiga\'s favorite ice cream destination. Open 24/7, we take pride in serving our community with the finest frozen treats.',
};

export default function AboutPage() {
  return (
    <PageWrapper>
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Story Section */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded with a passion for bringing joy to our community, Super Ice Cream has become
            Jigjiga's favorite destination for premium frozen treats. Our journey began with a
            simple mission: to create a welcoming space where families and friends could gather
            and enjoy exceptional ice cream at any hour of the day.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            What sets us apart is our unwavering commitment to quality and service. We carefully
            select the finest ingredients to craft our ice creams, ensuring each scoop delivers
            a moment of pure delight to our customers.
          </p>
        </div>

        {/* Key Qualities Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* 24/7 Service */}
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Always Open</h3>
            <p className="text-gray-600">
              Available 24/7 to satisfy your ice cream cravings, any time of day or night.
            </p>
          </div>

          {/* Variety */}
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Delightful Variety</h3>
            <p className="text-gray-600">
              From classic favorites to unique creations, we offer flavors for every palate.
            </p>
          </div>

          {/* Local Pride */}
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Community Pride</h3>
            <p className="text-gray-600">
              Proudly serving and supporting our local Jigjiga community since day one.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-blue-50 p-8 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            To create moments of joy through exceptional ice cream while fostering a welcoming
            space where our community can gather, connect, and create sweet memories together.
          </p>
        </div>
      </div>
    </main>
    </PageWrapper>
  );
}
