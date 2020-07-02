import Link from "next/link";
import { useState } from "react";

export default function Tableau() {
  const [explicatifLunette, setExplicatifLunette] = useState(false);
  const [showIndice, setShowIndice] = useState(false);
  const [reponseIndice, setReponseIndice] = useState("");
  const [devoileIndice, setDevoileIdice] = useState(false);
  const [perdu, setPerdu] = useState("");
  const [nbShot, setNbShot] = useState(0);

  const toggleExplicationState = () => {
    setExplicatifLunette(!explicatifLunette);
  };
  const tryIndice = () => {
    setReponseIndice("")
    setPerdu("");
    setShowIndice(!showIndice);
    setNbShot(nbShot + 1);

  };
  const handleIndiceRep = (e) => {
    e.preventDefault();
    const bonneReponse = "indice";
    if (reponseIndice === bonneReponse) {
      setDevoileIdice(!devoileIndice);
    } else {
      setShowIndice(!showIndice);
      setPerdu("perduuuuuuuuuuuuuuu");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <section style={{ height: "100%", zIndex: 1 }}>
        <main>
          <h1>Page Tableau</h1>
          <p
            style={{ width: "40vw", height: "30vh", border: "2px green solid" }}
          >
            The tableau
          </p>
          <p>Desc du tableau blabla bla</p>
        </main>
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button>
            <Link href="./enigme">
              <a
                onMouseEnter={() => toggleExplicationState()}
                onMouseLeave={() => toggleExplicationState()}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Lunette
              </a>
            </Link>
            <p style={{ display: explicatifLunette ? "" : "none" }}>
              inscription indiquant la fonction des lunettes
            </p>
          </button>
          <button
            onClick={tryIndice}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Indice? tentative n°{nbShot}
          </button>
          <main
            style={{
              display: showIndice ? "flex" : "none",
              flexDirection: "column",
            }}
          >
            La Question est: BLABLABLA?
            <form onSubmit={handleIndiceRep}>
              <input
                onChange={(e) => setReponseIndice(e.target.value)}
                type="text"
                placeholder="Ta reponse ici"
                value={reponseIndice}
                name="indice"
              ></input>
              <button type="submit" value="ok">
                Valider
              </button>
            </form>
          </main>
          <p style={{ display: devoileIndice ? "flex" : "none" }}>
              VOICI L'INDICE TANT ATTENDU{" "}
              <Link href="./tableau">
                <a> X</a>
              </Link>
            </p>
            <p style={{ display: perdu ? "flex" : "none" }}>
              {perdu}
            </p>
          <button style={{ display: devoileIndice ? "flex" : "none" }}>
            revoir histoire
          </button>
        </main>
      </section>
    </div>
  );
}
