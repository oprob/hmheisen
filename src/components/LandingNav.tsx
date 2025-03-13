import GovUKLogo from "@/components/GovUKLogo";

const LandingNav = () => {
  return (
<header className="w-full">
      <div className="bg-black text-white p-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center relative">
          <div className="flex items-center">
            <GovUKLogo />
            <span className="ml-2 font-bold text-2xl">GOV.UK</span>
          </div>
          <span className="absolute left-1/2 transform -translate-x-1/2 font-bold text-2xl">
            Government Gateway
          </span>
        </div>
      </div>
      
      <div className="w-full flex justify-center">
        <div style={{ backgroundColor: '#1d70b8', height: '8px', width: '47%' }}></div>
      </div>
      

    
      <div className="max-w-4xl mx-auto flex justify-start p-4">
        <nav className="flex  space-x-2 text-sm">
          <a href="#" className="text-[#000000] text-base custom-underline hover:underline">Home</a>
          <span className="text-xl">›</span>
          <a href="#" className="text-[#000000] text-base custom-underline hover:underline">Money and tax</a>
          <span className="text-xl">›</span>
          <a href="#" className="text-[#000000] text-base custom-underline hover:underline">Dealing with HMRC</a>
        </nav>
      </div>
      </header>

  );
};

export default LandingNav;