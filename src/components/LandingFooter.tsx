const LandingFooter = () => {
    return (
      <footer className="bg-[#f3f2f1] py-8 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between mb-8">
            <div className="w-1/2">
              <h3 className="font-bold mb-2">Services and information</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#" className="custom-underline">Benefits</a>
                <a href="#" className="custom-underline">Education and learning</a>
                <a href="#" className="custom-underline">Births, death, marriages and care</a>
                <a href="#" className="custom-underline">Employing people</a>
                <a href="#" className="custom-underline">Business and self-employed</a>
                <a href="#" className="custom-underline">Environment and countryside</a>
                <a href="#" className="custom-underline">Childcare and parenting</a>
                <a href="#" className="custom-underline">Housing and local services</a>
                <a href="#" className="custom-underline">Citizenship and living in the UK</a>
                <a href="#" className="custom-underline">Money and tax</a>
                <a href="#" className="custom-underline">Crime, justice and the law</a>
                <a href="#" className="custom-underline">Passports, travel and living abroad</a>
                <a href="#" className="custom-underline">Disabled people</a>
                <a href="#" className="custom-underline">Visas and immigration</a>
                <a href="#" className="custom-underline">Driving and transport</a>
                <a href="#" className="custom-underline">Working, jobs and pensions</a>
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="font-bold mb-2">Government activity</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#" className="custom-underline">Departments</a>
                <a href="#" className="custom-underline">News</a>
                <a href="#" className="custom-underline">Guidance and regulation</a>
                <a href="#" className="custom-underline">Research and statistics</a>
                <a href="#" className="custom-underline">Policy papers and consultations</a>
                <a href="#" className="custom-underline">Transparency</a>
                <a href="#" className="custom-underline">How government works</a>
                <a href="#" className="custom-underline">Get involved</a>
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <div className="flex flex-wrap gap-4 mb-2">
                <a href="#" className="custom-underline">Help</a>
                <a href="#" className="custom-underline">Privacy</a>
                <a href="#" className="custom-underline">Cookies</a>
                <a href="#" className="custom-underline">Accessibility statement</a>
                <a href="#" className="custom-underline">Contact</a>
                <a href="#" className="custom-underline">Terms and conditions</a>
                <a href="#" className="custom-underline">Rhestr o Wasanaethau Cymraeg</a>
                <a href="#" className="custom-underline">Government Digital Service</a>
              </div>
              <div>
                <span className="font-bold">OGL</span> All content is available under the <a href="#" className="custom-underline">Open Government Licence v3.0</a>, except where otherwise stated
              </div>
            </div>
            <div className="flex items-center">
              <img src="/public/lovable-uploads/crown.png" alt="Crown" className="h-12 mr-2" />
              <span className="text-sm">© Crown copyright</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default LandingFooter;