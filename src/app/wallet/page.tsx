import { SingleWallet } from "@/components/singleWallet";


export default function Wallet() {
  return (
    <main className="w-full bg-[#E6E9F2] flex flex-col h-screen justify-center items-center mt-[-8rem] gap-16">
      <h2 className="font-extrabold text-[2em] text-black">Choose the wallet to connect</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <SingleWallet />
          <SingleWallet />
          <SingleWallet />
        </div>
    </main>
  );
}
