import GovUKLogo from "@/components/GovUKLogo";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
// import GovUKLogo from "@/components/GovUKLogo";
import LandingNav from "@/components/LandingNav";
import SignInSection from "@/components/SignInSection";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">

      <LandingNav />

      {/* Main Content */}
      <main className="gov-content flex-grow">
        <h1 className="text-gov-heading font-bold mb-8">HMRC online services: sign <br /> in or set up an account</h1>

        <nav className="mb-12">
          <h2 className="text-[#000000] mb-4 text-gray-600">Contents</h2>
          <ul className="space-y-2">
            <li>
              <span>—&nbsp;&nbsp; <a className="text-[#000000]" href="/sign-in">Sign in to HMRC online services</a></span>
            </li>
            <li>
              <span>—&nbsp;&nbsp; <a className="custom-underline" href="/sign-in">Set up an account for HMRC online services</a></span>
            </li>
            <li>
              <span>—&nbsp;&nbsp; <a className="custom-underline" href="/sign-in">Get help with signing in to HMRC online services</a></span>
            </li>
          </ul>
        </nav>

        <SignInSection />



        <section id="cannot-sign-in" className="mb-12">
          <h2 className="text-gov-heading text-3xl font-bold mb-4">If you cannot sign in to your account</h2>
          <p className="text-lg">Get help if you're having <a className="custom-underline" href="#">problems signing in to your account</a>.</p>
        </section>

        <section id="different-login" className="mb-12">
          <h2 className="text-gov-heading text-3xl font-bold mb-4">Services with a different login</h2>
          <p className="mb-4 text-lg">There's a different way to sign in for:</p>
          <ul className="gov-list">
            <li><a className="custom-underline text-lg" href="#">excise, import and export services</a></li>
            <li><a className="custom-underline text-lg" href="#">your childcare account</a></li>
            <li><a className="custom-underline text-lg" href="#">your Capital Gains Tax on UK property account</a></li>
          </ul>
        </section>

        <section id="services-list" className="mb-12">
          <h2 className="text-gov-heading font-bold mb-4 text-3xl">Services you can use with your HMRC online account</h2>
          <p className="mb-4 text-lg">Use your HM Revenue and Customs (HMRC) online account to <a className="text-lg custom-underline" href="#">sign in</a> <br />for:</p>
          <ul className="gov-list">
            <li className="text-lg">Advance Tariff Rulings</li>
            <li className="text-lg">Advance Valuation Rulings</li>
            <li className="text-lg">Alcohol Duty</li>
            <li className="text-lg">Alcohol and Tobacco Warehousing</li>
            <li className="text-lg">Alcohol Wholesaler Registration Scheme</li>
            <li className="text-lg">Annual Tax on Enveloped Dwellings</li>
            <li className="text-lg">Automatic Exchange of Information (AEOI)</li>
            <li className="text-lg">Business tax account</li>
            <li className="text-lg">Charities Online</li>
            <li className="text-lg">Construction Industry Scheme (CIS)</li>
            <li className="text-lg">Corporation Tax</li>
            <li className="text-lg">Duty Deferment Electronic Statements (DDES)</li>
            <li className="text-lg">Economic Crime Levy</li>
            <li className="text-lg">Employment Intermediaries</li>
            <li className="text-lg">Employment Related Securities</li>
            <li className="text-lg">Excise Movement and Control System (EMCS)</li>
            <li className="text-lg">Fulfilment House Due Diligence Scheme</li>
            <li className="text-lg">Gambling Tax Service</li>
            <li className="text-lg">Gift Aid</li>
            <li className="text-lg">Import Control System (ICS)</li>
            <li className="text-lg">Intrastat Supplementary Declaration</li>
            <li className="text-lg">Machine Games Duty</li>
            <li className="text-lg">Making Tax Digital for Income Tax</li>
            <li className="text-lg">Making Tax Digital for VAT</li>
            <li className="text-lg">Managing Pension Schemes</li>
            <li className="text-lg">Money laundering supervision</li>
            <li className="text-lg">New Computerised Transit System (NCTS)</li>
            <li className="text-lg">New Export Scheme (NES)</li>
            <li className="text-lg">One Stop Shop (OSS)</li>
            <li className="text-lg">PAYE for employers</li>
            <li className="text-lg">Pensions Schemes Online</li>
            <li className="text-lg">Personal tax account</li>
            <li className="text-lg">Pillar 2</li>
            <li className="text-lg">Plastic Packaging Tax</li>
            <li className="text-lg">Rebated Oils Enquiry Service</li>
            <li className="text-lg">Self Assessment</li>
            <li className="text-lg">Self Assessment for partnerships and trusts</li>
            <li className="text-lg">Shared Workspace</li>
            <li className="text-lg">Soft Drinks Industry Levy</li>
            <li className="text-lg">Stamp Taxes</li>
            <li className="text-lg">Tied Oil Enquiry Service</li>
            <li className="text-lg">VAT EC Sales List</li>
            <li className="text-lg">VAT EU Refunds</li>
            <li className="text-lg">VAT Government Information and National Health Trusts (GIANT)</li>
            <li className="text-lg">VAT Import One Stop Shop (IOSS) Scheme</li>
            <li className="text-lg">VAT Mini One Stop Shop (MOSS) Schemes</li>
            <li className="text-lg">VAT Notification of Vehicle Arrivals (NOVA)</li>
          </ul>
        </section>
        <ExploreSection />

      </main>

      <Footer />


    </div>
  );
};

export default Index;
