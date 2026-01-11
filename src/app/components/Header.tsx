"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const path = usePathname();
  const currentPath = path.slice(1);

  const handleClick = () => {
    if (currentPath === "mycharacters") {
      router.back();
    } else {
      router.replace("/mycharacters");
    }
  };

  return (
    <header className="py-6 px-3 bg-transparent flex items-center">
      <Image
        src="/logo.png"
        alt="Rick and Morty Logo"
        className="mx-5"
        width={139}
        height={75}
      />
      <h1 className="text-5xl font-bold text-center mx-auto text-fuchsia-500">
        {currentPath === "mycharacters"
          ? "My Characters"
          : "Select your characters"}
      </h1>

      <Button
        onClick={handleClick}
        className="bg-fuchsia-700 float-end rounded-4xl h-12 hover:bg-fuchsia-500 min-w-32"
      >
        {currentPath === "mycharacters" ? "Home" : "My Characters"}
      </Button>
    </header>
  );
}
