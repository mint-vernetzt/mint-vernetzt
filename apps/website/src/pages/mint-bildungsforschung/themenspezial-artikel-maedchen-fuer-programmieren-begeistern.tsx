import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Img from "gatsby-image";
import * as Popover from "@radix-ui/react-popover";

import {
  H2,
  H3,
  H4,
  H6,
  Icon,
  IconType,
} from "@mint-vernetzt/react-components";

export function DossierMeta({
  data,
}: {
  data: GatsbyTypes.DossierMetaPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="Wie können Mädchen für Programmieren begeistert werden?"
        slug="/mint-bildungsforschung/themenspezial-artikel-maedchen-fuer-programmieren-begeistern"
        description=""
        image=""
        children=""
      />
      <section className="container py-4 md:py-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-6 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/mint-bildungsforschung"
        >
          <span className="flex items-center">
            <span className="mr-2">
              <Icon type={IconType.ChevronLeft} />
            </span>
            zur Übersicht
          </span>
        </Link>

        <Img
          fluid={data.HeroImage.childImageSharp.fluid}
          className="w-full h-auto rounded-2xl shadow-md"
        />
      </section>

      <section className="container my-4 md:my-8 lg:my-8">
        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 pb-8 md:pb-0 md:flex-7/12 md:px-2 lg:px-4">
            <H2 className="font-semibold mb-4">
              Wie können Mädchen für Programmieren begeistert werden?
            </H2>
            <p className="font-bold text-xl mb-12 text-neutral-900">
              Ein Überblick zu konkreten Handlungsempfehlungen aus der Forschung
              im Bereich Informatik und Didaktik.
            </p>
            <p className="font-bold" id="study_background">
              Aktuelle Zahlen zeigen, dass – trotz einiger positiver Tendenzen
              in den letzten Jahren – Mädchen und Frauen in MINT nach wie vor
              deutlich unterrepräsentiert sind. Als mögliche Ursachen werden in
              der Forschung neben individuellen Merkmalen wie niedrigerem
              Interesse oder niedrigerem Vertrauen in die eigenen
              MINT-Fähigkeiten vor allem Sozialisations- und Umwelteinflüsse
              durch Eltern, Lehrkräfte, Peers und Medien diskutiert. Ein
              wichtiger Aspekt der Umwelt, der das Interesse von Mädchen an den
              einzelnen MINT-Bereichen nachhaltig beeinflusst, ist die
              didaktische Gestaltung von MINT-Unterricht und
              MINT-Bildungsangeboten (
              <a href="#ref_3" className="text-blue-400">
                Kampshoff & Wiepcke, 2020
              </a>
              ). Deshalb zeigen wir in diesem Beitrag am Beispiel der
              Informatik, welche didaktischen Maßnahmen besonders wirksam sind,
              um das Interesse von Mädchen an Informatik, Programmieren und
              Computer nachhaltig zu fördern. Der Artikel beruht auf der
              systematischen Übersichtsarbeit der Wissenschaftler:innen{" "}
              <a href="#ref_2" className="text-blue-400">
                Lucia Happe, Barbora Buhnova, Anne Koziolek und Ingo Wagner
              </a>
              , die 2021 erschienen ist.
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="study_results">
              Wirksame didaktische Maßnahmen um Mädchen für den
              Informatik-Bereich zu begeistern
            </H4>
            <p>
              In der Publikation „Effective measures to foster girls’ interest
              in secondary computer science education“ (
              <a href="#ref_2" className="text-blue-400">
                Happe, Buhnova, Koziolek & Wagner, 2021
              </a>
              ) sind die wichtigsten Strategien für gendersensible
              Informatik-Bildung herausgearbeitet. Dabei wurden in einer
              Übersichtsarbeit die Ergebnisse von 11 Literaturreviews und somit
              von über 800 Einzelpublikationen in konkreten
              Handlungsempfehlungen zusammengefasst. In dem Meta-Review ist
              demnach das derzeit vorhandene Wissen über wirksame didaktische
              Maßnahmen zusammengefasst, um Mädchen für den Informatik-Bereich
              zu begeistern. Insgesamt identifizierten die Wissenschaftler:innen
              22 konkrete Maßnahmen, die sie wiederum in sechs Gruppen
              gliederten. Ihr findet hier also eine umfassende und leicht
              zugängliche Übersicht über die in der Forschungsliteratur
              empfohlenen Maßnahmen.
            </p>
            <p>
              Eines der wichtigsten Elemente, die zum Verbleib von Schülerinnen
              in der Informatik führen, ist das Interesse. Es regt den
              Lernprozess an und ist entscheidend für den Lernerfolg. Die im
              Rahmen des Meta-Reviews identifizierten didaktischen Empfehlungen
              sind deshalb nach sechs verschiedenen Phasen geordnet, in denen
              sich das Informatik-Interesse von Schülerinnen beständig
              weiterentwickelt. Die erste Gruppe von Maßnahmen zielt auf die
              Zeit vor dem ersten Kontakt mit dem Computer ab; falsche
              Stereotype sollen entkräftet werden, damit sich die Schülerinnen
              nicht von der Informatik abwenden, bevor sie sich tatsächlich mit
              dem Thema auseinandersetzen und es erleben können. Die zweite
              Gruppe von Maßnahmen weckt das Engagement der Schülerinnen für den
              Informatik-Bereich, während die dritte Gruppe Strategien umfasst,
              die einen geeigneten ersten Kontakt mit der Welt der Informatik
              ermöglichen und die es den Schülerinnen erlauben, erste positive
              Erfahrungen mit praktischen Übungen zu sammeln.
            </p>
            <p>
              Die vierte Gruppe an didaktischen Maßnahmen zielt darauf ab, die
              Lernumgebungen für Mädchen so zu gestalten, dass möglichst wenig
              negative Erfahrungen entstehen, die dazu führen könnten, dass sich
              die Schülerinnen von der Informatik abwenden und ihr Interesse
              erlischt. Die fünfte Gruppe umfasst Strategien, die die Häufigkeit
              wiederholter positiver Erfahrungen mit Informatik und Computern
              erhöhen sollen, um das Interesse der Schülerinnen
              aufrechtzuerhalten. Auf diese Weise kann sich bei den Mädchen ein
              individuelles Interesse dafür entwickeln, eigene Begegnungen mit
              der Informatik zu suchen und ein tiefergehendes Vertrauen in die
              eigenen Informatik-Fähigkeiten aufzubauen. Die sechste Gruppe
              schließlich umfasst Maßnahmen, die darauf abzielen, dass die
              Schülerinnen ein langfristiges und nachhaltiges Interesse an
              Informatik, Computern und Programmieren entwickeln.
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="study_recommendations">
              Konkrete Handlungsempfehlungen gegliedert in 6 thematische Gruppen
            </H4>

            <p className="font-bold mb-2">
              Gruppe 1 – Strategien, die falsche Stereotype bekämpfen
            </p>
            <ul className="list-disc list-outside mb-4 pl-5">
              <li className="pl-3">
                Nichtstereotype Rollenmodelle zur Verfügung stellen,
                beispielsweise durch Begegnungen mit Informatiker:innen, die
                nicht dem Klischee des/der exzentrischen Einzelgänger:in
                entsprechen, sondern die sich auch mit Freund:innen treffen und
                Hobbys wie Sport und Musik haben (vgl. auch{" "}
                <a href="#ref_2" className="text-blue-400">
                  Boston & Cimpian, 2018
                </a>
                )
              </li>
              <li className="pl-3">
                Die Arbeit in der Informatik als gemeinschaftsorientiert
                darstellen (dient nicht nur der eigenen Neugier und Anerkennung,
                sondern hilft vor allem anderen; vgl. auch{" "}
                <a href="#ref_2" className="text-blue-400">
                  Boston & Cimpian, 2018
                </a>
                ), um stereotype Vorstellungen darüber zu revidieren, was
                Informatiker:innen tun
              </li>
              <li className="pl-3">
                Gelegenheiten bieten, Computeraktivitäten als Teil einer Gruppe
                durchzuführen, um stereotype Vorstellungen darüber zu ändern,
                wie Informatiker:innen arbeiten
              </li>
              <li className="pl-3">
                Mädchen mit erfolgreichen weiblichen Informatik-Rollenmodellen
                bekannt machen, um sie gegen stereotype Vorstellungen zu
                immunisieren; wichtig ist dabei, dass die Rollenmodelle den
                Mädchen möglichst ähnlich sind, zum Beispiel hinsichtlich
                Hintergrund und Lebensgeschichte – dadurch können sich die
                Mädchen besser mit den Frauen identifizieren und es wird umso
                greifbarer, in der Informatik erfolgreich sein zu können (vgl.
                auch{" "}
                <a href="#ref_2" className="text-blue-400">
                  Boston & Cimpian, 2018
                </a>
                )
              </li>
            </ul>

            <p className="font-bold mb-2">
              Gruppe 2 – Strategien, die ein erstes Interesse entfachen
            </p>
            <ul className="list-disc list-outside mb-4 pl-5">
              <li className="pl-3">
                {" "}
                Den gesellschaftlichen Einfluss und den interdisziplinären
                Charakter der Informatik hervorheben, um ein Gefühl der
                Zugehörigkeit hervorzurufen und um die Relevanz des Themas und
                die Erfolgschancen in dem Bereich aufzuzeigen
              </li>
              <li className="pl-3">
                Sichtbare Hinweise auf den Erfolg von Frauen in der Informatik
                einbeziehen, beispielsweise durch Porträts erfolgreicher
                Informatikerinnen
              </li>
            </ul>

            <p className="font-bold mb-2">
              Gruppe 3 – Strategien, die einen geeigneten ersten Kontakt
              ermöglichen
            </p>
            <ul className="list-disc list-outside mb-4 pl-5">
              <li className="pl-3">
                Für Mädchen entwickelte digitale Spiel- und kreative
                Kunstaktivitäten, um einen geeigneten Einstieg in die Welt der
                Computer zu ermöglichen
              </li>
              <li className="pl-3">
                Mit kontextbezogenen Offline-Aktivitäten beginnen, um
                Einstiegshürden möglichst niedrig zu halten
              </li>
              <li className="pl-3">
                Programmierumgebungen mit einer visuellen
                Entwicklungsoberfläche, um Einführungen ins Programmieren
                ansprechender zu gestalten
              </li>
              <li className="pl-3">
                Diskussionen und Reflexionen über die Aktivitäten einbeziehen,
                um das Lernen zu unterstützen
              </li>
            </ul>

            <p className="font-bold mb-2">
              Gruppe 4 – Strategien, die die Lernumgebung für Mädchen weniger
              abschreckend machen
            </p>
            <ul className="list-disc list-outside mb-4 pl-5">
              <li className="pl-3">
                Bildungsangebote und Klassen nur für Mädchen, um den
                Schülerinnen mehr Aufmerksamkeit von den Lehrkräften und
                Anbieter:innen zu ermöglichen
              </li>
              <li className="pl-3">
                Aufteilung von Bildungsangeboten und Klassen nach Erfahrung, um
                dem entgegenzuwirken, dass die Schüler:innen mit der meisten
                Erfahrung die meiste Zeit der Lehrkräfte und Anbieter:innen in
                Anspruch nehmen
              </li>
              <li className="pl-3">
                Nichtkompetitive Lernumgebungen, um den Aufbau einer
                Klassenhierarchie zu vermeiden, die für Mädchen weniger geeignet
                ist
              </li>
              <li className="pl-3">
                Kollaborative Aufgabenstellungen, um das Spektrum der erworbenen
                Fähigkeiten und Erfahrungen zu erweitern
              </li>
            </ul>

            <p className="font-bold mb-2">
              Gruppe 5 – Strategien, die das Vertrauen in die eigenen
              Fähigkeiten stärken
            </p>
            <ul className="list-disc list-outside mb-4 pl-5">
              <li className="pl-3">
                Niedrigschwellige Lerngelegenheiten für Mädchen anbieten, um
                Erfolgserlebnisse zu haben und Selbstvertrauen aufzubauen
              </li>
              <li className="pl-3">
                Ein wachstumsorientiertes Mindset einführen, also die
                Überzeugung, dass Fähigkeiten durch Anstrengung, Einsatz und
                Mühe sowie durch Strategien und Mentoring verbessert werden
                können
              </li>
              <li className="pl-3">
                Eine positive und konstruktive Haltung gegenüber Misserfolgen
                als wertvollen Lerngelegenheiten einnehmen
              </li>
            </ul>

            <p className="font-bold mb-2">
              Gruppe 6 – Strategien, die das langfristige Interesse
              aufrechterhalten
            </p>
            <ul className="list-disc list-outside mb-4 pl-5">
              <li className="pl-3">
                Eine geeignete Ausbildung von Informatik-Lehrkräften, um ihnen
                Tools und Ansätze zur besseren Einbindung von Mädchen zu
                vermitteln und um dadurch die Fähigkeiten der Lehrkräfte zu
                erhöhen, den Informatik-Ausstieg von Mädchen zu verhindern
              </li>
              <li className="pl-3">
                Den Mädchen interessante praktische Erfahrungsmöglichkeiten
                anbieten, die auf Situationen aus der realen Welt basieren, da
                Mädchen insbesondere durch forschendes Lernen und durch die
                Möglichkeit motiviert werden, einen nachhaltigen Impact zu
                erzielen
              </li>
              <li className="pl-3">
                Die gesellschaftlichen Auswirkungen und den interdisziplinären
                Charakter der Informatik besonders hervorheben, um das Gefühl
                der Zugehörigkeit zu steigern und um die Relevanz des Themas und
                die Erfolgschancen in dem Bereich stärker zu betonen
              </li>
              <li className="pl-3">
                Das Durchführen von langfristigen, eigenen Projekten
                ermöglichen, um mehr Erfahrungen mit der eigenen
                Selbstwirksamkeit zu sammeln
              </li>
              <li className="pl-3">
                Schülerinnen ermöglichen, dass sie Teil einer Gruppe und Teil
                der Informatik-Community sind, um langfristig das
                Zugehörigkeitsgefühl zum Informatik-Bereich aufrechtzuerhalten
                und zu erhöhen
              </li>
            </ul>

            <H4 className="font-semibold mt-10 mb-6" id="study_final">
              Welche didaktischen Maßnahmen man als Minimum umsetzen sollte
            </H4>
            <p className="mb-4">
              Im Rahmen des Meta-Reviews von Happe und Kolleg:innen (2021)
              wurden außerdem sechs Maßnahmen identifiziert, die als Minimum
              empfohlen werden, um Informatik-Kurse zu gestalten, die alle
              Geschlechter gleichermaßen ansprechen. Denn die Literaturrecherche
              zeigte, dass Kurse und Bildungsangebote in der Forschungsliteratur
              als effektiv eingestuft wurden, wenn sie ähnliche Strategien und
              Maßnahmen verwendeten und mindestens die folgenden Aspekte
              beinhalteten.
            </p>
            <ol>
              <li>
                Forschungsbasierte und praxisnahe Lernaktivitäten einsetzen, um
                Schülerinnen für Informatik zu begeistern
              </li>
              <li>
                Frühzeitig so viele Facetten und interdisziplinäre Anwendungen
                der Informatik aufzeigen wie möglich, um Schülerinnen zu
                begeistern, die sich für diverse Fachrichtungen interessieren
              </li>
              <li>
                Aufteilung der Klassen im besten Fall nach Erfahrungslevel,
                zumindest aber nach Geschlecht oder Zugehörigkeit zur gleichen
                Interessengruppe
              </li>
              <li>
                Mehr Wert auf den Prozess des Denkens, Entwickelns und
                Problemlösens legen als auf das eigentliche Programmieren und
                Coden
              </li>
              <li>
                Visuelle Programmierumgebungen für Einführungen ins
                Programmieren verwenden
              </li>
              <li>
                Schülerinnen zu Veranstaltungen und Exkursionen mitnehmen und
                mit ihnen Geschichten und Rollenmodelle aus der Geschichte der
                Informatik teilen
              </li>
            </ol>

            <p>
              Die Übersichtsarbeit von Happe und Kolleg:innen (2021) weist auf
              einige spannende Herausforderungen hin, vor denen die
              Informatik-Bildung steht, um mehr Mädchen und junge Frauen für
              Computer und das Programmieren zu begeistern und auch langfristig
              im Informatik-Bereich zu halten. Mädchen wählen beispielsweise
              nach wie vor seltener Informatik-Kurse, weil sie das
              Unterrichtsfeld als eher abschreckend gegenüber ihrer Art, sich
              selbst auszudrücken, und ihrer Art des Leistungsverständnisses
              wahrnehmen. Damit verbundene stereotype Bilder und Botschaften,
              die beständig an die Mädchen herangetragen werden, verringern ihr
              Gefühl der Zugehörigkeit zum Informatik-Bereich.
            </p>
            <p className="mb-0">
              Wirksame Interventionsstrategien bestehen darin:
            </p>
            <ol>
              <li>den Mädchen ansprechende praktische Erfahrungen zu bieten</li>
              <li>
                die Informatik-Motivation zu erhöhen, indem der
                gesellschaftliche Impact der Arbeit von Informatiker:innen
                hervorgehoben wird
              </li>
              <li>
                den Mädchen Möglichkeiten zu bieten, mit ihren Stärken
                erfolgreich zu sein
              </li>
              <li>
                den Mädchen geeignete weibliche Rollenmodelle zur Verfügung zu
                stellen
              </li>
              <li>
                die Lehrkräfte und wichtige Schlüsselpersonen im Umfeld der
                Mädchen geeignet zu schulen, um nachhaltig ein größeres
                Interesse an Informatik und Technologie zu fördern
              </li>
            </ol>
            <p>
              Um diese spannenden Herausforderungen zu meistern, ist es
              notwendig, dass Lehrkräfte und Pädagog:innen in der
              Informatik-Bildung durch geeignete berufliche
              Weiterbildungsprogramme unterstützt werden.
            </p>
          </div>

          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="p-4 pb-15 md:pb-5 py-6 rounded-lg bg-neutral-200 shadow-lg relative">
              <div className="study_details mb-6">
                <H3 className="font-semibold mb-2">Details</H3>
                <p className="font-bold text-sm mb-2 text-neutral-900">
                  Veröffentlicht am 16.03.2022
                </p>
                <p className="font-bold text-sm mb-0 text-neutral-900">
                  Originalartikel vom 16.11.2020
                </p>
              </div>

              <hr className="mb-6" />

              <div className="study_summary mb-4">
                <H4 className="font-semibold mb-4">Zusammenfassung</H4>
                <p>
                  Die Unterrepräsentation von Mädchen in MINT wird in der
                  Forschung in Zusammenhang mit Sozialisations- und
                  Umwelteinflüsse durch Eltern, Lehrkräfte, Peers und Medien
                  diskutiert. Wie kann dem mit didaktischen Maßnahmen entgegen
                  gewirkt werden um so mehr Mädchen für den Informatik-Bereich
                  zu begeistern? Eine Übersicht von konkreten
                  Handlungsempfehlungen und Strategien für gendersensible
                  Informatik-Bildung.
                </p>
              </div>

              <div className="study_navigation hidden md:block mb-6 mt-6">
                <H4 className="font-semibold mb-4">Absätze</H4>
                <ul className="">
                  <li className="mb-4">
                    <a
                      href="#study_background"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Wo wir grade stehen: Mädchen und Frauen in MINT und
                      Ursachen für geringe Teilhabe
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#study_results"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Wirksame didaktische Maßnahmen um Mädchen für den
                      Informatik-Bereich zu begeistern
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#study_recommendations"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Konkrete Handlungsempfehlungen gegliedert in 6 thematische
                      Gruppen
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#study_final"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Welche didaktischen Maßnahmen man als Minimum umsetzen
                      sollte
                    </a>
                  </li>
                  <li>
                    <a
                      href="#study_sources"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Literatur, Originalartikel, Autor:innen
                    </a>
                  </li>
                </ul>
              </div>

              {/* <hr className="mb-6" />

              <div className="study_download">
                <H4 className="font-semibold mb-4">Downloads</H4>
                <a
                  href="https://link.springer.com/content/pdf/10.1007/s10639-020-10379-x.pdf"
                  className="flex py-4 px-6 rounded-lg bg-neutral-400 text-neutral-700 hover:shadow-lg relative items-center"
                >
                  <div className="">
                    <p className="text-xs m-0 leading-4 text-semibold">
                      PDF - Download
                    </p>
                    <H6 className="m-0 text-neutral-700">
                      Mädchen für Programmieren begeistern?
                    </H6>
                  </div>
                  <div className="ml-auto">
                    <svg
                      width="24px"
                      height="auto"
                      viewBox="0 0 12 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor" fill-rule="nonzero">
                        <path d="M1.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 1 0 0 1h2A1.5 1.5 0 0 0 12 9.5v-8A1.5 1.5 0 0 0 10.5 0h-9A1.5 1.5 0 0 0 0 1.5v8A1.5 1.5 0 0 0 1.5 11h2a.5.5 0 1 0 0-1h-2Z" />
                        <path d="M5.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708L6.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 1 0-.708.708l3 3Z" />
                      </g>
                    </svg>
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4 my-10">
          <div className="flex-100 pb-8 md:pb-0 md:flex-7/12 md:px-2 lg:px-4">
            <div className="flex justify-center">
              <div className="w-4 h-1 bg-neutral-400 rounded mx-2"></div>
              <div className="w-4 h-1 bg-neutral-400 rounded mx-2"></div>
              <div className="w-4 h-1 bg-neutral-400 rounded mx-2"></div>
            </div>
          </div>
          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4"></div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4">
          <div className="flex-100 pb-8 md:pb-0 md:flex-7/12 md:px-2 lg:px-4">
            <H4 className="font-semibold mb-4" id="study_sources">
              Literatur
            </H4>

            <ul>
              <li className="pb-4 font-semibold" id="ref_1">
                <a
                  href="https://doi.org/10.1177/1076217518786955"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary underline"
                >
                  Boston, J. S., & Cimpian, A. (2018). How do we encourage
                  gifted girls to pursue and succeed in science and engineering?
                  Gifted Child Today, 41(4), 196–207.
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_2">
                <a
                  href="https://link.springer.com/article/10.1007/s10639-020-10379-x"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary underline"
                >
                  Happe, L., Buhnova, B., Koziolek, A., & Wagner, I. (2021).
                  Effective measures to foster girls’ interest in secondary
                  computer science education. Education and Information
                  Technologies, 26(3), 2811–2829.
                  https://doi.org/10.1007/s10639-020-10379-x
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_3">
                Kampshoff, M., & Wiepcke, C. (2021). Gender und MINT-Didaktik.
                In M. Kampshoff & C. Wiepcke (Hrsg.), Vielfalt in Schule und
                Unterricht – Konzepte und Debatten im Zeichen der Heterogenität
                (S. 64–73). Stuttgart: Kohlhammer.
              </li>
            </ul>
          </div>
          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            <H4 className="font-semibold mb-4">Originalartikel</H4>
            <p className="text-xl mb-2 text-neutral-900">
              Effective measures to foster girls’ interest in secondary computer
              science education
            </p>

            <a
              href="https://link.springer.com/content/pdf/10.1007/s10639-020-10379-x.pdf"
              rel="noreferrer"
              target="_blank"
              className="flex py-4 px-6 rounded-lg bg-neutral-400 text-neutral-700 hover:shadow-lg relative items-center mb-6"
            >
              <div>
                <p className="text-xs m-0 text-semibold">PDF - Link</p>
                <H6 className="m-0 text-neutral-700">Originalartikel</H6>
              </div>
              <div className="ml-auto">
                <svg
                  width="24px"
                  height="auto"
                  viewBox="0 0 12 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="currentColor" fillRule="nonzero">
                    <path d="M1.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 1 0 0 1h2A1.5 1.5 0 0 0 12 9.5v-8A1.5 1.5 0 0 0 10.5 0h-9A1.5 1.5 0 0 0 0 1.5v8A1.5 1.5 0 0 0 1.5 11h2a.5.5 0 1 0 0-1h-2Z" />
                    <path d="M5.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708L6.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 1 0-.708.708l3 3Z" />
                  </g>
                </svg>
              </div>
            </a>

            <p className="font-semibold text-lg mb-2">Autor:innen</p>
            <ul>
              <li className="pb-2">
                <p className="text-lg mb-0 leading-6">Lucia Happe</p>
                {/* <p className="text-xs mb-0 leading-4">
                  <a href="" className="text-xs">
                    https://link.springer.com/article/10.1007/s10639-020-10379-x#auth-Lucia-Happe
                  </a>
                </p> */}
              </li>
              <li className="pb-2">
                <p className="text-lg mb-0 leading-6">Barbora Buhnova</p>
                {/* <p className="text-xs mb-0 leading-4">author link</p> */}
              </li>
              <li className="pb-2">
                <p className="text-lg mb-0 leading-6">Anne Koziolek</p>
                {/* <p className="text-xs mb-0 leading-4">Uni Regensburg</p> */}
              </li>
              <li className="pb-2">
                <p className="text-lg mb-0 leading-6">Ingo Wagner</p>
                {/* <p className="text-xs mb-0 leading-4">Uni Regensburg</p> */}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DossierMeta;

export const pageQuery = graphql`
  query DossierMetaPage {
    HeroImage: file(
      relativePath: {
        eq: "themenspezial-artikel-maedchen-fuer-programmieren-begeistern.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1488, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
