import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type FeaturedProps = {
  bg: string;
  btns: boolean;
  description: string;
};

export const Trending = ({ bg, btns, description }: FeaturedProps) => {
  return (
    <section
      className={`bg-[${bg}] flex flex-col w-full min-h-[518] rounded-[1.875em] box-border`}
    >
      <div className="h-full w-full flex justify-between items-center p-12 box-border">
        <div className="w-fit max-w-[46.60%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="bg-[#FADFE4] w-[9.4em] h-16 rounded-[3em] text-xs font-medium"
            >
              Trending Now
            </button>

            <div className="block">
              <span className="text-2xl text-[#617587]">
                Night sky collection
              </span>
              <h2 className="text-[4em] text-[#000000] font-extrabold">
                With the stars{" "}
              </h2>
            </div>

            <p>{description}</p>

            <div className="flex gap-2 items-center">
              <Image
                src={"/assets/avatar.png"}
                width={68}
                height={68}
                alt={"avatar"}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <small className="text-xs text-[#617587]">Artist</small>
                <h3 className="text-2xl text-[#23252B]">Léa Jacquot</h3>
              </div>
            </div>
          </div>
          {btns && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="bg-[#23252B] text-[#fafafa] w-[15.5em] h-[4.2em] rounded-[5.44em] text-base font-semibold"
              >
                Buy
              </button>

              <button
                type="button"
                className="bg-transparent text-[##23252B] w-[15.5em] h-[4.2em] rounded-[5.44em] border border-[#23252B] text-base font-semibold"
              >
                See collection
              </button>
            </div>
          )}
        </div>

        <div className="flex w-fit">
          <Image
            src={"/assets/stars.png"}
            width={437}
            height={411}
            alt={"with the stars"}
            className="rounded-[1.875em]"
          />
        </div>
      </div>
    </section>
  );
};
