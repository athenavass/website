import React from "react"
import SEO from "../components/seo.js"
import iconac from "../images/academia-edu.svg"
import SVG from "react-inlinesvg"
import { Link } from "gatsby"

const About = props => {
  return (
    <>
      <SEO title="A propos | Anna Theodorides, Guide Conferencier en histoire de l'art" />
      <div className="introduction_self">
        <h1>A propos </h1>
        <p>
          Ma formation interdisciplinaire – histoire de l’art, sciences sociales
          - a façonné mes perceptions sur les œuvres d’art et mon activité
          d’enseignante constitue un gage de mon expérience dans la transmission
          des savoirs auprès du plus grand nombre. Guide Conférencière,
          (diplômée d’Etat, agréé Ministère de la Culture) et Docteure en
          sciences sociales (EHESS, Paris), j’interviens dans 4 domaines:
        </p>
        <h2>Domaine Culturel</h2>
        <p>
          Diplômée agrée de l’Ecole des guides conférenciers à l’Université
          d’Angers, j’ai travaillé pendant 8 ans dans le tourisme. J’ai intégré
          par la suite la Cité des sciences et de l’industrie en tant que
          médiatrice culturelle pendant 7 ans. Depuis 5 ans, je travaille en
          free-lance comme conférencière pour des agences culturelles à Paris au
          service des institutions et mécènes des expositions.
        </p>
        <h2>Podcast</h2>
        <p>
          Depuis mars 2020, j’ai crée Les Petites Conf-Inées, une série
          d’épisodes en ligne racontant l’histoire d’objets conservés dans des
          espaces muséographiques. Je cherche à capter l’attention des Jeunes et
          Curieux sur des objets étranges au premier regard et des histoires qui
          les renvoient à des questions fondamentales telles que les origines,
          la mort, les rites de passage.. Commençons par des objets du Musée du
          quai Branly – Jacques Chirac et tissons ensemble des liens de savoir
          et d’évasion. <Link to="/podcasts"> En savoir plus </Link>
        </p>
        <h2>Enseignement</h2>
        <p>
          Ma formation pluridisciplinaire – double Masters en relations
          interculturelles à l’Université Paris 3 La Sorbonne Nouvelle et
          Sociologie à l’Ecole des Hautes Etudes en Sciences Sociales – m’a
          conduite à enseigner dans des établissements secondaires de
          l’Education nationale qu’ils soient classés pôles d’excellence ou zone
          prioritaire.
        </p>
        <h2>Recherche</h2>
        <p>
          Docteure en sciences sociales à l’Ecole des Hautes Etudes en Sciences
          Sociales – Paris, je suis spécialisée dans les stratégies de survie
          des minorités non-musulmanes au Moyen-Orient.
          <br></br>
          <a
            href="https://ehess.academia.edu/AnnaTheodorides"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vous pouvez retrouver mes publications et contributions ici.
          </a>
        </p>
      </div>
    </>
  )
}
export default About
