"use client";

import Image from "next/image";

import ScreenImage from "/public/heading-screen.webp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4 mt-10 sm:mt-0">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        New year, new plans.
      </h1>
      <h1 className="text-3xl font-medium sm:text-5xl md:text-6xl">
        Your workspace to write, organize, and collaborate. With AI by your
        side.
      </h1>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <Button asChild>
            <Link href="/documents">
              Enter Notion
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button>
              Get Notion Free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button> 
          </SignInButton>
        </>
      )}
      <Image src={ScreenImage} alt="Screen Image" />
    </div>
  );
};

export default Heading;
