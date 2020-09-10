import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hackability" />
    <div className="w-full h-64 bg-green-400 pt-4">
      <h1 className="text-center text-white text-2xl mb-4 px-2">
        Viaggio Italia 4 Hackability
      </h1>

      <h2 className="text-center text-white font-thin mb-4 px-2">
        Un crowdfunding per portare la stampa 3D nelle unità spinali italiane
      </h2>

      <a href="https://www.produzionidalbasso.com/project/viaggio-italia4hackability/">
        <img src="https://www.produzionidalbasso.com/media/ckeuploads/segreteria%40hackability.it/2020/09/02/image-20200902160408-1.jpeg" />
      </a>

      <div className="text-center mt-4">
        <a
          className="inline-block text-white  m-auto px-4 py-2 text-xl font-semibold bg-green-600 hover:bg-green-800 rounded shadow"
          href="https://www.produzionidalbasso.com/project/viaggio-italia4hackability/"
        >
          Scopri la campagna!
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
