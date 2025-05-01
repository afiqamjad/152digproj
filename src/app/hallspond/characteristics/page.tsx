import CharacteristicsContainerL from "../../../../components/characteristicsContainerL"
import CharacteristicsContainerR from "../../../../components/characteristicsContainerR"
import AudioPlayer from "../../../../components/playbutton"
import VideoPlayer from "../../../../components/videoplayer"
export default function HallsPondChar() {
    return (
        <div className="flex flex-col h-dvh max-w-[100%] items-center">
            <h1 className="text-center text-5xl mt-7">Characteristics of Hall&apos;s Pond Sanctuary</h1>
            <AudioPlayer playDesc="Listen to the sounds of nature while you scroll!" src="/audio/nature-ambience-323729.mp3"/>
            <div className="grow max-w-full">
            <CharacteristicsContainerL src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745552646/exHallsPond_msdydn.png" title="Dead Standing Trees" desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Dead trees that remain upright after dying</li>
                <li>Provide critical habitats for various species through its cavities and decaying wood</li>
                <li>Support birds, insects, and fungi biodiversity</li>
                </ul>
            }/>
            <CharacteristicsContainerR src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745552646/exHallsPond_msdydn.png" title="Rotting Logs" desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Fallen trees and branches in any stage of decomposition on the forest floor</li>
                <li>Contributes to nutrient recycling through releasing nutrients into the soil as decomposition occurs</li>
                <li>Acts as microhabitat by providing moisture and shelter to certain organisms</li>
                </ul>
            }/>
            <CharacteristicsContainerL src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745515017/portfolioAfiq-8_b5nxfz.jpg" title="Thick Ground Vegetation" desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Dense growth of low-height plants and shrubs</li>
                <li>Provides cover from predators and acts as nesting site</li>
                <li>Root systems prevent erosion and maintain soil integrity</li>
                </ul>
            }/>
            <CharacteristicsContainerR src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745552646/exHallsPond_msdydn.png" title="Patchy Ecosystem Structure" desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Dead trees that remain upright after dying</li>
                <li>Provide critical habitats for various species through its cavities and decaying wood</li>
                <li>Support birds, insects, and fungi biodiversity</li>
                </ul>
            }/>
            <CharacteristicsContainerL src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745552646/exHallsPond_msdydn.png" title="Leaf Litter and Organic Ground Cover" desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Pile of fallen leaves, twigs, and other organic material across the forest floor</li>
                <li>Serves as food source for decomposers, contributing to nutrient recycling</li>
                <li>Provides habitat for decomposers and small fauna as it maintains moisture and has insulation</li>
                </ul>
            }/>
            <CharacteristicsContainerR src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745552646/exHallsPond_msdydn.png" title="Sparse to Dense Canopy Variation" desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Different tree canopy densities &#40;open areas to dense coverage&#41;</li>
                <li>Creates different light intensities, promoting growth for various species</li>
                <li>Promotes wildlife diversity and enables succession process</li>
                </ul>
            }/>
            <CharacteristicsContainerL src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745552646/exHallsPond_msdydn.png" title="Minimal Environmental Disturbance" desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Limiting human activities to not disturb the ecosystem</li>
                <li>Minimizes stress on wildlife and prevents habitat degradation</li>
                <li>Example: Prohibition of ball games and dog walking</li>
                </ul>
            }/>
            <CharacteristicsContainerR src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745552646/exHallsPond_msdydn.png" title="Sustainable Design Practices" desc={
                <ul className="list-disc pl-5 space-y-1">
                <li>Environmentally-friendly strategies in the establishment and management of the sanctuary</li>
                <li>Enables long-term conservation and allows for human interaction to promote coexistence between humans and nature</li>
                <li>Example: Informative signs and use of native plants</li>
                </ul>
            }/>
            </div>
            <h2 className="text-5xl text-center mt-7 mb-14">Take a Walk Around Hall&apos;s Pond Sanctuary!</h2>
            <div className="flex justify-center pb-[7%] w-[90%] h-[90%]">
                <VideoPlayer/>
            </div>
        </div>
    )
}