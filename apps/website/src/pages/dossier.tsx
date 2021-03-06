import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
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

export function Dossier({ data }: { data: GatsbyTypes.DossierPageQuery }) {
  return (
    <Layout>
      <SEO
        title="Wie können Mädchen für Programmieren begeistert werden?"
        slug="/dossier"
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
            zur Startseite
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
            <H4 className="font-semibold mb-6">
              Wo wir grade stehen: Mädchen und Frauen in MINT und Ursachen für
              geringe Teilhabe
            </H4>
            <p>
              Aktuelle Zahlen zeigen, dass – trotz einiger positiver Tendenzen
              in den letzten Jahren – Mädchen und Frauen in MINT nach wie vor
              deutlich unterrepräsentiert sind. Beispielsweise sind in
              Deutschland nur 15,4% der 7,92 Millionen Beschäftigten in
              MINT-Berufen weiblich (
              <a href="#ref_2" className="text-blue-400">
                Bundesagentur für Arbeit, 2019
              </a>
              ). Dabei zeigen sich zwischen den verschiedenen MINT-Disziplinen
              große Unterschiede: Während mathematische und
              naturwissenschaftliche Berufsfelder mit 37,5% einen relativ hohen
              Anteil an weiblichen Beschäftigten haben, liegen technische und
              informatische Berufe bei lediglich 14,1% und 16,3% (
              <a href="#ref_2" className="text-blue-400">
                Bundesagentur für Arbeit, 2019
              </a>
              ). Ähnlich stellen sich die Frauenanteile bei den
              Studienanfängerzahlen dar: Während im
              mathematisch-naturwissenschaftlichen Bereich der Frauenanteil bei
              über 50% liegt, ist der Frauenanteil in der Informatik bei
              lediglich 22,9% (
              <a href="#ref_1" className="text-blue-400">
                Anger, Kohlisch & Plünnecke, 2021
              </a>
              ).
            </p>
            <p>
              Als mögliche Ursachen werden in der Forschung neben individuellen
              Merkmalen wie niedrigeres Interesse oder niedrigeres Vertrauen in
              die eigenen MINT-Fähigkeiten vor allem Sozialisations- und
              Umwelteinflüsse durch Eltern, Lehrkräfte, Peers und Medien
              diskutiert. Ein wichtiger Aspekt der Umwelt, der das Interesse von
              Mädchen an den einzelnen MINT-Bereichen nachhaltig beeinflusst,
              ist die didaktische Gestaltung von MINT-Unterricht und
              MINT-Bildungsangeboten (
              <a href="#ref_4" className="text-blue-400">
                Kampshoff & Wiepcke, 2021
              </a>
              ). Deshalb fokussieren wir in diesem Beitrag am Beispiel der
              Informatik, welche didaktischen Maßnahmen besonders wirksam sind,
              um das Interesse von Mädchen an Informatik, Programmieren und
              Computer nachhaltig zu fördern. Hierfür bieten wir einen Überblick
              über die Forschungserkenntnisse einer systematischen
              Übersichtsarbeit an, in der die Ergebnisse von 11 Literaturreviews
              und somit von über 800 Einzelpublikationen in konkreten
              Handlungsempfehlungen zusammengefasst sind (
              <a href="#ref_3" className="text-blue-400">
                Happe, Buhnova, Koziolek & Wagner, 2021
              </a>
              ).
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Wirksame didaktische Maßnahmen um Mädchen für den
              Informatik-Bereich zu begeistern
            </H4>
            <p>
              In der Publikation „Effective measures to foster girls’ interest
              in secondary computer science education” von Lucia Happe, Barbora
              Buhnova, Anne Koziolek und Ingo Wagner sind die wichtigsten
              Strategien für gendersensible Informatik-Bildung herausgearbeitet.
              In dem Meta-Review ist das derzeit vorhandene Wissen über wirksame
              didaktische Maßnahmen zusammengefasst, um Mädchen für den
              Informatik-Bereich zu begeistern. Insgesamt identifizierten die
              Wissenschaftler:innen 22 konkrete Maßnahmen, die sie wiederum in
              sechs Gruppen gliederten. MINT-Akteur:innen und Pädagog:innen
              finden hier also eine umfassende und leicht zugängliche Übersicht
              der in der Forschungsliteratur empfohlenen Maßnahmen.
            </p>
            <p>
              Eines der wichtigsten Elemente, das zum Verbleib von Schülerinnen
              in der Informatik führt, ist das Interesse, da es den Lernprozess
              anregt und entscheidend für den Lernerfolg ist. Die im Rahmen des
              Meta-Reviews identifizierten didaktischen Empfehlungen sind
              deshalb nach sechs verschiedenen Phasen geordnet, in denen sich
              das Informatik-Interesse von Schülerinnen beständig
              weiterentwickelt. Die erste Gruppe von Maßnahmen zielt auf die
              Zeit vor dem ersten Kontakt mit dem Computer ab; falsche
              Stereotype sollen entkräftet werden, damit sich die Schülerinnen
              nicht von der
              <Popover.Root>
                <Popover.Trigger className="text-lilac-500 font-semibold">
                  &nbsp;Informatik&nbsp;
                </Popover.Trigger>
                <Popover.Content className="bg-white p-4 max-w-sm rounded-lg shadow-lg animate-slideUpAndFade">
                  <Popover.Close />
                  <Popover.Arrow className="text-white fill-current h-3 w-8" />
                  Das Wort Informatik setzt sich aus den Wörtern Information und
                  Automatik zusammen und bezeichnet die Wissenschaft von der
                  systematischen Verarbeitung von Informationen mit Hilfe von
                  Rechenanlagen. Die Ursprünge der Informatik liegen in der
                  Mathematik, der Elektro- und Nachrichtentechnik.
                </Popover.Content>
              </Popover.Root>
              abwenden, bevor sie sich tatsächlich mit dem Thema
              auseinandersetzen und es erleben können. Die zweite Gruppe von
              Maßnahmen weckt das Engagement der Schülerinnen für den
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
              aufrechtzuerhalten; auf diese Weise kann sich bei den Mädchen ein
              individuelles Interesse dafür entwickeln, eigene Begegnungen mit
              der Informatik zu suchen und ein tiefergehendes Vertrauen in die
              eigenen Informatik-Fähigkeiten aufzubauen. Die sechste Gruppe
              schließlich umfasst Maßnahmen, die darauf abzielen, dass die
              Schülerinnen ein langfristiges und nachhaltiges Interesse an
              Informatik, Computern und Programmieren entwickeln.
            </p>

            <H4 className="font-semibold mt-10 mb-6">
              Konkrete Handlungsempfehlungen gegliedert in 6 thematische Gruppen
            </H4>

            <p className="font-bold mb-2">
              Gruppe 1 – Strategien, die falsche Stereotype bekämpfen
            </p>
            <ul className="list-disc list-outside mb-4 pl-5">
              <li className="pl-3">
                Nicht-stereotype Rollenmodelle zur Verfügung stellen, um
                stereotype Vorstellungen zu revidieren
              </li>
              <li className="pl-3">
                Die Arbeit in der Informatik als hilfreich und
                gemeinschaftsorientiert darstellen, um stereotype Vorstellungen
                über die Arbeit von Informatiker:innen zu revidieren
              </li>
              <li className="pl-3">
                Gelegenheiten bieten, Computeraktivitäten als Teil einer Gruppe
                durchzuführen, um stereotype Vorstellungen über die Arbeitsweise
                von Informatiker:innen zu revidieren
              </li>
              <li className="pl-3">
                Mädchen mit erfolgreichen weiblichen Informatik-Rollenmodellen
                bekannt machen, um Mädchen gegen stereotype Vorstellungen zu
                immunisieren
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
                einbeziehen, beispielsweise durch Portraits von erfolgreichen
                Informatikerinnen im Klassenzimmer
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
                Visuelle Programmierumgebungen, um Einführungen ins
                Programmieren ansprechender zu gestalten
              </li>
              <li className="pl-3">
                Diskussionen und Reflektionen über die Aktivitäten einbeziehen,
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
                Schülerinnen mehr Aufmerksamkeit von den Lehrkräften zu
                ermöglichen
              </li>
              <li className="pl-3">
                Aufteilung von Klassen nach Erfahrung, um dem entgegenzuwirken,
                dass die Schüler:innen mit der meisten Erfahrung die meiste Zeit
                der Lehrkräfte in Anspruch nehmen
              </li>
              <li className="pl-3">
                Nicht-kompetitive Lernumgebungen, um den Aufbau einer
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
                als wertvolle Lerngelegenheiten einnehmen
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
                Zugehörigkeitsgefühl zum Informatikbereich aufrechtzuerhalten
                und zu erhöhen
              </li>
            </ul>

            <H4 className="font-semibold mt-10 mb-6">
              Welche didaktischen Maßnahmen man als Minimum umsetzen sollte
            </H4>
            <p className="mb-4">
              Im Rahmen des Meta-Reviews von Happe und Kolleg:innen (2021)
              wurden außerdem sechs Maßnahmen identifiziert, die als Minimum
              empfohlen werden, um einen für alle Geschlechter offenen
              Informatik-Unterricht zu gestalten. Denn die Literaturrecherche
              zeigte, dass Kurse und Bildungsangebote in der Forschungsliteratur
              als effektiv eingestuft wurden, wenn sie ähnliche Strategien und
              Maßnahmen verwendeten und mindestens die folgenden Aspekte
              beinhalteten:
            </p>
            <ol>
              <li>
                Forschungsbasierte und praxisnahe Lernaktivitäten einsetzen, um
                Schülerinnen für Informatik zu begeistern (empfohlen in 7 von 11
                ausgewerteten Literaturreviews)
              </li>
              <li>
                Möglichst früh so viele Facetten und interdisziplinäre
                Anwendungen der Informatik aufzeigen wie möglich, um
                Schülerinnen zu begeistern, die sich für diverse Fachrichtungen
                interessieren (empfohlen in 6 von 11 ausgewerteten Reviews)
              </li>
              <li>
                Aufteilung der Klassen im besten Fall nach Erfahrungslevel,
                zumindest aber nach Geschlecht oder Zugehörigkeit zur gleichen
                Interessengruppe (empfohlen in 5 von 11 ausgewerteten Reviews)
              </li>
              <li>
                Mehr Wert auf den Prozess des Denkens, Entwickelns und
                Problemlösens legen als auf das eigentliche Programmieren und
                Coden (empfohlen in 4 von 11 ausgewerteten Reviews)
              </li>
              <li>
                Visuelle Programmierumgebungen für Einführungen ins
                Programmieren verwenden (empfohlen in 4 von 11 ausgewerteten
                Reviews)
              </li>
              <li>
                Schülerinnen zu Veranstaltungen und Exkursionen mitnehmen und
                mit ihnen Geschichten und Rollenmodelle aus der Geschichte der
                Informatik teilen (empfohlen in 4 von 11 ausgewerteten Reviews)
              </li>
            </ol>

            <p>
              Die Übersichtsarbeit von Happe und Kolleg:innen (2021) weist auf
              einige spannende Herausforderungen hin, vor denen die
              Informatik-Bildung steht, um mehr Mädchen und junge Frauen für
              Computer und das Programmieren zu begeistern und auch langfristig
              im Informatik-Bereich zu halten. Mädchen wählen beispielsweise
              nach wie vor seltener Informatikkurse, weil sie das
              Unterrichtsfeld als eher abschreckend gegenüber ihrer Art, sich
              selbst auszudrücken, und ihrer Art des Leistungsverständnisses
              wahrnehmen. Damit verbundene stereotype Bilder und Botschaften,
              die beständig an die Mädchen herangetragen werden, verringern ihr
              <Popover.Root>
                <Popover.Trigger className="text-lilac-500 font-semibold">
                  &nbsp;Zugehörigkeitsgefühl&nbsp;
                </Popover.Trigger>
                <Popover.Content className="bg-white p-4 max-w-sm rounded-lg shadow-lg">
                  <Popover.Close />
                  <Popover.Arrow className="text-white fill-current h-3 w-8" />
                  Das Wohlbefinden, das Menschen in Gruppen oder Cliquen — mit
                  guten oder fragwürdigen Zielen — haben, ist das
                  Zugehörigkeitsgefühl. Fühlen wir uns zugehörig, dann glauben
                  wir an uns und unsere Möglichkeiten. Zweifeln wir aber an
                  unserem Wert, dann können wir uns nicht mehr zugehörig fühlen.
                </Popover.Content>
              </Popover.Root>
              zum Informatikbereich.
            </p>
            <p>
              Wirksame Interventionsstrategien bestehen darin, (1) den Mädchen
              ansprechende praktische Erfahrungen zu bieten, (2) die
              Informatik-Motivation zu erhöhen, indem der gesellschaftliche
              Impact der Arbeit von Informatiker:innen hervorgehoben wird, (3)
              den Mädchen Möglichkeiten zu bieten, mit ihren Stärken erfolgreich
              sein zu können, (4) den Mädchen geeignete weibliche Rollenmodelle
              zur Verfügung zu stellen, und (5) die Lehrkräfte und wichtige
              Schlüsselpersonen im Umfeld der Mädchen geeignet zu schulen, um
              nachhaltig ein größeres Interesse an Informatik und Technologie zu
              fördern. Um diese spannenden Herausforderungen zu meistern, ist es
              notwendig, dass Lehrkräfte und Pädagog:innen in der
              Informatik-Bildung durch geeignete berufliche
              Weiterbildungsprogramme unterstützt werden.
            </p>
          </div>

          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            {/* <Affix top={0} className="z-50"> */}
            <div className="p-4 pb-15 md:pb-5 py-6 rounded-lg bg-neutral-200 shadow-lg relative">
              <div className="study_details mb-6">
                <H3 className="font-semibold mb-2">Details</H3>
                <p className="font-bold text-sm mb-2 text-neutral-900">
                  Artikel vom 09.02.2022
                </p>
                <p className="font-bold text-sm mb-0 text-neutral-900">
                  Studie veröffentlicht: 16.11.2020
                </p>
                {/* 
                  <p className="flex">
                    <div className="mr-2 mb-2 px-3 py-0 mt-2 rounded-lg border-2 text-secondary-500 text-bold whitespace-nowrap bg-white border-secondary-500">
                      Gendersensibilität
                    </div>
                    <div className="mr-2 mb-2 px-3 py-0 mt-2 rounded-lg border-2 text-secondary-500 text-bold whitespace-nowrap bg-white border-secondary-500">
                      Didaktik
                    </div>
                  </p>
                */}
              </div>

              <hr className="mb-6" />

              <div className="study_summary mb-4">
                <H4 className="font-semibold mb-2">Zusammenfassung</H4>
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

              <div className="study_navigation hidden md:block mb-6">
                <H4 className="font-semibold mb-2">Absätze</H4>
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
                      Mehr Literatur & Autoren
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="mb-6" />

              <div className="study_download">
                <H4 className="font-semibold mb-4">Downloads</H4>
                <a
                  href="#"
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
              </div>
            </div>
            {/* </Affix> */}
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap md:-mx-2 lg:-mx-4 py-6">
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
            <H4 className="font-semibold mb-4">Literatur</H4>

            <ul>
              <li className="pb-4 font-semibold" id="ref_1">
                <a
                  href="https://www.iwkoeln.de/studien/christina-anger-enno-kohlisch-axel-pluennecke-mehr-frauen-fuer-mint-gewinnen-herausforderungen-von-dekarbonisierung-digitalisierung-und-demografie-meistern.html"
                  target="_blank"
                  className="text-primary underline"
                >
                  Anger, C., Kohlisch, E., & Plünnecke, A. (2021).
                  MINT-Herbstreport 2021: Mehr Frauen für MINT gewinnen –
                  Herausforderungen von Dekarbonisierung, Digitalisierung und
                  Demografie meistern. Köln: Institut der deutschen Wirtschaft.
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_2">
                <a
                  href="https://statistik.arbeitsagentur.de/DE/Statischer-Content/Statistiken/Themen-im-Fokus/Berufe/Generische-Publikationen/Broschuere-MINT.pdf"
                  target="_blank"
                  className="text-primary underline"
                >
                  Bundesagentur für Arbeit. (2019). Blickpunkt Arbeitsmarkt –
                  MINT-Berufe. Nürnberg: Bundesagentur für Arbeit.
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_3">
                <a
                  href="https://link.springer.com/article/10.1007/s10639-020-10379-x"
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
              <li className="pb-4 font-semibold" id="ref_4">
                Kampshoff, M., & Wiepcke, C. (2021). Gender und MINT-Didaktik.
                In M. Kampshoff & C. Wiepcke (Hrsg.), Vielfalt in Schule und
                Unterricht – Konzepte und Debatten im Zeichen der Heterogenität
                (S. 64–73). Stuttgart: Kohlhammer.
              </li>
            </ul>
          </div>
          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            <H4 className="font-semibold mb-4">Original Studie</H4>
            <p className="text-xl mb-2 text-neutral-900">
              Effective measures to foster girls’ interest in secondary computer
              science education
            </p>

            <a
              href="#"
              className="flex py-4 px-6 rounded-lg bg-neutral-400 text-neutral-700 hover:shadow-lg relative items-center mb-6"
            >
              <div>
                <p className="text-xs m-0 text-semibold">PDF - Link</p>
                <H6 className="m-0 text-neutral-700">Original studie</H6>
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

            <p className="font-semibold text-lg mb-2">Autoren</p>
            <ul>
              <li className="pb-2">
                <p className="text-lg mb-0 leading-6">Lucia Happe</p>
                <p className="text-xs mb-0 leading-4">
                  <a href="" className="text-xs">
                    https://link.springer.com/article/10.1007/s10639-020-10379-x#auth-Lucia-Happe
                  </a>
                </p>
              </li>
              <li className="pb-2">
                <p className="text-lg mb-0 leading-6">Barbora Buhnova</p>
                <p className="text-xs mb-0 leading-4">author link</p>
              </li>
              <li className="pb-2">
                <p className="text-lg mb-0 leading-6">Anne Koziolek</p>
                <p className="text-xs mb-0 leading-4">Uni Regensburg</p>
              </li>
              <li className="pb-2">
                <p className="text-lg mb-0 leading-6">Ingo Wagner</p>
                <p className="text-xs mb-0 leading-4">Uni Regensburg</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Dossier;

export const pageQuery = graphql`
  query DossierPage {
    HeroImage: file(relativePath: { eq: "dossier_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1488, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
