import Image from "next/image";
import Link from "next/link";

type NftProps = {
  src: string;
  nft: string;
  price: string;
};

export const Nft = ({
  src,
  nft,
  price
}: NftProps) => {
  return (
    <div className="w-full h-fit font-extrabold rounded-[2.94em] bg-[#FAFAFA] shadow-2xl box-border">
      <div className="flex flex-col w-full p-6 gap-6">
        <Image
          src={src}
          width={391}
          height={345}
          alt={nft}
          className="rounded-3xl w-full"
        />
        <div className="p-4 flex flex-col gap-4">
          <div className="flex w-full items-center justify-between mx-auto">
            <h3 className="font-bold text-2xl text-black">{nft}</h3>
            <button
              type="button"
              className="text-xs w-[7.38em] h-8 font-medium text-[#23252B] bg-[#E1EDD9] rounded-[3em]"
            >
              {price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
