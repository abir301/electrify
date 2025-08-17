const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">Electrify</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted source for high-quality electronic components and parts. 
              Building the future, one circuit at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Microcontrollers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sensors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Motors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Power Supplies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 text-sm">Email: support@Electrify.com</span></li>
              <li><span className="text-gray-300 text-sm">Phone: (555) 123-4567</span></li>
              <li><span className="text-gray-300 text-sm">Hours: Mon-Fri 9AM-6PM</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Electrify. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;