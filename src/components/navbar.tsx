"use client";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Heading } from "./heading";
import { AuthContext } from "@/contexts/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { NftContext } from "@/contexts/NftContext";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { signedIn, setSignedIn } = useContext(AuthContext);
  const { nft } = useContext(NftContext);

  return (
    <nav
      style={{
        backgroundColor: pathname.includes("/wallet") ? "#E6E9F2" : "#FAFAFA",
      }}
      className="h-auto fixed z-[9999] w-full top-0 box-border py-4"
    >
      <div className="absolute right-4">
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transfrom opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transfrom opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          show={isOpen}
        >
          <aside className="flex w-full lg:w-[30.75em] h-full lg:h-[68.1vh] rounded-xl overflow-hidden box-border">
            <div className="bg-[#D4D4D4] opacity-25 w-8 flex justify-center">
              <i
                onClick={() => setIsOpen(!isOpen)}
                className="flex mx-auto items-center h-fit w-fit pt-4 cursor-pointer"
              >
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11.4824L7.67081 6.24113L1 0.999847"
                    stroke="#02071D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11.4824L7.67081 6.24113L1 0.999847"
                    stroke="#02071D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
            </div>
            <div className="w-full bg-white border-2 border-[#02071D] rounded-xl p-4 md:p-6 box-border">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 md:gap-3">
                  <Image
                    src={"/assets/avi.png"}
                    width={50}
                    height={50}
                    alt={"avi"}
                    className="rounded-full"
                  />

                  <span className="flex items-center gap-2">
                    <p className="text-xs md:text-base text-[#02071D]">STV6Q...4Z7WD</p>
                    <i>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 6V2C6 0.9 6.9 0 8 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14H14V18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V8C0 6.9 0.9 6 2 6H6ZM8 6H12C12.5304 6 13.0391 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8V12H18V2H8V6ZM2 8V18H12V8H2Z"
                          fill="#02071D"
                        />
                      </svg>
                    </i>
                  </span>
                </div>
                <i
                  onClick={() => {
                    setSignedIn(false);
                    setIsOpen(!isOpen);
                  }}
                  className="cursor-pointer"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 25.5C19.9036 25.5 25.5 19.9036 25.5 13C25.5 6.09644 19.9036 0.5 13 0.5C6.43306 0.5 1.04887 5.564 0.539429 12H13.0858L8.5429 7.45711L9.95712 6.04289L16.2071 12.2929L16.9142 13L16.2071 13.7071L9.95712 19.9571L8.5429 18.5429L13.0858 14H0.539429C1.04887 20.436 6.43306 25.5 13 25.5Z"
                      fill="#02071D"
                    />
                  </svg>
                </i>
              </div>

              <div className="block my-12">
                <small className="text-sm text-[#7b7b7b]">In your wallet</small>
                <h2 className="text-2xl text-[#02071D] font-extrabold">
                  0.129 BTC
                </h2>
              </div>

              <section className="w-full">
                <Heading title="Your NFTs" />
                {nft ? (
                  <Image
                    src={nft.src}
                    width={391}
                    height={227}
                    alt={nft.nft}
                    className="rounded-lg w-[80%] lg:w-full"
                  />
                ) : (
                  <div className="w-full flex flex-col items-center">
                    <p className="text-[#617587] text-2xl text-center my-12">
                      You don&apos;t own any NFTs yet
                    </p>
                    <button
                      type="button"
                      className="bg-[#23252B] text-[#fafafa] w-full lg:w-[15.5em] h-[4.2em] rounded-[5.44em] text-base font-semibold"
                    >
                      Start shopping
                    </button>
                  </div>
                )}
              </section>
            </div>
          </aside>
        </Transition>
      </div>
      <div className="flex justify-between h-auto items-center w-[89.42%] mx-auto box-border">
        <Link href={"/"} className="w-fit h-fit">
          <Image
            src={"/assets/logo.svg"}
            width={255}
            height={39}
            alt={"marketplace logo"}
            className="w-[70%] md:w-full"
          />
        </Link>

        <button
          onClick={() => {
            signedIn ? setIsOpen(!isOpen) : router.push("/wallet");
          }}
          className="flex w-fit h-fit px-6 py-[1.31em] items-center justify-end border border-[#23252B] rounded-[5.44rem]"
        >
          <p className="font-semibold text-xs md:text-base text-[#23252B]">
            {signedIn ? "Account" : "Connect Wallet"}
          </p>
        </button>
      </div>
    </nav>
  );
};
