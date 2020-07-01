import Accueil from "./screens/accueil"
import Principale from "./screens/principale"
import Map from "./screens/map"
import Suspects from "./screens/suspects"
import Tableau from "./screens/tableau"
import Enigme from "./screens/enigme"
import EnigmesGalerie from "../mysterart/screens/EnigmesGalerie"




export default function App(){
  
    return(
        <div>
        <Accueil></Accueil>
         <Principale></Principale>
        <Map></Map>
         <Suspects></Suspects>
        <EnigmesGalerie></EnigmesGalerie>
        <Enigme></Enigme>
        <Tableau></Tableau>
        </div>
    )
}