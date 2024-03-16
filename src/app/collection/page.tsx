import { Collection } from "@/components/collection";
import { Heading } from "@/components/heading";
import { Nft } from "@/components/nft";
import { Trending } from "@/components/trending";
import Image from "next/image";

export default function Collection() {
  return (
    <main className="flex flex-col">
      <Trending
        bg="#fafafa"
        btns={false}
        description="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo"
      />

      <section className="mt-12 mb-24">
        <Heading title="Nfts" />
        <div className="grid grid-cols-3 gap-6">
          <Nft src="/assets/sky.png" nft="Night Sky" price="0.12BTC" />
          <Nft src="/assets/sky.png" nft="Night Sky" price="0.12BTC" />
          <Nft src="/assets/sky.png" nft="Night Sky" price="0.12BTC" />
          <Nft src="/assets/sky.png" nft="Night Sky" price="0.12BTC" />
        </div>
      </section>
    </main>
  );
}
