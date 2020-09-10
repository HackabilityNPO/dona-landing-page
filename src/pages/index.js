import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hackability" />
    <div className="w-full bg-green-400 pt-4 pb-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-center text-white text-4xl mb-4 px-2">
          Viaggio Italia 4 Hackability
        </h1>

        <h2 className="text-center text-2xl text-white pb-4 px-2">
          Un crowdfunding per portare la stampa 3D nelle unità spinali italiane
        </h2>
      </div>
    </div>

    <div className="max-w-lg mx-auto mt-4">
      <a href="https://www.produzionidalbasso.com/project/viaggio-italia4hackability/">
        <img
          class="m-auto w-full"
          src="https://www.produzionidalbasso.com/media/ckeuploads/segreteria%40hackability.it/2020/09/02/image-20200902160408-1.jpeg"
        />
      </a>

      <div className="text-center mt-4">
        <a
          className="inline-block text-white  m-auto px-4 py-2 text-xl font-semibold bg-green-600 hover:bg-green-800 rounded shadow"
          href="https://www.produzionidalbasso.com/project/viaggio-italia4hackability/"
        >
          Scopri la campagna!
        </a>
      </div>

      <div className="text-center mt-4 mx-2">
        <p className="text-lg text-green-900">
          ViaggioItalia4Hackability è una campagna di raccolta di donazioni,
          nata su iniziativa di Viaggio Italia e Hackability, per sostenere un
          progetto per l’autonomia, che Hackability sta lanciando su tutta
          Italia.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
