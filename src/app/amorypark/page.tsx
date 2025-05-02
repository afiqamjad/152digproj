import Image from "next/image"
import Link from "next/link"
export default function AmoryPark() {
    return(
        <div className="flex flex-col items-center justify-center w-dvw">
            <h1 className="mt-7 w-[100%] text-5xl text-center">Amory Park</h1>
            <div className="flex flex-row justify-evenly items-center mt-20">
                <p className="w-[50%] leading-7">Amory Playground in Brookline, Massachusetts, is a public park offering recreational facilities and green space for the community. It was originally part of a large wetland called Cedar Swamp and became part of the Amory family&apos;s estate in the 1800s. Today, Amory Playground serves as a community space offering various amenities such as athletic spaces, walking paths, and dog-friendly areas. As of May 1, 2025, there is no data specifying how many species can be observed exclusively at this park, as it primarily serves as a recreational area. While it still contributes to the local biodiversity, Hall's Pond Sanctuary offers a richer experience due to their preserved natural habitats and structure of the ecosystem. </p>
                <Image className="border-2 border-amber-50"src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1746157199/amory_p1grjx.jpg" alt="" width={550} height={450}/>
            </div>
            <div className="grow w-[100%] flex flex-row justify-center items-center mt-24">
                <Link href="/amorypark/characteristics" className="border-2 rounded-2xl px-3.5 py-0.5 hover:bg-slate-50/65 text-2xl h-10">Click here to learn more about the park's characteristics!</Link>
            </div>
        </div>
    )
}