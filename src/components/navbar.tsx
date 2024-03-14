import Image from "next/image";
import Link from "next/link";
import { FooterSocial } from "./footerSocial";

export const Navbar = () => {
  return (
    <nav className="bg-white h-auto fixed w-full top-0 box-border py-4">
      <div className="flex justify-between h-auto items-center w-[89.42%] mx-auto box-border">
        <Link href={"/"} className="w-fit h-fit">
          <Image
            src={"/assets/logo.svg"}
            width={255}
            height={39}
            alt={"marketplace logo"}
          />
        </Link>
        <button className="flex w-fit h-fit px-6 py-[1.31em] items-center justify-end border border-[#23252B] rounded-[5.44rem]">
          <p className="font-semibold text-base text-[#23252B]">Connect Wallet</p>
        </button>
      </div>
    </nav>
  );
};
