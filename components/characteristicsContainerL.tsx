import Image from "next/image"
interface characteristicsContainerInputsL {
    src: string,
    title: string,
    desc: React.ReactNode,
    width: number,
    height: number
}

export default function CharacteristicsContainerL({src, title, desc, width, height} :  characteristicsContainerInputsL) {
    return(
        <div className="flex flex-row justify-center items-center w-[100%] p-7">
            <Image className="border-2 border-amber-50"src={src} alt="" width={width} height={height}/>
            <div className="flex flex-col items-center justify-center h-full pr-5 grow">
                <h2 className="text-5xl p-4 text-center">{title}</h2>
                <div className="grow text-lg flex justify-center items-center">{desc}</div>
            </div>
        </div>
    )

}