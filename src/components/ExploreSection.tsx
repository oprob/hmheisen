const ExploreSection = () => {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#1d70b8] flex items-center">
            <span className="mr-2 text-xl">➔</span> Next
          </h2>
          <span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" className="text-[#1d70b8] text-lg custom-underline  mb-4">
            Set up an account for HMRC online services
          </a>
          </span>
          <br /> <br/>
          <a href="#" className="text-[#1d70b8] text-lg custom-underline">
            View a printable version of the whole guide
          </a>
        </div>
        <hr className="border-t border-blue-600 mb-4" />
        <div>
          <h3 className="text-lg font-bold mb-2">Explore the topic</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#1d70b8] custom-underline">Business tax and VAT</a>
            </li>
            <li>
              <a href="#" className="text-[#1d70b8] custom-underline">Running a limited company</a>
            </li>
            <li>
              <a href="#" className="text-[#1d70b8] custom-underline">Setting up</a>
            </li>
            <li>
              <a href="#" className="text-[#1d70b8] custom-underline">Payroll</a>
            </li>
            <li>
              <a href="#" className="text-[#1d70b8] custom-underline">Dealing with HMRC</a>
            </li>
          </ul>
          <br />
          <a href="#" className="text-[#1d70b8] custom-underline">
            Show 3 more
          </a>
        </div>
      </div>
    );
  };
  
  export default ExploreSection;