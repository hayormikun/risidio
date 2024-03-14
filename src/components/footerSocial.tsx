import Image from "next/image";
import Link from "next/link";

type SocialProps = {
  uri: string;
  icon: string;
  width: number;
  heigth: number;
  alt: string;
};

export const FooterSocial = ({ uri, icon, width, heigth, alt }: SocialProps) => {
  return (
    <Link href={uri} className="w-fit h-fit">
      <Image src={icon} width={width} height={heigth} alt={alt} />
    </Link>
  );
};
