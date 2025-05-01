import Image from "next/image"
interface characteristicsContainerInputsL {
    src: string,
    title: string,
    desc: React.ReactNode;
}

export default function CharacteristicsContainerL({src, title, desc} :  characteristicsContainerInputsL) {
    return(
        <div className="flex flex-row justify-center items-center w-full p-7">
            <Image className="border-2 border-amber-50"src={src} alt="" width={400} height={400}/>
            <div className="flex flex-col items-center justify-center h-full pl-5">
                <h2 className="text-5xl p-4">{title}</h2>
                <div className="grow text-lg flex justify-center items-center">{desc}</div>
            </div>
            
        </div>
    )

}