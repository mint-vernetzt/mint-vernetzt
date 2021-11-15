import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export function Topics({ data }) {
  return (
    <Layout>
      <SEO title="Themen" slug="/topics" description="" image="" children="" />

      <section className="container my-10">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 lg:flex-2/3 md:px-6 lg:px-10">
            <h2 className="text-5xl leading-tight lg:text-6xl lg:leading-none mb-2">
              Wissenstransfer
            </h2>

            <p className="lg:text-3xl mb-2 lg:mb-4 font-bold">
              Erfahrungen, Erkentnisse und Daten
            </p>

            <p className="lg:text-xl">
              Im Bereich Wissenstransfer könnt Ihr von Erfahrungen anderer
              Projekte lernen, praxisrelevante Forschung zu gelingender
              MINT-Bildung einsehen sowie Daten und Fakten zur
              MINT-Bildungslandschaft und ihrer Akteure erhalten. Als Service-
              und Anlaufstelle für die MINT-Community sammeln wir dieses Wissen,
              veröffentlichen es und kommen darüber in Austauschformaten mit
              Euch ins Gespräch. So schaffen wir Lernräume und Inspiration, um
              die eigenen Herangehensweisen zu stützen und Angebote gezielt zu
              gestalten.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-10">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 pb-6 md:pb-0 md:flex-1/3 lg:flex-1/4 md:px-6 lg:px-10">
            <img
              className="w-full h-auto"
              src="/images/Badge_02Rocket.svg"
              alt="MINTrakete"
            />
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10">
            <h2 className="text-5xl leading-tight lg:text-6xl lg:leading-none mb-2">
              MINT<span className="font-normal">rakete</span>
            </h2>

            <p className="lg:text-3xl mb-2 lg:mb-4 font-bold">
              Jetzt für aktuelle Ausschreibung bewerben
            </p>

            <p>
              Mit diesem Format möchten wir Bildungsangeboten eine Bühne bieten.
              Es können sich alle außerschulischen Lernorte bewerben, die ein
              gutes Umsetzungsbeispiel zum aktuellen Ausschreibungsthema
              präsentieren können. Lernt dabei andere und neue Projektansätze
              kennen und tauscht Euch in verschiedenen Community-Formaten
              darüber aus. Im Fokus steht das gemeinschaftliche von- und
              miteinander Lernen. Hier gibt’s mehr Infos zur Bewerbung und zum
              Auswahlprozess.
            </p>
            <p>
              <Link
                to="/news/mintrakete-didaktik-als-schluessel-jetzt-bewerben"
                className="btn-primary"
              >
                Teilnehmen
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="container my-10">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-10">
          <div className="flex-100 pb-6 md:pb-0 md:flex-1/2 md:px-6 lg:px-10">
            <h4 className="text-3xl leading-snug mb-2">MINT-DataLab</h4>

            <p className="mb-2 lg:mb-4 font-bold">
              Daten zur MINT-Bildungslandschaft und Ihrer Akteur:innen
            </p>

            <p>
              Eine eigene große Datensammlung gibt Einblicke in verschiedenste
              Themen der MINT-Bildung. Schul- und Hochschulstatistiken, Daten
              zum Arbeitsmarkt und zur Fachkräfteentwicklung sowie empirische
              Bildungsstudien können eingesehen und durch Filter- und
              Visualisierungsmöglichkeiten in individuellen 
              Auswertungen dargestellt werden. 
            </p>
          </div>

          <div className="flex-100 md:flex-1/2 md:px-6 lg:px-10">
            <h4 className="text-3xl leading-snug mb-2">
              MINT-Bildungsforschung{" "}
            </h4>

            <p className="mb-2 lg:mb-4 font-bold">
              Formate der Wissenschaftskommunikation
            </p>

            <p>
              Welche Forschungsinhalte haben besondere Relevanz für die
              MINT-Bildungspraxis? Welche
              wissenschaftlichen Untersuchungen können die eigene
              Arbeit konkret  unterstützen? In unterschiedlichen Formaten und
              Medien bereiten wir Forschungserkenntnisse praxisorientiert
              auf. Wir gehen beispielsweise Fragen zur Wirkung bestimmter
              Lehrmethoden nach oder wie man Kinder, Mädchen oder andere
              Zielgruppen am besten erreicht. Auf der Community-Plattform
              möchten wir darüber mit Euch diskutieren, Eure Erfahrungen in der
              Praxis hören und auch Impulse in die Forschung zurückgeben. 
            </p>
          </div>
        </div>
      </section>

      <section className="container my-10">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 lg:flex-2/3 md:px-6 lg:px-10">
            <h2 className="text-5xl leading-tight lg:text-6xl lg:leading-none mb-2">
              Innovation
            </h2>

            <p className="lg:text-3xl mb-2 lg:mb-4 font-bold">
              Denk- und Experimentierräume für die MINT-Community
            </p>

            <p className="lg:text-xl">
              Vom großen Megatrend bis zur lokalen Bildungsinnovation laden wir
              ein, neue Ansätze kennenzulernen und auszuprobieren. Dabei
              verfolgen wir eine interdisziplinäre Herangehensweise und schauen
              auch gerne mal über den Tellerrand. Neue Themen und Formate werden
              erlebbar und ko-kreativen Prozessen werden Bezüge zur eigenen
              Arbeit im MINT-Bildungsbereich hergestellt. 
            </p>
          </div>
        </div>
      </section>

      <section className="container my-10">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-10">
          <div className="flex-100 pb-6 md:pb-0 md:flex-1/2 md:px-6 lg:px-10">
            <h4 className="text-3xl leading-snug mb-2">Innovationspanel</h4>

            <p>
              Innovationspanels sind interaktive Austauschformate, die mehrmals
              im Jahr zu einem intensiven Austausch rund um innovative Themen
              aus Gesellschaft, Wissenschaft, Technik, Kunst und Bildung
              einladen. In einer Gruppe von etwa 20-30 MINT-Akteur:innen
              arbeiten wir gemeinsam mit Kreativtechniken an unseren Ideen.
              Dabei begleiten uns Expert:innen für das jeweilige Thema und
              erfahrene Moderator:innen, die für einen gelungen
              Ko-Kreationsprozess sorgen. 
            </p>
          </div>

          <div className="flex-100 md:flex-1/2 md:px-6 lg:px-10">
            <h4 className="text-3xl leading-snug mb-2">Thinkathon</h4>

            <p>
              Einmal jährlich treffen wir uns in großer Runde von bis zu 100
              Akteur:innen zum Thinkathon. In verschiedenen Formaten wird der
              Thinkathon zum Ideenlabor rund um die großen gesellschaftlichen
              Themen. In anderthalb Tagen entwickeln wir gemeinsam mit
              (internationalen) Expert:innen Ideen und Handlungsansätze zu
              Innovationsimpulsen für die MINT-Bildung. Forschungsinhalte und
              Techniktrends sind ebenso Teil der Thinkathons wie Ansätze aus
              Kunst und der Zivilgesellschaft.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-10">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 lg:flex-2/3 md:px-6 lg:px-10">
            <h2 className="text-5xl leading-tight lg:text-6xl lg:leading-none mb-2">
              Diversität
            </h2>

            <p className="lg:text-3xl mb-2 lg:mb-4 font-bold">
              Schwerpunkt: Mädchen und Frauen in MINT
            </p>

            <p className="lg:text-xl">
              Bringen wir es auf den Punkt: Mädchen und Frauen sind in
              MINT-Kursen, -Studiengängen und -Berufen nach wie vor deutlich
              unterrepräsentiert.{" "}
              <span className="font-bold">
                Nur 15,4% der 7,92 Millionen Beschäftigen in MINT-Berufen in
                Deutschland sind weiblich
              </span>{" "}
              (Bundesagentur für Arbeit, 2019). Als mögliche Ursachen werden
              neben individuellen Merkmalen wie niedriges Vertrauen in die
              eigenen MINT-Fähigkeiten vor allem Sozialisations- und
              Umwelteinflüsse durch Eltern, Lehrkräfte und Medien diskutiert.
            </p>
            <p className="lg:text-xl">
              Ein Schwerpunkt von MINTvernetzt liegt deshalb auf der
              Gendersensibilisierung. Mit unserer Arbeit wollen wir MINT-Aktiven
              und -Engagierten die besonderen Bedarfe von Mädchen und jungen
              Frauen bewusst machen. In gezielten Angeboten stellen wir Euch das
              nötige theoretische Wissen und die Kenntnisse zur Anwendung in der
              Praxis zur Verfügung, um Mädchen und junge Frauen langfristig zu
              erreichen und zu begeistern.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-10">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-10">
          <div className="flex-100 pb-6 md:pb-0 md:flex-1/2 md:px-6 lg:px-10">
            <h4 className="text-3xl leading-snug mb-2">
              Informations- und Transferangebote{" "}
            </h4>

            <p>
              Wir bereiten praxisrelevante Forschungsbefunde zu Genderaspekten
              und zur erfolgreichen Förderung von Chancengleichheit auf, geben
              Handlungsempfehlungen zum Abbau von Geschlechterstereotypen in der
              Bildungspraxis und liefern Beispiele guter Praxis als Anregung zur
              Umsetzung und Entwicklung von gendersensiblen MINT-Projekten.
            </p>
          </div>

          <div className="flex-100 md:flex-1/2 md:px-6 lg:px-10">
            <h4 className="text-3xl leading-snug mb-2">
              Vernetzung und Aktivierung{" "}
            </h4>

            <p>
              Gemeinsam besser werden ist Teil der MINTvernetzt-DNA und findet
              sich auch im Bereich Diversität wieder. Deshalb fördern wir die
              Vernetzung von MINT-Angeboten mit Genderbezug und diskutieren und
              lernen in analogen Veranstaltungsformaten voneinander. Auf unserer
              MINTvernetzt-Plattform findet ihr nachhaltige Diskussions- und
              Austauschräume, in denen wir auf Eure Bedarfe und Fragen eingehen
              können. Darüber hinaus führen wir den Nationalen Pakt für Frauen
              in MINT-Berufen weiter, in dem sich Partner:innen aus Wirtschaft,
              Wissenschaft, Medien und Politik gemeinsam für die Förderung von
              Frauen und Mädchen einsetzen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Topics;
