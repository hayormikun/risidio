import Image from "next/image";
import Link from "next/link";
import { FooterSocial } from "./footerSocial";

export const Footer = () => {
  return (
    <nav className="bg-[#E6E9F2] h-auto w-full box-border">
      <div className="flex justify-between h-[6.125rem] w-[89.42%] mx-auto items-center box-border">
        <Link href={"/"} className="w-fit h-fit">
          <Image
            src={"/assets/logo.svg"}
            width={176}
            height={27}
            alt={"marketplace logo"}
          />
        </Link>
        <div className="flex w-fit gap-6 items-center justify-end">
          <FooterSocial
            uri="/"
            icon="/assets/FACEBOOK.svg"
            width={14.19}
            heigth={26}
            alt="facebook"
          />
          <FooterSocial
            uri="/"
            icon="/assets/TWITTER.svg"
            width={25.87}
            heigth={23.21}
            alt="twitter"
          />
          <FooterSocial
            uri="/"
            icon="/assets/DISCORD.svg"
            width={22}
            heigth={24}
            alt="discord"
          />
          <FooterSocial
            uri="/"
            icon="/assets/INSTAGRAM.svg"
            width={22}
            heigth={22}
            alt="instagram"
          />
        </div>
      </div>
    </nav>
  );
};
