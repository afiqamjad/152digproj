import Link from "next/link";
export default function Home() {
  return (
    <div className="relative items-center justify-center h-[100%] w-dvw bg-black ">
      <div className="absolute space-y-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]">
        <h1 className="text-5xl text-center text-white">Boston’s Biodiversity Balance: Conservation vs. Recreation</h1>
        <h2 className="text-2xl text-center text-white">A Comparative Case Study</h2>
      </div>
      <Link href="/maps" className="absolute bottom-4/12 left-1/2 -translate-x-1/2 border-2 text-white border-white rounded-2xl px-3.5 py-0.5 hover:bg-slate-50/65">Learn More</Link>
    </div>
  );
}

