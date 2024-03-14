import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  title: string;
};

export const Heading = ({ title }: HeaderProps) => {
  return <header className="w-full h-fit font-extrabold text-2xl text-[#000000] my-8">{title}</header>;
};
