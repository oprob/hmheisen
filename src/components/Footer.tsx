import { useState, useEffect } from "react";

const Footer = () => {
  const [crownImage, setCrownImage] = useState<string | null>(null);

  useEffect(() => {
    // Set the actual logo path
    setCrownImage("/lovable-uploads/crown.png");
  }, []);

  return (
    <footer className="mt-16 bg-[#f3f2f1] py-16 border-t border-black">
      <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="flex flex-col justify-end text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
              <a href="#" className="text-gray-700 custom-underline hover:underline">Accessibility statement</a>
              <a href="#" className="text-gray-700 custom-underline hover:underline">Cookies</a>
              <a href="#" className="text-gray-700 custom-underline hover:underline">Privacy notice</a>
              <a href="#" className="text-gray-700 custom-underline hover:underline">Terms and conditions</a>
            </div>
            
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              <span className="font-bold  mr-2">OGL</span>
              <span className="text-sm">
                All content is available under the <a href="#" className="text-[#0b0c0c] custom-underline hover:underline">Open Government Licence v3.0</a>, except where otherwise stated
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center md:justify-end mt-4 md:mt-0">
            {crownImage && <img src={crownImage} alt="Crown" className="h-24 mb-2" />}
            <span className="text-sm custom-underline">© Crown copyright</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;