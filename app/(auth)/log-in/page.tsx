import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoogleIcon from "../../../public/google.svg";

const LogIn = () => {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Log In</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email..."
            className="bg-[#333] placeholder:text-sm placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg=[#e50914]"
          >
            Log In
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        New to Netflix?{" "}
        <Link
          href="/sign-up"
          className="text-white hover:underline hover:text-[#e50914]"
        >
          Sign up Now
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
          <Image src={GoogleIcon} alt="google" className="w-6 h-6" />
        </Button>
        <Button variant="outline" size="icon">
          <GithubIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default LogIn;
