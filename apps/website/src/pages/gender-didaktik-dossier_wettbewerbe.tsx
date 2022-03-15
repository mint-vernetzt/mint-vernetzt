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

export function DossierWettbewerbe({
  data,
}: {
  data: GatsbyTypes.DossierWettbewerbePageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="Naturwissenschaftliche Wettbewerbe sind für Mädchen weniger attraktiv als für Jungen – über Stereotype und Strukturen"
        slug="/gender-didaktik-dossier_wettbewerbe"
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
            <H2 className="font-semibold mb-12">
              Naturwissenschaftliche Wettbewerbe sind für Mädchen weniger
              attraktiv als für Jungen – über Stereotype und Strukturen
            </H2>
            <p className="font-bold" id="study_background">
              Geschlechterstereotype sind nach wie vor weit verbreitet in
              unserer Gesellschaft und beeinflussen die Entscheidungen von
              Mädchen für oder gegen den MINT-Bereich. Wissenschaftler:innen
              haben in diesem Zusammenhang untersucht, wie sich Stereotype auf
              die Teilnahme von Mädchen an naturwissenschaftlichen Wettbewerben
              auswirken. Die Ergebnisse zeigen, dass unbewusste stereotype
              Vorstellungen damit zusammenhängen, dass weniger Mädchen an
              naturwissenschaftlichen Wettbewerben wie der Chemie-Olympiade
              teilnehmen. Wir haben uns eingelesen und geben Euch einen Einblick
              in die Hintergründe und die Implikationen des aktuellen
              Forschungsartikels „First steps toward gender equity in the
              chemistry Olympiad: Understanding the role of implicit gender
              science stereotypes“ (Steegh, Höffler, Höft & Parchmann, 2020).
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="chapter_1">
              Wissenschaftliche Wettbewerbe als Sprungbrett für die
              MINT-Karriere
            </H4>
            <p>
              Mathematik- und Wissenschaftsolympiaden sind für die Teilnehmenden
              oft ein Sprungbrett für die Zulassung zu Spitzenuniversitäten und
              für künftige Karrieren im MINT-Bereich. Beispielsweise zeigt eine
              Studie, dass über 50 % von 345 ehemaligen Wettbewerbsteilnehmenden
              in den USA später einen Doktortitel gemacht haben und viele danach
              auch weiterhin in der Wissenschaft tätig waren (Campbell &
              Walberg, 2011). Viele Wissenschaftsolympiaden werden deshalb auch
              mit staatlichen Mitteln unterstützt, weil sie ein wichtiges Mittel
              der Begabtenförderung sind. Allerdings besteht dadurch auch die
              Gefahr, dass Ungleichheiten zwischen den Geschlechtern verstärkt
              werden.
            </p>
            <H4 className="font-semibold mt-10 mb-6" id="chapter_2">
              Wenig Mädchen bei naturwissenschaftlichen Wettbewerben
            </H4>
            <p>
              Denn Mädchen und junge Frauen nehmen bislang selten an
              wissenschaftlichen Wettbewerben teil und sind darin auch weniger
              erfolgreich. Beispielsweise gelangen deutsche Schülerinnen, die an
              den nationalen Auswahlwettbewerben teilnehmen, nur selten in ein
              internationales Olympiade-Team. Im Jahr 2017 etwa waren 48 % der
              1.282 Schüler:innen der ersten Auswahlrunde weiblich – nach jeder
              Auswahlrunde nahm der Anteil an Teilnehmerinnen jedoch stark ab,
              was dazu führte, dass im Team für die Internationale
              Chemie-Olympiade in Thailand schließlich nur männliche Teilnehmer
              vertreten waren. Insgesamt bestanden die deutschen Teams für die
              Chemie-Olympiade von 2008 bis 2016 aus nur 3 % Mädchen. Die Zahlen
              weisen ziemlich eindeutig darauf hin, dass es für Mädchen
              schwieriger ist, an internationalen Wissenschaftsolympiaden
              teilzunehmen.
            </p>
            <p>
              Darüber hinaus schneiden Schülerinnen, die sich für ein
              internationales Team qualifiziert haben, schlechter ab als ihre
              männlichen Mitschüler: Die Medaillenverteilung der amerikanischen,
              deutschen, finnischen und lettischen Chemie-Olympiade-Teams von
              2008 bis 2017 zeigt beispielsweise, dass 14 % der männlichen
              Teilnehmer eine Goldmedaille gewannen, während keine der
              weiblichen Teilnehmenden eine Goldmedaille errang; 26 % der Jungen
              dieser Teams erhielten eine Silbermedaille und 34 % eine
              Bronzemedaille, verglichen mit 1 % beziehungsweise 4 % der
              Mädchen.
            </p>
            <p>
              Allerdings zeigt ein Blick in das MINT-Nachwuchsbarometer 2021
              eine positive Entwicklung: Im Jahr 2020 nahmen in Deutschland mit
              53 % erstmals mehr Mädchen als Jungen an naturwissenschaftlichen
              Olympiaden teil – männliche Teilnehmer gewinnen die Wettbewerbe
              jedoch nach wie vor häufiger (Köller & Steffensky, 2021).
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="chapter_3">
              Woran könnte das liegen?
            </H4>

            <p>
              Leider gibt es darauf keine einfache Antwort. Zwei Aspekte bieten
              jedoch wichtige Hinweise und verdeutlichen den Einfluss
              gesellschaftlich geprägter Geschlechterstereotype auf die
              Entwicklung von Jungen und Mädchen. Beispielsweise ist weiterhin
              die Ansicht weit verbreitet, dass die Naturwissenschaften eher
              eine Männerdomäne seien. Zudem gilt auch kompetitives Verhalten
              als eher männlicher Interaktionsstil. An der Schnittstelle von
              Naturwissenschaften und Wettbewerben liegen nun
              Wissenschaftsolympiaden. Viele Mädchen befinden sich in einer
              benachteiligten Position, wenn sie an einer Wissenschaftsolympiade
              teilnehmen, da sie gewissermaßen in einem typisch männlichen
              Umfeld einer typisch männlichen Aktivität nachgehen. Es überrascht
              also nicht, dass Schülerinnen in diesen Wettbewerben
              unterrepräsentiert sind und unterdurchschnittliche Leistungen
              erbringen. Dies ist insofern problematisch, als es das
              übergeordnete Ziel von Wissenschaftsolympiaden ist, interessierte
              und talentierte Schüler:innen zu identifizieren und zu fördern.
              Darüber hinaus kann die Teilnahme an wissenschaftlichen
              Wettbewerben eng verknüpft mit der späteren Entscheidung für ein
              MINT-Fach sein.
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="chapter_4">
              Wenig attraktive Strukturen für Mädchen
            </H4>

            <p>
              Verschiedene Studien beschreiben die Struktur der Olympiaden
              selbst als besonders attraktiv für Jungen und weniger attraktiv
              für Mädchen, zum Beispiel die Art und den Inhalt der
              Prüfungsaufgaben, den allgemeinen Kommunikationsstil und die
              Programme für soziale Aktivitäten, die den Wettbewerb begleiten.
              Auch Interviews mit amerikanischen, deutschen und koreanischen
              Olympiateilnehmenden zeigten, dass Mädchen eher kooperative
              Aufgabenstellungen bevorzugen, was dazu führt, dass viele Mädchen
              es unattraktiv finden, als Einzelkämpferin an einer
              wissenschaftlichen Olympiade teilzunehmen.
            </p>
            <p>
              Darüber hinaus merkten Teilnehmende an, dass die geringe
              Beteiligung von Mädchen und jungen Frauen möglicherweise mit der
              geschlechtsspezifischen Auswahl der Schülerinnen und Schüler durch
              die Lehrkräfte zusammenhängt, mit mangelnder Unterstützung durch
              Eltern, Lehrkräfte und Gleichaltrige sowie mit einem Mangel an
              weiblichen Vorbildern in der Wissenschaft. Dies zeigt, dass für
              die Teilnahme an Wissenschaftsolympiaden auch ein positives und
              unterstützendes soziales Umfeld von Bedeutung ist.
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="chapter_5">
              Beeinflussen unbewusste stereotype Vorstellungen die Leistungen
              und die Teilnahme von Mädchen und Jungen an wissenschaftlichen
              Wettbewerben?
            </H4>
            <p>
              Im Fokus der Studie standen unter anderem folgende
              Forschungsfragen: Welchen Einfluss haben unbewusste stereotype
              Vorstellungen auf die Leistung von Teilnehmenden an der
              Chemie-Olympiade? Welche Rolle spielen Stereotype für die
              Bereitschaft der Teilnehmenden, an der nächsten Runde des
              Wettbewerbs oder im nächsten Jahr wieder am Wettbewerb
              teilzunehmen? Es wurde erwartet, dass sich die unbewussten
              Stereotype der Teilnehmenden negativ auf Leistungen und Teilnahme
              der Mädchen auswirken würden, während sie sich nicht negativ auf
              Leistungen und Teilnahme der Jungen auswirken würden.
            </p>
            <p>
              Für die Studie wurden Teilnehmende der ersten Auswahlrunde an der
              deutschen Chemie-Olympiade gebeten, einen Online-Fragebogen
              auszufüllen. Der Fragebogen wurde von 445 Teilnehmenden
              ausgefüllt. Das Durchschnittsalter war 16,5 Jahre und 51 % waren
              weiblich. Der Fragebogen enthielt – zur Erfassung der unbewussten
              Stereotype – einen
              <Popover.Root>
                <Popover.Trigger className="text-lilac-500 font-semibold">
                  &nbsp;Impliziten Assoziationstest (IAT)&nbsp;
                </Popover.Trigger>
                <Popover.Content className="bg-white p-4 max-w-sm rounded-lg shadow-lg">
                  <Popover.Close />
                  <Popover.Arrow className="text-white fill-current h-3 w-8" />
                  Der Implizite Assoziationstest (IAT) dient dazu, unbewusste
                  stereotype Vorstellungen zu erfassen. Die Teilnehmenden werden
                  gebeten, verschiedene Begriffe möglichst schnell einer von
                  zwei Kategorien (z.B. männlich/Naturwissenschaft vs.
                  weiblich/Geisteswissenschaft oder weiblich/Naturwissenschaft
                  vs. männlich/Geisteswissenschaft) zuzuordnen. Dabei wird die
                  Reaktionszeit der Teilnehmenden gemessen.
                </Popover.Content>
              </Popover.Root>
              sowie weitere Fragen, unter anderem zu Interesse und Selbstkonzept
              der Teilnehmenden. Wie erwartet konnte gezeigt werden, dass
              unbewusste stereotype Vorstellungen die Teilnahme von Mädchen und
              jungen Frauen an der Chemie-Olympiade negativ vorhersagten. Die
              Teilnahme der männlichen Teilnehmer hingegen war nicht von
              stereotypen Vorstellungen betroffen. Die Leistungen bei der
              Chemie-Olympiade standen nicht in Zusammenhang mit unbewussten
              stereotypen Vorstellungen der Teilnehmenden.
            </p>

            <H4 className="font-semibold mt-10 mb-6" id="chapter_6">
              Eigene Strukturen kritisch reflektieren
            </H4>
            <p>
              Die Ergebnisse der Studie zeigen deutlich den Zusammenhang von
              unbewussten stereotypen Vorstellungen mit der geringeren Teilnahme
              von Mädchen und jungen Frauen an naturwissenschaftlichen
              Wettbewerben wie der Chemie-Olympiade. Entsprechende
              Organisationen sollten daher nach Steegh et al. (2020) ihre
              Strukturen kritisch reflektieren, um aufzudecken, welche
              Strukturen dazu beitragen, dass sich weniger Mädchen angesprochen
              fühlen. Ziel sollte es sein, ein Programm zu schaffen, das für
              männliche und weibliche Teilnehmende gleichermaßen attraktiv ist.
              Auf diese Weise kann ein Wettbewerbsumfeld geschaffen werden, das
              das Potential hat, das Selbstkonzept und das Interesse aller
              Teilnehmer:innen zu steigern.
            </p>
            <p>
              Was hat diese Studie mit Eurer und unserer Arbeit zu tun? Sie
              liefert wertvolles Wissen über den Einfluss von
              Geschlechterstereotypen. Dies kann dazu genutzt werden, um
              spezifische Programme und Werkzeuge zu entwickeln, die darauf
              abzielen, schädliche Geschlechterrollen abzubauen und
              wissenschaftliche Wettbewerbe in ein einladendes, inklusives und
              unterstützendes Umfeld zu verwandeln, in dem Mädchen in Zukunft
              problemlos wissenschaftliche Aktivitäten genießen können.
            </p>
          </div>

          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="p-4 pb-15 md:pb-5 py-6 rounded-lg bg-neutral-200 shadow-lg relative">
              <div className="study_details mb-6">
                <H3 className="font-semibold mb-2">Details</H3>
                <p className="font-bold text-sm mb-2 text-neutral-900">
                  Artikel vom 09.02.2022
                </p>
                <p className="font-bold text-sm mb-0 text-neutral-900">
                  Originalartikel veröffentlicht: 14.06.2020
                </p>
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
                      href="#chapter_1"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Wissenschaftliche Wettbewerbe als Sprungbrett für die
                      MINT-Karriere
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#chapter_2"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Wenig Mädchen bei naturwissenschaftlichen Wettbewerben
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#chapter_3"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Woran könnte das liegen?
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#chapter_4"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Wenig attraktive Strukturen für Mädchen
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#chapter_5"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Beeinflussen unbewusste stereotype Vorstellungen die
                      Leistungen und die Teilnahme von Mädchen und Jungen an
                      wissenschaftlichen Wettbewerben?
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#chapter_6"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Eigene Strukturen kritisch reflektieren
                    </a>
                  </li>
                  <li>
                    <a
                      href="#study_sources"
                      className="block font-semibold text-lg text-primary-400 hover:text-primary"
                    >
                      Mehr Literatur
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="mb-6" />

              <div className="study_download">
                <H4 className="font-semibold mb-4">Downloads</H4>
                <a
                  href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/tea.21645"
                  target="_blank"
                  className="flex py-4 px-6 rounded-lg bg-neutral-400 text-neutral-700 hover:shadow-lg relative items-center"
                >
                  <div className="">
                    <p className="text-xs m-0 leading-4 text-semibold">
                      PDF - Download
                    </p>
                    <H6 className="m-0 text-neutral-700">
                      First steps toward gender equity in thechemistry Olympiad:
                      Understanding the role ofimplicit gender-science
                      stereotypes
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
            <H4 className="font-semibold mb-4" id="study_sources">
              Weiterführender Link zu einem Interview mit Anneke Steegh, der
              Erstautorin der Studie:
            </H4>
            <p className="pb-4 font-semibold">
              <a
                href="https://science-surfers.com/sdg5-geschlechtergleichheit/"
                target="_blank"
                className="text-primary underline"
              >
                Mädchen und MINT – na klar! Nur in vielen Köpfen ist das noch
                nicht angekommen
              </a>
            </p>

            <H4 className="font-semibold mb-4">Literatur</H4>

            <ul>
              <li className="pb-4 font-semibold" id="ref_1">
                <a
                  href="https://doi.org/10.1080/02783193.2011.530202"
                  target="_blank"
                  className="text-primary underline"
                >
                  Campbell, J. R., & Walberg, H. J. (2011). Olympiad studies:
                  Competitions provide alternatives to developing talents that
                  serve national interests. Roeper Review, 33(1), 8–17.
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_2">
                <a
                  href="https://www.koerber-stiftung.de/fileadmin/user_upload/koerber-stiftung/redaktion/mint_nachwuchsbarometer/pdf/2021/MINT-Nachwuchsbarometer_2021.pdf"
                  target="_blank"
                  className="text-primary underline"
                >
                  Köller, O., & Steffensky, M. (2021). MINT Nachwuchsbarometer
                  2021: Eine Studie von acatech, IPN und Körber-Stiftung.
                  Abgerufen am 22. Februar 2022
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_3">
                <a
                  href="https://doi.org/10.1002/tea.21645"
                  target="_blank"
                  className="text-primary underline"
                >
                  Steegh, A., Höffler, T., Höft, L., & Parchmann, I. (2020).
                  First steps toward gender equity in the chemistry Olympiad:
                  Understanding the role of implicit gender‐science stereotypes.
                  Journal of Research in Science Teaching, 58(1), 40–68.
                </a>
              </li>
              <li className="pb-4 font-semibold" id="ref_4">
                <a
                  href="https://doi.org/10.1103/PhysRevPhysEducRes.14.020113"
                  target="_blank"
                  className="text-primary underline"
                >
                  Wulff, P., Hazari, Z., Petersen, S., & Neumann, K. (2018).
                  Engaging young women in physics: An intervention to support
                  young women’s physics identity development. Physical Review
                  Physics Education Research, 14(2), 1– 18
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-100 md:flex-5/12 pb-8 md:pb-0 md:px-2 lg:px-4">
            <H4 className="font-semibold mb-4">Original Artikel</H4>
            <p className="text-xl mb-2 text-neutral-900">
              First steps toward gender equity in the chemistry Olympiad:
              Understanding the role of implicit gender-science stereotypes
            </p>

            <a
              href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/tea.21645"
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
                  <g fill="currentColor" fill-rule="nonzero">
                    <path d="M1.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 1 0 0 1h2A1.5 1.5 0 0 0 12 9.5v-8A1.5 1.5 0 0 0 10.5 0h-9A1.5 1.5 0 0 0 0 1.5v8A1.5 1.5 0 0 0 1.5 11h2a.5.5 0 1 0 0-1h-2Z" />
                    <path d="M5.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708L6.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 1 0-.708.708l3 3Z" />
                  </g>
                </svg>
              </div>
            </a>
            {/*
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
            </ul> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DossierWettbewerbe;

export const pageQuery = graphql`
  query DossierWettbewerbePage {
    HeroImage: file(relativePath: { eq: "dossier_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1488, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
