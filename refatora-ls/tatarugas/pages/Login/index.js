import { Inter } from 'next/font/google'



import Formulario from '../api/App'

import Links from '../components/links'

import clickEquipe from '../components/clickEquipe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Links />
      <main>
      
        <h1 id="titulo">
          <i className="fa-solid fa-tree-city" /> Registre-se para receber
          informações sobre organizações próximas a sua localidade{" "}
          <i className="fa-solid fa-map-location-dot" />
        </h1>
      <Formulario />
        
      </main>
      <footer>
        <div id="footer-logo">
          <img src="../img/logo.png" alt="Logo" />
          <h1>Casco Vivo</h1>
        </div>
        <ul id="redes-sociais">
          <li id="facebook">
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
          <li id="instagram">
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li id="twitter">
            <a href="https://www.twitter.com/">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
        </ul>
        <div id="footer-info">
          <p>
            Construído com: <i style={{ color: "#e34c26" }} className="fa-brands fa-html5" /> <i style={{ color: "#2965f1" }} className="fa-brands fa-css3-alt" /> <i style={{ color: "#f0db4f" }} className="fa-brands fa-square-js" /> para as disciplinas de:
          </p>
          <ul>
            <li>
              <dt>
                <i className="fa-solid fa-seedling" /> Ciência, Tecnologia e Meio
                Ambiente
              </dt>
              <dd>
                <i className="fa-solid fa-chalkboard-user" /> Docente: Alexandre
                Fonseca
              </dd>
            </li>
            <li>
              <dt>
                <i className="fa-solid fa-file-code" /> Linguagem de Script
              </dt>
              <dd>
                <i className="fa-solid fa-chalkboard-user" /> Docente: Francisco
                Dantas
              </dd>
              <dd>
                <i className="fa-solid fa-chalkboard-user" /> Docente: Luiz Carlos
              </dd>
            </li>
          </ul>
        </div>
        <button id="btn-equipe" onClick={clickEquipe}>
          Equipe <i className="fa-solid fa-people-group" />
        </button>
        <section id="projeto">
          <p>
            <i className="fa-solid fa-people-group" /> Equipe:
          </p>
          <ul>
            <li>
              <dt>
                Lucas Emiliano ( <i className="fa-solid fa-seedling" /> /{" "}
                <i className="fa-solid fa-file-code" /> )
              </dt>
              <dd>
                <i className="fa-solid fa-address-card" /> Matrícula: 20221370040
              </dd>
            </li>
            <li>
              <dt>
                Michel Lavanere ( <i className="fa-solid fa-file-code" /> )
              </dt>
              <dd>
                <i className="fa-solid fa-address-card" /> Matrícula: 20221370001
              </dd>
            </li>
            <li>
              <dt>
                Sheila Lee ( <i className="fa-solid fa-seedling" /> )
              </dt>
              <dd>
                <i className="fa-solid fa-address-card" /> Matrícula: 20221370004
              </dd>
            </li>
            <li>
              <dt>
                Wilton Padilha ( <i className="fa-solid fa-seedling" /> )
              </dt>
              <dd>
                <i className="fa-solid fa-address-card" /> Matrícula: 20221370039
              </dd>
            </li>
          </ul>
        </section>
      </footer>
    </>
  )
}
