import Image from "next/image";
import Link from "next/link";

type CollectionProps = {
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
  src,
  nft,
  quantity,
  artist,
  avatar,
  description,
  minPrice,
  maxPrice,
}: CollectionProps) => {
  return (
    <div className="w-full h-fit font-extrabold rounded-[2.94em] bg-[#FAFAFA] shadow-2xl box-border">
      <div className="flex flex-col w-full p-6 gap-6">
        <Image
          src={src}
          width={391}
          height={227}
          alt={nft}
          className="rounded-3xl"
        />
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
            <p className="text-[#23252B] truncate-2">
              {description}
            </p>
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
