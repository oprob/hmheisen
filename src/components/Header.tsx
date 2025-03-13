import GovUKLogo from "@/components/GovUKLogo";

const Header = () => {
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
      
      <div className="max-w-4xl mx-auto flex justify-end p-4">
        <div className="flex items-center gap-2">
          <span className="font-normal">English</span>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-[#4c2cae] custom-underline hover:underline">Cymraeg</a>
        </div>
      </div>
    </header>
  );
};

export default Header;