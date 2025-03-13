const SignInSection = () => {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-start">
          <div className="w-2/3 pr-6">
            <div className="border-t-2 border-gray-300 w-full mb-4"></div>
            <h1 className="text-3xl font-bold mb-4">Sign in to HMRC online services</h1>
            <p className="mb-4">
              Once you’ve <a href="#" className="text-[#1d70b8] custom-underline hover:underline">set up an account</a>, you can sign in for things like your personal or business tax account, Self Assessment, Corporation Tax, PAYE for employers and VAT.
            </p>
            <div className="flex items-center mb-6">
              <div className="border-l-4 border-gray-400 h-10 mr-2"></div>
              <p className="text-sm">
                This page is also available in <a href="#" className="text-[#1d70b8] custom-underline hover:underline">Welsh (Cymraeg)</a>.
              </p>
            </div>
            <button className="bg-[#00703c] text-white font-bold h-10 px-6 w-[160px] flex justify-center items-center">
              Sign in &nbsp;›
            </button>
          </div>
          <div className="w-1/3 pl-8">
            <div className="border-t-2 border-blue-600 w-full mb-4"></div>
            <h2 className="text-lg font-bold mb-2">Related content</h2>
            <ul className="mb-4">
              <li>
                <a href="#" className="text-[#1d70b8] underline ">HMRC service availability and issues</a>
              </li>
              <li>
                <a href="#" className="text-[#1d70b8] underline ">Customs Declaration Service</a>
              </li>
            </ul>
            <hr className="border-t border-gray-300 mb-2" />
            <h3 className="font-bold mb-2">Collection</h3>
            <a href="#" className="text-[#1d70b8] underline  font-bold">Paying HMRC: detailed information</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignInSection;