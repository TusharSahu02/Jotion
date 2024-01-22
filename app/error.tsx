"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error-dark.png"
        alt="Error Image"
        height="80"
        width={"80"}
        className="dark:hidden"
      />
      <Image
        src={"/error.png"}
        alt="Error Png"
        height={"80"}
        width={"80"}
        className="dark:block hidden"
      />
      <h2 className="text-xl font-medium">This page does not exist</h2>
      <Button asChild>
        <Link href={"/documents"}>Back to my content</Link>
      </Button>
    </div>
  );
};

export default Error;
