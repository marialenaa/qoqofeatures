import Link from "next/link"

export default function Principale(){

    return(
        <div style={{width: "100vw", height: "90vh", background:"", display:'flex', alignItems:'flex-end', justifyContent:'space-evenly'}}>
            <Link href='./map'>
                <a style={{
                    textDecoration: "none",
                    color: "inherit",
                    zIndex:1
                    }}><h1>La Carte</h1>
                </a>
            </Link>
            <Link href='./enigmesGalerie'>
                <a style={{
                    textDecoration: "none",
                    color: "inherit",
                    zIndex:1
                    }}><h1>Galerie des enigmes</h1>
                </a>
            </Link>
            <Link href='./suspects'>
                <a style={{
                    textDecoration: "none",
                    color: "inherit",
                    zIndex:1
                    }}><h1>La liste des suspects</h1>
                </a>
            </Link>

        </div>
    )
}