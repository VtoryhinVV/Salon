import { useParams } from "react-router-dom";




export const ServicesChoose = () => { 
const { servicesChoose } = useParams();
// "dermal_filler" 
//            "lip_filler"
//            "injectables_for_men"
//            "medical"
//            "anti_wrinkle"

    return (<div>
        <h1>{servicesChoose}</h1>
        { servicesChoose === "dermal_filler" && (<p>dermal_filler</p>)}
        {servicesChoose === "lip_filler" && (<p>lip_filler</p>)}
        {servicesChoose === "injectables_for_men" && (<p>injectables_for_men</p>)}
        {servicesChoose === "medical" && (<p>medical</p>)}
        { servicesChoose === "anti_wrinkle" && (<p>anti_wrinkle</p>)}
    </div>
        
    )
}
