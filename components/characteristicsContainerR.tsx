import Image from "next/image"
interface characteristicsContainerInputsR {
    src: string,
    title: string,
    desc: React.ReactNode,
    width: number,
    height: number
}

export default function CharacteristicsContainerR({src, title, desc, width, height} :  characteristicsContainerInputsR) {
    return(
        <div className="flex flex-row justify-center items-center w-[100%] p-7">
            <div className="grow flex flex-col items-center justify-center h-full px-5">
                <h2 className="text-5xl p-4">{title}</h2>
                <div className="grow text-lg flex justify-center items-center">{desc}</div>
            </div>
            <Image className="border-2 border-amber-50"src={src} alt="" width={width} height={height}/>
        </div>
    )

}