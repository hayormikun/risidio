"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type CollectionProps = {
  id: number;
  src: string;
  nft: string;
  quantity: number;
  artist: string;
  avatar: string;
  description: string;
  minPrice: string;
  maxPrice: string;
};

export const Collection = ({
  id,
  src,
  nft,
  quantity,
  artist,
  avatar,
  description,
  minPrice,
  maxPrice,
}: CollectionProps) => {
  const [hovered, setHovered] = useState<null | number>(null);

  return (
    <div className="w-full h-fit font-extrabold rounded-[2.94em] bg-[#FAFAFA] shadow-2xl box-border">
      <div className="flex flex-col w-full p-6 gap-6">
        <div
          onMouseEnter={(e) => setHovered(id)}
          onMouseLeave={(e) => setHovered(null)}
          className="relative rounded-[3.5rem] hover:cursor-pointer w-full h-fit overflow-hidden"
        >
          {hovered === id && (
            <div className="absolute z-50 top-0 left-0 w-full h-full bg-black opacity-80 flex justify-center items-center">
              <Link
                href={`/collection/${id}`}
                className="bg-[#fafafa] flex justify-center items-center gap-2 w-[15.5em] h-[4.2em] rounded-[5.44em] border border-[#23252B]"
              >
                <span className="text-[##23252B] text-base font-semibold">
                  Go to collection
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_397_639)">
                    <path
                      d="M28.9 12.3875L24.0625 7.5C23.9463 7.38284 23.808 7.28985 23.6557 7.22639C23.5034 7.16293 23.34 7.13025 23.175 7.13025C23.01 7.13025 22.8466 7.16293 22.6943 7.22639C22.542 7.28985 22.4037 7.38284 22.2875 7.5C22.1703 7.61621 22.0773 7.75446 22.0139 7.90678C21.9504 8.05911 21.9178 8.22249 21.9178 8.3875C21.9178 8.55252 21.9504 8.7159 22.0139 8.86822C22.0773 9.02055 22.1703 9.1588 22.2875 9.275L26.7375 13.75H1.25C0.918477 13.75 0.600533 13.8817 0.366113 14.1161C0.131692 14.3505 -2.62229e-06 14.6685 -2.62229e-06 15C-2.62229e-06 15.3315 0.131692 15.6495 0.366113 15.8839C0.600533 16.1183 0.918477 16.25 1.25 16.25H26.8125L22.2875 20.775C22.0659 21.0075 21.9423 21.3163 21.9423 21.6375C21.9423 21.9587 22.0659 22.2675 22.2875 22.5C22.4037 22.6172 22.542 22.7102 22.6943 22.7736C22.8466 22.8371 23.01 22.8698 23.175 22.8698C23.34 22.8698 23.5034 22.8371 23.6557 22.7736C23.808 22.7102 23.9463 22.6172 24.0625 22.5L28.9 17.6875C29.6023 16.9844 29.9967 16.0313 29.9967 15.0375C29.9967 14.0437 29.6023 13.0906 28.9 12.3875Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_397_639">
                      <rect
                        width="30"
                        height="30"
                        fill="black"
                        transform="matrix(-1 0 0 -1 30 30)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          )}
          <Image
            src={src}
            width={391}
            height={227}
            alt={nft}
            className="w-full"
          />
        </div>

        <div className="p-4 flex flex-col gap-4">
          <div className="flex w-full items-center justify-between mx-auto">
            <h3 className="font-bold text-2xl text-black">{nft}</h3>
            <button
              type="button"
              className="text-xs w-[7.38em] h-8 font-medium text-[#23252B] bg-[#E1EDD9] rounded-[3em]"
            >
              {quantity} NTF
            </button>
          </div>

          <div className="text-sm">
            <span className="text-[#617587]">
              Price Range : {minPrice} - {maxPrice}
            </span>
            <p className="text-[#23252B] line-clamp-2">{description}</p>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src={avatar}
              width={40}
              height={40}
              alt={"avatar"}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <small className="text-xs text-[#617587]">Artist</small>
              <h3 className="text-base text-[#23252B]">{artist}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
