import Accueil from "./screens/accueil";
import Head from "next/head";

export default function App(){
    
    return(
        <div>
            <Head>
                <title>MysterArt</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Accueil></Accueil>
        </div>
    )
}



