"use client";
import React, { createContext, useState } from "react";

export interface iNft {
  src: string; nft: string;
}

type NftType = {
  nft: { src: string; nft: string; };
  setNft: React.Dispatch<React.SetStateAction<iNft>>;
};

export const NftContext = createContext<NftType>({
  nft: { src: "", nft: "" },
  setNft: () => {},
});

export const NftProvider = ({ children }: any) => {
  const [nft, setNft] = useState<any>(null);

  return (
    <NftContext.Provider
      value={{
        nft,
        setNft,
      }}
    >
      {children}
    </NftContext.Provider>
  );
};
