
export default function Article({titleArticle, bodyArticle, imgArticle}) {

    return (
            <section>
                <img src={imgArticle}></img>
                <h2>{titleArticle}</h2>
                <main>{bodyArticle}</main>
                <style>{`
                    img{
                        height:100vh
                    }
                `}</style>
            </section>
    )
}