import { HeroCommon } from "../components/HeroCommon/HeroCommon"
import { OurStory } from "../components/OurStoryAboutUs/OurStory"
import { OurTeam } from "../components/OurTeam/OurTeam"
import { Advantages } from "../components/Advantages/Advantages"

export const AboutUs = () => {
    return <>
        <HeroCommon title='Discover Our story' 
                    text='Short story about us & meet the team' 
                    buttonText='Book appoinment' />
        <OurStory />
        <OurTeam />
        <Advantages />
    </>
}