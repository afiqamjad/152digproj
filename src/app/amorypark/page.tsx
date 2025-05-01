import Image from "next/image"
import Link from "next/link"
export default function AmoryPark() {
    return(
        <div className="flex flex-col items-center justify-center w-dvw">
            <h1 className="mt-7 w-[100%] text-5xl text-center">Amory Park</h1>
            <div className="flex flex-row justify-evenly items-center mt-20">
                <p className="w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Image className="border-2 border-amber-50"src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745552646/exHallsPond_msdydn.png" alt="" width={450} height={450}/>
            </div>
            <h2 className="text-5xl text-center my-10">Learn About:</h2>
            <div className="grow w-[100%] flex flex-row justify-between items-center px-80">
                <Link href="/amorypark/characteristics" className="border-2 rounded-2xl px-3.5 py-0.5 hover:bg-slate-50/65 text-2xl">Characteristics</Link>
                <Link href="/maps" className="border-2 rounded-2xl px-3.5 py-0.5 hover:bg-slate-50/65 text-2xl">Wildlife</Link>
            </div>
        </div>
    )
}