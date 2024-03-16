import { Collection } from "@/components/collection";
import { Heading } from "@/components/heading";
import { Trending } from "@/components/trending";
import collections from "@/data/collection.json";
import { Fragment } from "react";

export default function Home() {
  return (
    <main className="w-full bg-[#FAFAFA]">
      <div className="w-[89.42%] mx-auto flex flex-col">
        <Trending bg="#E6E9F2" btns={true} description="" />

        <section className="mt-12 mb-24">
          <Heading title="Collections" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections &&
              collections.data.map((collection) => (
                <Fragment key={collection.id}>
                  <Collection
                    id={collection.id}
                    src={collection.src}
                    nft={collection.nft}
                    quantity={collection.quantity}
                    artist={collection.artist}
                    avatar={collection.avatar}
                    description={collection.description}
                    minPrice={collection.minPrice}
                    maxPrice={collection.maxPrice}
                  />
                </Fragment>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
