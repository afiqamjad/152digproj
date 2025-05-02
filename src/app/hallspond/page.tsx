import Image from "next/image"
import Link from "next/link"
export default function HallsPond() {
    return(
        <div className="flex flex-col items-center justify-center w-dvw">
            <h1 className="mt-7 w-[100%] text-5xl text-center">Hall&apos;s Pond Sanctuary</h1>
            <div className="flex flex-row justify-evenly items-center mt-20">
                <p className="w-[50%] leading-9">Hall’s Pond Sanctuary, located in Brookline, Massachusetts, is an urban wildlife conservatory encompassing approximately 3.5 acres. It was originally known as Swallow Pond and the area was part of Minna Hall&apos;s Ivy Street property. In 1975, the Town of Brookline purchased Hall&apos;s Pond, designating it as its first wildlife sanctuary. Today, Hall’s Pond Sanctuary serves as a protected natural area for passive recreation, environmental education, and wildlife observation. As of May 1, 2025, Hall&apos;s Pond Sanctuary has over 70 bird species observed seasonally and a variety of native trees, shrubs, and wetland plants.</p>
                <Image className="border-2 border-amber-50"src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1746156589/halls-1_gu6vrq.jpg" alt="" width={650} height={450}/>
            </div>
            <div className="grow w-[100%] flex flex-row justify-center items-center mt-24">
                <Link href="/hallspond/characteristics" className="border-2 rounded-2xl px-3.5 py-0.5 hover:bg-slate-50/65 text-2xl h-10">Click here to learn more about the sanctuary&apos;s characteristics!</Link>
            </div>
        </div>
    )
}