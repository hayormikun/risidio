import { Collection } from "@/components/collection";
import { Heading } from "@/components/heading";
import { Nft } from "@/components/nft";
import { Trending } from "@/components/trending";
import Image from "next/image";

export default function Wallet() {
  return (
    <main className="flex flex-col h-screen bg-[#E6E9F2] justify-center items-center mt-[-8rem] gap-16">
      <h2 className="font-extrabold text-[2em] text-black">Choose the wallet to connect</h2>
        <div className="grid grid-cols-3 gap-12">
          <div className="bg-[#fafafa] h-[10.88em] w-[11.94em] hover:cursor-pointer"></div>
          <div className="bg-[#fafafa] h-[10.88em] w-[11.94em] hover:cursor-pointer"></div>
          <div className="bg-[#fafafa] h-[10.88em] w-[11.94em] hover:cursor-pointer"></div>
        </div>
    </main>
  );
}
