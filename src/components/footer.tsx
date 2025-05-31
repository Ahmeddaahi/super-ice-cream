export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Address */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-semibold text-lg mb-3">Visit Us</h3>
            <p className="text-gray-300">8QXQ+6FR, Jijiga</p>
          </div>

          {/* Logo & Tagline */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-blue-400">Super</h2>
            <p className="text-sm text-gray-500">&copy; 2024 Super Ice Cream - Jigjiga&apos;s Coolest Spot. All rights reserved.</p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right space-y-2">
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p className="text-gray-300">
              <a href="tel:+251995817222" className="hover:text-blue-400 transition-colors">
                +251 995817222
              </a>
            </p>
            <p className="text-gray-300">
              <a href="mailto:ahmedexka@gmail.com" className="hover:text-blue-400 transition-colors">
                ahmedexka@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Super Ice Cream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
