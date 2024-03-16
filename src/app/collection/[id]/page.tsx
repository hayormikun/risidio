import { Heading } from "@/components/heading";
import { Nft } from "@/components/nft";
import { Trending } from "@/components/trending";
import nfts from "@/data/nfts.json";
import { Fragment } from "react";

type Params = {
  params: { id: number };
};

export default function nft({ params: { id } }: Params) {
  return (
    <main className="w-full bg-[#FAFAFA]">
      <div className="w-[89.42%] mx-auto flex flex-col">
        <Trending
          bg="#fafafa"
          btns={false}
          description="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo"
        />

        <section className="mt-12 mb-24">
          <Heading title="Nfts" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nfts &&
              nfts.data.map((nft) => (
                <Fragment key={nft.id}>
                  <Nft
                    id={nft.id}
                    src={nft.src}
                    nft={nft.nft}
                    price={nft.price}
                  />
                </Fragment>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
