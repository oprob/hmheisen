import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignInFormProps {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  handleSignIn: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const SignInForm = ({
  username,
  setUsername,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  handleSignIn,
  isLoading
}: SignInFormProps) => {
  return (
    <form onSubmit={handleSignIn}>
      <div className="mb-4">
        <label htmlFor="userId" className="block mb-1 font-large">
          Government Gateway user ID
        </label>
        <p className="text-sm mb-2 text-gray-600">This could be up to 12 characters.</p>
        <Input
          id="userId"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 border-black rounded-none h-12 w-full sm:w-96"
          maxLength={12}
          required
          disabled={isLoading}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 font-medium">
          Password
        </label>
        <div className="flex">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-black h-12 w-full rounded-none sm:w-[calc(75%-60px)]"
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 px-4 bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 text-sm"
            disabled={isLoading}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          className={`bg-[#00703c] gov-button inline-block hover:bg-green-00 rounded-none text-white h-10 px-6 w-[100px] flex justify-center items-center ${isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;