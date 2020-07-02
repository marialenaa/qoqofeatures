import Link from "next/link"

export default function Principale(){

    return(
        <div style={{width: "auto", height: "80vh", background:"", display:'flex', alignItems:'flex-end', justifyContent:'space-evenly',padding:"40px", textAlign:"center"}}>
            <Link href='./carte'>
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