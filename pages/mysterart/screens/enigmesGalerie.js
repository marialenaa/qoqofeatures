import Link from "next/link"


export default function EnigmesGalerie(){

    return(
        <section className="container">
                <h1 className="header">La galerie des tableaus</h1>
                <section className="grpOne"> 
                    <Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 1
                        </a>
                    </Link>
                    <Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 2
                        </a>
                    </Link>
                    <Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 3
                        </a>
                    </Link>
                </section>
                <section className="grpTwo"> 
                <Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 4
                        </a>
                    </Link>
                    <Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 5
                        </a>
                    </Link>
                    <Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 6
                        </a>
                    </Link>
                </section>
                <section className="grpThree"> 
                <Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 7
                        </a>
                    </Link><Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 8
                        </a>
                    </Link><Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 9
                        </a>
                    </Link><Link href='./tableau'>
                        <a style={{
                            textDecoration: "none",
                            color: "inherit",
                            zIndex:1
                            }}>Tableau 10
                        </a>
                    </Link>
                </section>
        <style>{`
            .container {
                padding:20px;
                border: 1px red solid;
                text-decoration: none;
                color: inherit;
                z-index:1;
                width:90vw;
                height:90vh;
                display: grid;
                grid-gap:20px;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: repeat(4,auto);
                grid-template-areas: "header" 
                                    "grpOne" 
                                    "grpTwo" 
                                    "grpThree";
            }
            .header {
                grid-area: header;
                text-align:center;
                grid-column: 1 /-1;
                grid-row:1;
            }
            .grpOne {
                align-items:center;
                grid-area: grpOne;
                text-align:center;
                grid-column: 1 / span2 ;
                grid-row: 2;
                display: grid;
                grid-template-columns: 1fr 2fr;
                grid-template-rows: 50% 50%;
               
            }
            .grpTwo {
                justify-items:end;
                align-items:center;
                display: grid;
                text-align:center;
                grid-template-columns: 1fr 1fr 1fr;
                grid-area: grpTwo;
                grid-column: 1 /-1;
                grid-row:3;
            }
            .grpThree {
                align-items:center;
                grid-area: grpThree;
                text-align:center;
                grid-column: 1 / -1;
                grid-row:4;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 65% 35%;
            }
        `}</style>
        </section>
    )
}