import CharacteristicsContainerL from "../../../../components/characteristicsContainerL"
import CharacteristicsContainerR from "../../../../components/characteristicsContainerR"
import AudioPlayer from "../../../../components/playbutton"
import VideoPlayer from "../../../../components/videoplayer"
export default function AmoryParkChar() {
    return (
        <div className="flex flex-col h-dvh max-w-dvw items-center">
            <h1 className="text-center text-5xl mt-7">Characteristics of Amory Park</h1>
            <AudioPlayer playDesc="Listen to the park's ambience while you scroll!" src="/audio/park-6026.mp3"/>
            <div className="grow">
            <CharacteristicsContainerL src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1746149371/halls-10_ndcvnv.jpg" title="Surrounding Trees" width={600} height={400} desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Fully grown trees surrounding the perimeter of the park</li>
                <li>Provides shade, increases appeal, and acts as natural boundary between the park and adjacent areas</li>
                <li>Offers comfort to visitors and contributes to the park&apos;s aesthetics.</li>
                </ul>
            }/>
            <CharacteristicsContainerR src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1746151766/lawngrass_uhudz3.jpg" title="Flat, Graded Lawns" width={600} height={400} desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Level, open grassy areas intended for recreational use</li>
                <li>Facilitates activities such as picnics, sunbathing, sports, and fetch with one&apos;s dog</li>
                <li>Easy to maintain and feels inviting to people</li>
                </ul>
            }/>
            <CharacteristicsContainerL src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1746151568/trimLawn_c4hqer.jpg" title="Trimmed Lawn Grass" width={400} height={400} desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Regularly mowed grass areas throughout the park</li>
                <li>Maintains a neat and clean aesthetic as well as deters pests that might inhabit taller or denser grassy areas</li>
                <li>Enhances the park&apos;s aesthetics</li>
                </ul>
            }/>
            <CharacteristicsContainerR src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1746150333/pathwayAmory_quks5h.jpg" title="Paved Walkways and Paths" width={600} height={400} desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Designated walking paths made of materials like concrete or asphalt</li>
                <li>Provides safe and accessible routes for pedestrians</li>
                <li>Facilitates movement around the park and ensures accesibility for everyone</li>
                </ul>
            }/>
            <CharacteristicsContainerL src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1746151462/tennis_bqcb2v.jpg" title="Athletic Facilities" width={600} height={400} desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Designated areas equipped for specific sports activities</li>
                <li>Encourages playing sports and building a community through doing so</li>
                <li>Promotes health and social interaction amongst park-goers</li>
                </ul>
            }/>
            <CharacteristicsContainerR src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1746151248/diningtable_k828ly.jpg" title="Benches and Picnic Tables" width={600} height={400} desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Seating areas placed throughout the park</li>
                <li>Provides area for socializing and dining</li>
                <li>Encourages longer stays, diversify accessible activities in the park, and increases enjoyment of being at the park</li>
                </ul>
            }/>
            <CharacteristicsContainerL src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1746149371/halls-9_guthcf.jpg" title="Parking Areas" width={600} height={400} desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Designated spaces for vehicle parking</li>
                <li>Provides easy access to park for visitors traveling by car</li>
                <li>Improves accessibility and increases convenience of the park</li>
                </ul>
            }/>
            <CharacteristicsContainerR src="https://res.cloudinary.com/dfcqlwnxu/image/upload/w_1200,q_75/v1745552646/exHallsPond_msdydn.png" title="Designated Dog Areas" width={600} height={400} desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Specific zones where dogs are allowed off-leash under certain conditions</li>
                <li>Provide a safe environment for dogs to exercise and socialize</li>
                <li>Accommodates to pet owners and promotes responsible dog ownership</li>
                </ul>
            }/>
            </div>
            <h2 className="text-5xl text-center mt-7 mb-14">Take a Walk Around Amory Park!</h2>
            <div className="flex justify-center pb-[7%] w-[90%] h-[90%]">
                <VideoPlayer src="https://www.youtube.com/embed/e4T8GM58R44"/>
            </div>
        </div>
    )
}