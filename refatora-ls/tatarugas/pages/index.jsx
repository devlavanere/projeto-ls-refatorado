import { Inter } from 'next/font/google'
import clickMenu from './components/clickMenu'
import clickEquipe from './components/clickMenu'
import Links from './components/links'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='todo'>
      <header>
        <Links />
          <nav className='nav'>
            <button className="iconMenu" id="mobile-menu-icon" onClick={clickMenu}>
              <i className="fa-solid fa-bars" />
            </button>
            <div id="logo">
              <a href="../index.html">
                <img src="/img/logo.png" alt="Logo Casco Vivo" />
                <h1 style={{ paddingLeft: 5 }}>Casco Vivo</h1>
              </a>
            </div>
            <div id="mobile-login-icon">
              <a href="">
                <i className="fa-solid fa-right-to-bracket" />
                <p>LOGIN</p>
              </a>
            </div>
            <ul id="botoes-menu">
              <li className="botao-menu">
                <a href="#tartarugas">
                  TARTARUGAS
                  <i className="fa-solid fa-water" />
                </a>
              </li>
              <li className="botao-menu">
                <a href="#ameacas">
                  AMEAÇAS
                  <i className="fa-solid fa-triangle-exclamation" />
                </a>
              </li>
              <li className="botao-menu">
                <a href="#organizacoes">
                  ORGANIZAÇÔES
                  <i className="fa-solid fa-hand-holding-heart" />
                </a>
              </li>            
              <li id="login" className="botao-menu">
                <Link href="/Login">
                  LOGIN
                  <i className="fa-solid fa-right-to-bracket" />            
                </Link>               
              </li>
            </ul>
          </nav>
          <section id="mobile-menu">
            <ul id="botoes-menu-mobile">
              <a href="#tartarugas">
                <li className="botao-menu-mobile">
                  <p>TARTARUGAS</p>
                  <i className="fa-solid fa-water" />
                </li>
              </a>
              <a href="#ameacas">
                <li className="botao-menu-mobile">
                  <p>AMEAÇAS</p>
                  <i className="fa-solid fa-triangle-exclamation" />
                </li>
              </a>
              <a href="#organizacoes">
                <li className="botao-menu-mobile">
                  <p>ORGANIZAÇÔES</p>
                  <i className="fa-solid fa-hand-holding-heart" />
                </li>
              </a>
            </ul>
          </section>
          <img
            id="banner"
            src="/img/banner.jpg"
            alt="Banner: Preserve as Tartarugas Marinhas"
          />
      </header>
      <main className='principal'>
        <article id="conscientizar">
          <article id="tartarugas">
            <h1>
              As tartarugas marinhas desempenham um papel vital nos ecossistemas
              marinhos e são espécies de grande importância ecológica. Elas existem
              há milhões de anos e têm uma história evolutiva longa e fascinante. A
              extinção delas significaria a perda de uma espécie única, causando uma
              redução significativa da biodiversidade dos oceanos.
              <br />
              <br />
              <i className="fa-solid fa-earth-americas" /> No mundo existem um total
              de 7 espécies de tartaruga marinhas, 5 delas desovam no Brasil e todas
              elas estão em algum grau de ameaça de extinção:
            </h1>
            <ul>
              <li>
                <img
                  src="/img/especies/tartaruga-cabecuda.jpg"
                  alt="Tartaruga Cabeçuda"
                />
                <h2>Tartaruga-Cabeçuda</h2>
                <p>
                  Categoria de ameaça:
                  <br />
                  Vulnerável (VU)
                </p>
              </li>
              <li>
                <img
                  src="/img/especies/tartaruga-de-couro.jpg"
                  alt="Tartaruga de Couro"
                />
                <h2>Tartaruga-de-Couro</h2>
                <p>
                  Categoria de ameaça:
                  <br />
                  Vulnerável (VU)
                </p>
              </li>
              <li>
                <img
                  src="/img/especies/tartaruga-de-pente.jpg"
                  alt="Tartaruga de Pente"
                />
                <h2>Tartaruga-de-Pente</h2>
                <p>
                  Categoria de ameaça:
                  <br />
                  Criticamente em perigo (CR)
                </p>
              </li>
              <li>
                <img src="/img/especies/tartaruga-oliva.jpg" alt="Tartaruga Oliva" />
                <h2>Tartaruga-Oliva</h2>
                <p>
                  Categoria de ameaça:
                  <br />
                  Vulnerável (VU){" "}
                </p>
              </li>
              <li>
                <img src="/img/especies/tartaruga-verde.jpg" alt="Tartaruga Verde" />
                <h2>Tartaruga-Verde</h2>
                <p>
                  Categoria de ameaça:
                  <br />
                  Em Perigo (EN){" "}
                </p>
              </li>
            </ul>
          </article>
          <div id="mais">
            <a href="#">
              <button>
                <i className="fa-solid fa-magnifying-glass" /> Saiba mais sobre as
                Tartarugas Marinhas
              </button>
            </a>
          </div>
          <ul id="ameacas">
            <h2>Conheça algumas das ameaças:</h2>
            <li className="ameaca">
              <h3>
                <i className="fa-solid fa-trash-can" /> Poluição:{" "}
              </h3>
              <p>
                A poluição tem um impacto significativo nas tartarugas marinhas e é
                uma das principais ameaças que enfrentam. As tartarugas marinhas
                confundem frequentemente plásticos e outros resíduos sólidos com
                alimentos, como águas-vivas e algas, e acabam ingerindo-os. O
                plástico não é digerível e pode causar obstrução no trato digestivo,
                levando a problemas de saúde graves e até mesmo à morte. Além disso,
                as tartarugas marinhas podem ficar presas em redes de pesca
                abandonadas e outros detritos, resultando em ferimentos graves. Para
                mitigar esses efeitos, é fundamental reduzir a poluição plástica,
                implementar práticas de gestão de resíduos adequadas, controlar o
                uso de produtos químicos tóxicos e adotar medidas para prevenir
                derramamentos de óleo e controlar a poluição
                sonora&nbsp;nos&nbsp;oceanos.
              </p>
            </li>
            <li className="ameaca">
              <h3>
                <i className="fa-solid fa-skull-crossbones" /> Caça:{" "}
              </h3>
              <p>
                Embora seja ilegal em muitos países, a caça continua a ocorrer em
                algumas regiões por diversas razões, incluindo aspectos culturais,
                em algumas culturas e comunidades costeiras, as tartarugas marinhas
                são caçadas por sua carne, que é considerada uma iguaria em certas
                regiões. Além disso, os ovos de tartaruga também são coletados e
                consumidos, principalmente como uma iguaria ou como suposto
                afrodisíaco. Também há uma demanda ilegal significativa por produtos
                derivados das tartarugas marinhas, como o casco, o couro e os ossos,
                que são utilizados para fabricação de joias e artesanatos. Para
                combater a caça das tartarugas marinhas, são necessárias medidas
                efetivas de conservação, que incluem implementação e reforço das
                leis de proteção das tartarugas marinhas em nível nacional e
                internacional. Aumento da conscientização e educação das comunidades
                locais sobre a importância da conservação das tartarugas marinhas.
                Apoio a programas de conservação que envolvam a participação das
                comunidades locais, fornecendo alternativas
                econômicas&nbsp;sustentáveis.
              </p>
            </li>
            <li className="ameaca">
              <h3>
                <i className="fa-solid fa-ship" /> Pesca Incidental:{" "}
              </h3>
              <p>
                Capturadas incidentalmente em redes de espera ou arrastos, as
                tartarugas são forçadas a permanecer submersas por muito tempo, não
                conseguindo subir à superfície para respirar. Se não socorridas a
                tempo, pelos pescadores, acabam por morrer afogadas. Tartarugas
                capturadas em pescarias de espinhel tendem a engolir anzóis e
                linhas, causando graves lesões ao sistema digestivo que podem também
                levar estes animais a óbito. Ao se enroscar em redes e linhas de
                pesca, as tartarugas também correm o risco de ter lesões e perda de
                nadadeiras, comprometendo seriamente sua sobrevivência. A captura
                incidental ameaça às populações de tartarugas marinhas em todo o
                mundo. No Brasil, assim como no resto do mundo, pescarias de emalhe,
                arrastos de camarão e espinhéis em alto mar são algumas das
                principais modalidades de pesca que interagem
                com&nbsp;as&nbsp;tartarugas.
              </p>
            </li>
          </ul>
        </article>
        <article id="organizacoes">
          <h1>
            <i className="fa-solid fa-hand-holding-heart" /> Existem organizações
            brasileiras que se dedicam à conservação e proteção das tartarugas
            marinhas, elas protegem espécies ameaçadas, realizam monitoramento e
            pesquisa, resgatam e reabilitam tartarugas feridas, soltam filhotes
            recém-nascidos, promovem educação ambiental e conscientização, e advocam
            por políticas de conservação. Elas desempenham um papel fundamental na
            preservação dessas espécies e na manutenção dos ecossistemas marinhos.
          </h1>
          <div id="orgs">
            <h2>
              <i className="fa-solid fa-magnifying-glass" /> Conheça algumas das
              organizações:
            </h2>
            <ul className="org">
              <li>
                <a href="https://www.tamar.org.br/">
                  <img src="/img/logos/logo_tamar.jpg" alt="Logo Projeto Tamar" />
                </a>
              </li>
              <li>
                <h3>
                  <a href="https://www.tamar.org.br/">Projeto Tamar:</a>
                </h3>
                <p>
                  O Projeto Tamar é um dos mais conhecidos e atuantes projetos de
                  conservação de tartarugas marinhas no Brasil. Ele é coordenado
                  pelo Instituto Chico Mendes de Conservação da Biodiversidade
                  (ICMBio) e trabalha em parceria com a Fundação Pró-Tamar. O
                  Projeto Tamar possui diversas bases de pesquisa e monitoramento ao
                  longo da costa brasileira e realiza ações de pesquisa, educação
                  ambiental e manejo para proteger as tartarugas marinhas.
                </p>
              </li>
            </ul>
            <ul className="org">
              <li>
                <a href="https://www.tamar.org.br/">
                  <img
                    src="./img/logos/logo_tartarugas_do_delta.jpg"
                    alt="Logo Instituto Tartarugas do Delta"
                  />
                </a>
              </li>
              <li>
                <h3>
                  <a href="https://www.institutotartarugasdodelta.org/">
                    Instituto Tartarugas do Delta:
                  </a>
                </h3>
                <p>
                  Localizado no estado do Piauí, o Instituto Tartarugas do Delta
                  (ITD) trabalha na conservação das tartarugas marinhas na região do
                  Delta do Parnaíba. O ITD realiza atividades de monitoramento de
                  praias, resgate de tartarugas, educação ambiental e projetos de
                  pesquisa.
                </p>
              </li>
            </ul>
            <ul className="org">
              <li>
                <a href="https://www.tamar.org.br/">
                  <img src="/img/logos/logo_verdeluz.jpg" alt="Logo Verdeluz" />
                </a>
              </li>
              <li>
                <h3>
                  <a href="https://www.verdeluz.org/">Instituto Verdeluz:</a>
                </h3>
                <p>
                  O Instituto Verdeluz é uma organização sem fins lucrativos que
                  atua na proteção das tartarugas marinhas no estado do Espírito
                  Santo. O instituto desenvolve projetos de pesquisa, monitoramento
                  de praias, resgate de tartarugas, soltura de filhotes, educação
                  ambiental e engajamento comunitário.
                </p>
              </li>
            </ul>
            <ul className="org">
              <li>
                <a href="https://www.tamar.org.br/">
                  <img src="/img/logos/logo_guajiru.jpg" alt="Logo Guajiru" />
                </a>
              </li>
              <li>
                <h3>
                  <a href="https://associacaoguajiru.com.br/">
                    Associação Guajiru:
                  </a>
                </h3>
                <p>
                  Desenvolvido pela Associação Guajiru, o projeto Tartarugas Urbanas
                  visa a proteção das áreas de desova de tartarugas marinhas no
                  litoral da Paraíba. Implementado em 2002, tem por objetivo evitar
                  os efeitos nocivos da urbanização nas áreas de maior presença de
                  ninhos das tartarugas. Devido à iluminação artificial inadequada,
                  os filhotes, que deveriam se orientar através do brilho da espuma
                  das ondas e da lua para chegar ao oceano, se desorientam em
                  direção contrária ao mar e podem, consequentemente, vir a óbito
                  desidratados, predados ou atropelados.
                </p>
              </li>
            </ul>
            <ul className="org">
              <li>
                <a href="http://ibimm.org.br/projeto-sos-tartarugas-marinhas/">
                  <img src="/img/logos/logo_ibimm.jpg" alt="Tartaruga Verde" />
                </a>
              </li>
              <li>
                <h3>
                  <a href="http://ibimm.org.br/projeto-sos-tartarugas-marinhas/">
                    {" "}
                    Instituto de Biologia Marinha e Meio Ambiente:
                  </a>
                </h3>
                <p>
                  O Projeto SOS Tartarugas Marinhas realizado pelo Instituto de
                  Biologia Marinha e Meio Ambiente tem como objetivo principal,
                  estudar aspectos biológicos e ecológicos das tartarugas marinhas
                  nas áreas das Unidades de Conservação Canéia-Iguape-Peruibe,
                  Mosaico de Unidades de Conservação Jureia-Itatins e Estação
                  Ecológica Tupiniquins no Município de Peruíbe e utilizar os dados
                  obtidos para fins científicos, socioeducativos e
                  conservacionistas.
                </p>
              </li>
            </ul>
            <h4>
              Essas são apenas algumas das organizações brasileiras envolvidas na
              conservação das tartarugas marinhas. Existem muitas outras
              instituições e grupos de voluntários em diferentes regiões do país que
              também desempenham um papel importante na proteção dessas espécies
              ameaçadas, conheça mais{" "}
              <a href="https://www.icmbio.gov.br/centrotamar/rede-de-parceiros">
                clicando aqui.
              </a>
            </h4>
          </div>
        </article>
        <article id="lei">
          <h1>
            <i className="fa-solid fa-landmark" /> Legislação brasileira:
          </h1>
          <ul>
            <li>
              <img
                id="tartaruga"
                src="./img/turtle.gif"
                alt="Tartaruga"
                width="100%"
              />
            </li>
            <li className="item-lei">
              <h2>Constituição Federal do Brasil (1988):</h2>
              <p>
                Artigo 225. "Todos têm direito ao meio ambiente ecologicamente
                equilibrado, bem de uso comum do povo e essencial à sadia qualidade
                de vida, impondo-se ao Poder Público e à coletividade o dever de
                defendê-lo e preservá-lo para as presentes e futuras gerações.
                <br />§ 1º Para assegurar a efetividade desse direito, incumbe ao
                Poder Público: VII - proteger a fauna e a flora, vedadas, na forma
                da lei, as práticas que coloquem em risco sua função ecológica,
                provoquem a extinção de espécies ou submetam os animais à
                crueldade."
              </p>
            </li>
          </ul>
        </article>
      </main>
      <footer className='footer'>
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
    </div>
  )
}
