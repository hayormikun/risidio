import { Collection } from "@/components/collection";
import { Heading } from "@/components/heading";
import { Trending } from "@/components/trending";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Trending />

      <section className="mt-12 mb-24">
        <Heading title="Collections" />
        <div className="grid grid-cols-3 gap-6">
          <Collection
            src="/assets/sky.png"
            nft="Night Sky"
            quantity={120}
            artist="Léa Jacquot"
            avatar="/assets/avatar.png"
            description="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do
  eiusmod tempor..."
            minPrice="0.12BTC"
            maxPrice="0.18BTC"
          />
          <Collection
            src="/assets/future.png"
            nft="Future"
            quantity={120}
            artist="Julien"
            avatar="/assets/julien.png"
            description="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do
  eiusmod tempor..."
            minPrice="0.12BTC"
            maxPrice="0.18BTC"
          />
          <Collection
            src="/assets/nature.png"
            nft="Mother Nature"
            quantity={120}
            artist="Maria"
            avatar="/assets/maria.png"
            description="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do
  eiusmod tempor..."
            minPrice="0.12BTC"
            maxPrice="0.18BTC"
          />
        </div>
      </section>
    </main>
  );
}
