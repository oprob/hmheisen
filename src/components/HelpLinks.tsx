const HelpLinks = () => {
  return (
    <div className="mt-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">New users of Government Gateway</h2>
        <a href="#" className="text-[#4c2c92] text-lg hover:underline custom-underline">Create sign in details</a>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Problems signing in</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-[#1d70b8] text-lg custom-underline">I have forgotten my password</a>
          </li>
          <li>
            <a href="#" className="text-[#1d70b8] text-lg custom-underline">I have forgotten my Government Gateway user ID</a>
          </li>
          <li>
            <a href="#" className="text-[#1d70b8] text-lg custom-underline">I have forgotten my Government Gateway user ID and password</a>
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <a href="#" className="text-[#1d70b8] text-lg custom-underline">Get help with this page</a>
      </div>
    </div>
  );
};

export default HelpLinks;