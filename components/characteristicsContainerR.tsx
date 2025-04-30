import Image from "next/image"
interface characteristicsContainerInputsR {
    src: string,
    title: string,
    desc: string
}

export default function CharacteristicsContainerR({src, title, desc} :  characteristicsContainerInputsR) {
    return(
        <div className="flex flex-row justify-center items-center w-full p-7">
            <div className="flex flex-col items-center justify-center h-full pr-5">
                <h2 className="text-5xl p-4">{title}</h2>
                <p className="grow text-lg flex justify-center items-center">{desc}</p>
            </div>
            <Image className="border-2 border-amber-50"src={src} alt="" width={400} height={400}/>
        </div>
    )

}