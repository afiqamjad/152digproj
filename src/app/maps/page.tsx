import Link from "next/link"
import Image from "next/image"
export default function Maps() {
    return(
        <div className=" w-dvw flex flex-row justify-evenly items-center">
            <div className="flex flex-col justify-evenly items-center h-[40%] w-[25%]">
                <Link href="/hallspond" className="w-72 h-72 hover:cursor-pointer hover:w-96 hover:h-96">
                <Image src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745551951/HallsPond_gehzd2.png" alt="" width={700} height={300}></Image>
                </Link>
                <p className="mt-[-2.5rem] text-2xl">Hall&apos;s Pond Sanctuary</p>
            </div>
            <div className="flex flex-col justify-evenly items-center h-[40%] w-[25%]">
                <Link href="/amorypark" className="w-48 h-48 hover:cursor-pointer hover:w-64 hover:h-64">
                    <Image src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745551630/Amory_ghkvda.png" alt="" width={500} height={300}></Image>
                </Link>
                <p className="mt-7 text-2xl">Amory Playground</p>
            </div>
            
        </div>
    )
}