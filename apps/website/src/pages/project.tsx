import { UserCardContainer } from "@mint-vernetzt/react-components";
import { graphql, Link } from "gatsby";
import "../../../../libs/design-system/src/styles.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  getPaktDataByCategory,
  getUserCardsProps,
  PaktDataByCategory,
} from "../utils/dataTransformer";

export function Project({ data }: { data: GatsbyTypes.ProjectPageQuery }) {
  const userCardsProps = getUserCardsProps(data.usersData);

  const paktDataByCategory: PaktDataByCategory = getPaktDataByCategory(
    data.paktData.edges
  );
  const categories = Object.keys(paktDataByCategory);

  return (
    <Layout>
      <SEO
        title="Projekt"
        slug="/project"
        description=""
        image=""
        children=""
      />
      <section className="container my-16">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-6 lg:px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 53"
              aria-describedby="mint-title"
              role="img"
              className="w-full"
            >
              <title id="mint-title">Logo: mint vernetzt</title>
              <g fillRule="nonzero" fill="none">
                <path
                  d="M35.948 22.008c0-1.6-.273-2.966-.815-4.092-.543-1.127-1.259-2.042-2.149-2.745-.888-.702-1.918-1.208-3.086-1.52-1.2-.314-2.438-.47-3.679-.465-1.712 0-3.192.221-4.443.661-1.251.442-2.37.99-3.358 1.642a10.55 10.55 0 0 0-3.382-1.739 13.408 13.408 0 0 0-3.925-.564 18.129 18.129 0 0 0-5.013.685c-1.597.46-2.939 1.064-4.024 1.814-.66.46-1.17.948-1.531 1.47C.18 17.68 0 18.366 0 19.215V34.36c0 1.372.329 2.295.988 2.768.658.475 1.728.712 3.21.712.722 0 1.382-.041 1.974-.123.593-.081 1.054-.171 1.384-.27V19.998c.361-.195.822-.4 1.382-.613a5.275 5.275 0 0 1 1.876-.318c.955 0 1.761.254 2.419.76.658.508.988 1.3.988 2.377v12.155c0 1.372.32 2.295.963 2.768.643.475 1.703.712 3.185.712.723 0 1.382-.041 1.974-.123.593-.081 1.07-.171 1.433-.27V21.274a5.059 5.059 0 0 0-.1-.981c.461-.36.98-.653 1.557-.883a4.998 4.998 0 0 1 1.852-.343c1.02 0 1.826.254 2.419.76.592.508.888 1.3.888 2.377v12.155c0 1.372.321 2.295.964 2.768.642.475 1.703.712 3.185.712.722 0 1.382-.041 1.975-.123.482-.06.96-.15 1.432-.27V22.008Zm12.417-4.705c0-1.372-.321-2.304-.962-2.794-.642-.49-1.703-.735-3.185-.735-.724 0-1.382.049-1.975.148-.592.097-1.055.196-1.382.293v20.144c0 1.372.32 2.295.963 2.768.64.475 1.703.712 3.183.712.724 0 1.384-.041 1.976-.123.593-.081 1.054-.171 1.382-.27V17.303Zm20.25 5.147v11.909c0 1.372.321 2.295.964 2.768.64.475 1.703.712 3.185.712.722 0 1.382-.041 1.974-.123.593-.081 1.07-.171 1.432-.27V22.252c0-2.906-.98-5.145-2.939-6.714-1.958-1.568-4.731-2.352-8.32-2.352-2.008 0-3.842.228-5.505.685-1.662.46-3.02 1.064-4.074 1.814-.658.46-1.17.948-1.53 1.47-.363.524-.543 1.21-.543 2.059v15.145c0 1.372.328 2.295.988 2.768.657.475 1.727.712 3.209.712.723 0 1.382-.041 1.974-.123.593-.081 1.054-.171 1.384-.27V20.097c.558-.294 1.167-.54 1.826-.736a7.622 7.622 0 0 1 2.172-.294c1.152 0 2.075.279 2.767.833.69.556 1.036 1.406 1.036 2.55Zm19.83 7.253v-9.509h4.988c.757 0 1.373-.228 1.852-.686.476-.457.715-1.209.715-2.253 0-.556-.082-1.087-.246-1.594a9.213 9.213 0 0 0-.494-1.249h-6.815v-3.186c0-1.34-.321-2.262-.962-2.77-.642-.505-1.687-.76-3.136-.76a10.31 10.31 0 0 0-1.925.172c-.593.115-1.072.221-1.433.318v22.007c0 2.843.773 4.894 2.321 6.151 1.547 1.258 3.704 1.887 6.468 1.887 2.24 0 3.81-.367 4.716-1.104.906-.734 1.358-1.673 1.358-2.816 0-.557-.098-1.047-.297-1.471a4.476 4.476 0 0 0-.74-1.128 7.707 7.707 0 0 1-1.43.416c-.52.111-1.05.17-1.582.173-1.054 0-1.876-.204-2.468-.613-.593-.409-.89-1.07-.89-1.985Z"
                  fill="#154194"
                />
                <path
                  d="M40.893 7.773c.869.881 2.009 1.323 3.415 1.323 1.407 0 2.547-.442 3.417-1.323.87-.882 1.304-1.966 1.304-3.254 0-1.249-.434-2.314-1.304-3.197C46.855.44 45.715 0 44.308 0c-1.406 0-2.546.44-3.415 1.322-.871.883-1.306 1.948-1.306 3.197 0 1.288.435 2.372 1.306 3.254m-33.663 0c.869.881 2.008 1.323 3.415 1.323s2.546-.442 3.417-1.323c.87-.882 1.304-1.966 1.304-3.254 0-1.249-.435-2.314-1.304-3.197C13.192.44 12.052 0 10.645 0S8.1.44 7.23 1.322c-.871.883-1.306 1.948-1.306 3.197 0 1.288.435 2.372 1.306 3.254m14.39 0c.868.881 2.008 1.323 3.415 1.323 1.406 0 2.546-.442 3.417-1.323.869-.882 1.304-1.966 1.304-3.254 0-1.249-.435-2.314-1.304-3.197C27.58.44 26.442 0 25.035 0s-2.547.44-3.416 1.322c-.87.883-1.305 1.948-1.305 3.197 0 1.288.434 2.372 1.305 3.254"
                  fill="#9D689E"
                />
                <path
                  d="M8.718 43.947c.06-.176.1-.317.118-.422.018-.106.002-.188-.047-.245-.047-.059-.136-.095-.265-.11a5.369 5.369 0 0 0-.543-.023c-.239 0-.426.005-.564.016-.136.01-.24.03-.315.06a.3.3 0 0 0-.156.125.753.753 0 0 0-.075.208l-2.349 7.49h-.009l-2.392-7.528a1.188 1.188 0 0 0-.08-.19.254.254 0 0 0-.149-.112c-.099-.03-.2-.048-.304-.053a7.263 7.263 0 0 0-.548-.016c-.274 0-.487.007-.638.019-.152.014-.26.045-.323.099-.063.052-.09.131-.075.237.012.106.049.25.11.43l2.926 8.654a.8.8 0 0 0 .065.161c.023.043.056.08.098.111.043.03.096.055.16.074.063.021.145.035.246.046.102.01.226.017.369.019.144.003.32.003.522.003.253 0 .458-.003.616-.01.157-.009.28-.026.371-.054a.383.383 0 0 0 .198-.12.678.678 0 0 0 .099-.207l2.934-8.662Zm11.594 7.865a.909.909 0 0 0-.058-.238.303.303 0 0 0-.094-.131.21.21 0 0 0-.126-.042h-3.543v-2.754h2.972a.23.23 0 0 0 .126-.037.277.277 0 0 0 .094-.124.85.85 0 0 0 .058-.23c.012-.096.02-.217.02-.363 0-.14-.008-.26-.02-.358a.83.83 0 0 0-.058-.234.3.3 0 0 0-.094-.128.21.21 0 0 0-.126-.042h-2.972v-2.383h3.512a.19.19 0 0 0 .122-.042.32.32 0 0 0 .09-.133.862.862 0 0 0 .058-.238c.012-.097.02-.216.02-.358 0-.151-.008-.276-.02-.373a.958.958 0 0 0-.057-.242.292.292 0 0 0-.091-.132.208.208 0 0 0-.122-.038h-4.91a.63.63 0 0 0-.422.147c-.114.099-.171.258-.171.48v8.51c0 .223.057.382.17.479.118.1.269.152.423.147h4.941a.21.21 0 0 0 .126-.042.303.303 0 0 0 .094-.131.892.892 0 0 0 .058-.237c.012-.1.019-.22.019-.366 0-.147-.007-.268-.02-.367h.001Zm13.39.679a4.585 4.585 0 0 0-.153-.418l-.829-1.924a6.343 6.343 0 0 0-.295-.622 3.493 3.493 0 0 0-.324-.49 2.216 2.216 0 0 0-.365-.368 2.328 2.328 0 0 0-.413-.256c.303-.095.575-.22.813-.376.465-.293.81-.745.969-1.271.083-.27.125-.568.125-.894 0-.388-.058-.731-.175-1.03a2.191 2.191 0 0 0-.506-.777 2.56 2.56 0 0 0-.804-.533 4.214 4.214 0 0 0-1.068-.286 9.467 9.467 0 0 0-1.095-.054h-2.546a.63.63 0 0 0-.422.147c-.114.099-.171.258-.171.48v8.864c0 .052.015.097.045.137.031.04.084.073.16.097.076.026.179.047.308.06.129.016.29.023.483.023.197 0 .36-.007.485-.022.128-.014.23-.035.304-.06a.345.345 0 0 0 .164-.098.206.206 0 0 0 .049-.137v-3.719h.625c.213 0 .4.033.562.099.162.065.305.162.429.29.124.129.237.288.339.479a9.6 9.6 0 0 1 .31.656l.883 2.181c.02.061.046.111.076.155.03.043.081.077.155.105.073.028.174.047.3.057.37.02.74.02 1.11 0a1.42 1.42 0 0 0 .335-.054c.075-.024.124-.055.145-.093a.31.31 0 0 0 .03-.14.79.79 0 0 0-.039-.208h.001Zm-2.645-5.843c-.07.17-.18.322-.32.442a1.477 1.477 0 0 1-.532.285c-.213.07-.46.103-.745.103h-1.019v-2.769h.897c.229 0 .407.008.536.023.129.016.244.035.347.06.334.09.574.247.72.468.148.222.223.492.223.815a1.5 1.5 0 0 1-.107.573Zm16.63-3.162a.24.24 0 0 0-.038-.135.302.302 0 0 0-.132-.105.869.869 0 0 0-.27-.064 4.249 4.249 0 0 0-.434-.02c-.181 0-.331.007-.448.02a.991.991 0 0 0-.281.064.35.35 0 0 0-.152.105.221.221 0 0 0-.045.135v4.58c0 .732.014 1.464.045 2.195h-.007c-.093-.2-.185-.401-.281-.603-.098-.2-.195-.405-.297-.614-.103-.21-.208-.419-.316-.626l-.331-.637-1.915-3.57a4.068 4.068 0 0 0-.28-.494 1.25 1.25 0 0 0-.294-.314 1.017 1.017 0 0 0-.353-.16 2.042 2.042 0 0 0-.486-.05H40.3a.77.77 0 0 0-.513.178c-.14.117-.21.294-.21.531v8.774c0 .05.013.095.039.137.024.04.07.073.136.1.066.028.157.05.274.065.117.015.264.022.442.022.181 0 .331-.007.448-.022a1.09 1.09 0 0 0 .276-.065.308.308 0 0 0 .145-.1.239.239 0 0 0 .042-.137V47.57c0-.733-.02-1.465-.062-2.197h.016c.247.612.523 1.211.829 1.796l2.447 4.565c.128.251.241.455.342.615.101.157.206.284.316.376.103.09.226.156.358.192.129.036.28.054.459.054h.852c.096 0 .19-.014.284-.042a.642.642 0 0 0 .244-.132.661.661 0 0 0 .163-.226.752.752 0 0 0 .06-.309v-8.776Zm12.364 8.326a.956.956 0 0 0-.058-.238.318.318 0 0 0-.094-.131.21.21 0 0 0-.125-.042H56.23v-2.754h2.972a.23.23 0 0 0 .126-.037.277.277 0 0 0 .094-.124.83.83 0 0 0 .057-.23c.013-.096.02-.217.02-.363 0-.14-.007-.26-.02-.358a.81.81 0 0 0-.057-.234.3.3 0 0 0-.094-.128.21.21 0 0 0-.126-.042H56.23v-2.383h3.511a.192.192 0 0 0 .122-.042.32.32 0 0 0 .091-.133.852.852 0 0 0 .058-.238c.012-.097.019-.216.019-.358a2.9 2.9 0 0 0-.02-.373.946.946 0 0 0-.057-.242.292.292 0 0 0-.09-.132.211.211 0 0 0-.123-.038h-4.91a.629.629 0 0 0-.421.147c-.114.099-.172.258-.172.48v8.51c0 .223.058.382.172.479a.62.62 0 0 0 .422.147h4.94a.21.21 0 0 0 .126-.042.318.318 0 0 0 .094-.131.938.938 0 0 0 .058-.237c.012-.1.02-.22.02-.366a3.06 3.06 0 0 0-.02-.367h.001Zm12.395-8.189a1.042 1.042 0 0 0-.056-.252.315.315 0 0 0-.096-.137.21.21 0 0 0-.125-.042h-6.933a.203.203 0 0 0-.129.042.322.322 0 0 0-.09.137.959.959 0 0 0-.058.252 3.428 3.428 0 0 0 0 .757c.008.086.027.17.057.25a.36.36 0 0 0 .091.14c.035.03.079.045.13.045h2.462v7.868c0 .052.017.097.05.137.034.04.088.073.163.097.077.026.18.047.309.06.129.016.29.023.481.023.194 0 .355-.007.484-.022.129-.014.232-.035.307-.06a.344.344 0 0 0 .164-.098.206.206 0 0 0 .049-.137v-7.868h2.463c.046 0 .09-.016.125-.045a.35.35 0 0 0 .096-.14 1.05 1.05 0 0 0 .056-.25 3.45 3.45 0 0 0 0-.757Zm11.355 7.922c-.053-.121-.126-.182-.222-.182h-4.112l3.756-5.923a7.58 7.58 0 0 0 .211-.35c.056-.098.101-.193.134-.287.034-.092.056-.189.068-.286a2.83 2.83 0 0 0 .02-.352v-.368c0-.19-.05-.34-.149-.446-.1-.105-.253-.16-.46-.16h-5.435a.312.312 0 0 0-.155.039.275.275 0 0 0-.107.132.903.903 0 0 0-.061.25 3.314 3.314 0 0 0 0 .742c.012.1.033.182.061.243.022.053.06.099.107.132a.28.28 0 0 0 .155.041h3.785l-3.815 6.006a12.3 12.3 0 0 0-.216.362 1.48 1.48 0 0 0-.217.807v.33c0 .223.054.39.163.507.11.116.265.173.467.173h5.8a.22.22 0 0 0 .126-.038.27.27 0 0 0 .096-.132 1.04 1.04 0 0 0 .056-.244c.012-.1.019-.223.019-.37 0-.297-.025-.505-.075-.626Zm12.18-7.922a1.029 1.029 0 0 0-.056-.252.315.315 0 0 0-.096-.137.21.21 0 0 0-.126-.042h-6.932a.202.202 0 0 0-.13.042.324.324 0 0 0-.09.137.949.949 0 0 0-.057.252c-.013.106-.02.234-.02.385 0 .145.007.27.02.372.007.086.027.17.057.25a.38.38 0 0 0 .09.14c.036.03.08.045.13.045h2.463v7.868c0 .052.017.097.05.137.032.04.088.073.163.097.076.026.18.047.308.06.13.016.29.023.482.023.194 0 .355-.007.484-.022.129-.014.232-.035.307-.06a.344.344 0 0 0 .164-.098.206.206 0 0 0 .049-.137v-7.868h2.462c.046 0 .09-.016.126-.045a.35.35 0 0 0 .096-.14 1.05 1.05 0 0 0 .056-.25c.012-.102.019-.227.019-.372 0-.15-.007-.279-.02-.385h.001Z"
                  fill="#161700"
                />
              </g>
            </svg>
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10">
            <h1 className="text-5xl leading-tight lg:text-7xl lg:leading-none mb-2">
              Was ist
              <br />
              MINT<span className="font-normal">vernetzt</span>?
            </h1>

            <p className="lg:text-3xl text-neutral-600 mb-4 font-bold">
              Die Service- und Anlaufstelle für MINT-Akteur:innen in Deutschland
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              Die MINT-Vernetzungsstelle, kurz MINTvernetzt, ist das Dach für
              die außerschulische MINT-Bildung in Deutschland. MINTvernetzt wird
              vom Bundesministerium für Bildung und Forschung gefördert und von
              Mitarbeitenden der Körber-Stiftung, der matrix gGmbH, dem
              Nationalen MINTForum e.V., dem Stifterverband und der Universität
              Regensburg als Verbund gemeinsam umgesetzt.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-16">
        <div className="flex flex-wrap md:items-stretch md:-mx-6 md:-mb-12 lg:-mx-10">
          {[
            {
              icon: `none`,
              title: `Motivation`,
              text: `MINT-Kompetenzen sind Zukunftskompetenzen. Ohne die Stärkung der MINT-Bildung und Aktivierung neuer MINT-Talente wird Deutschland als Innovationsstandort an Bedeutung verlieren und wichtige Beiträge zur Lösungsfindung globaler Herausforderungen wie dem Klimawandel nicht leisten können. Kindern und Jugendlichen Kompetenzen in Mathematik, Informatik, Naturwissenschaften und Technik zu vermitteln und ihnen den Zugang zu MINT-Arbeitsplätzen zu ermöglichen, sind zentrale Schlüssel für mehr Gleichberechtigung und Teilhabe.`,
            },
            {
              icon: `none`,
              title: `Mission`,
              text: `Wir wollen Kindern und Jugendlichen eine gute MINT-Bildung ermöglichen, die schulisches und außerschulisches Lernen miteinander verzahnt und anwendungsorientiert sowie praxisnah gestaltet ist. Dafür stärken wir das Feld der außerschulischen MINT-Bildung, sorgen für Vernetzung, Sichtbarkeit und Professionalisierung der MINT-Akteur:innen und setzen uns für das Zusammenwirken von Schulen und außerschulischen Partner:innen ein.`,
            },
            {
              icon: `none`,
              title: `Ziel`,
              text: `Wir unterstützen Engagierte der MINT-Bildung durch Vernetzungsräume, Transferangebote und Innovationsimpulse darin, noch bessere Bildungsangebote für Kinder und Jugendliche zu machen und dabei breitere und diversere Zielgruppen anzusprechen. Hierzu zählen insbesondere Mädchen und junge Frauen.`,
            },
            {
              icon: `none`,
              title: `Vision`,
              text: `Mit MINTvernetzt schaffen wir ein lebendiges, diverses und nachhaltig wachsendes Netzwerk für die MINT-Bildungslandschaft. Wir stellen praxisorientierte Informationen bereit, bieten echten Transfer in die Bildungspraxis und geben den Raum für Diskurse und praktischen Austausch. MINT-Akteur:innen werden sichtbar, begreifen sich als Gemeinschaft und verzahnen ihre Angebote enger mit schulischen Aktivitäten. Sie nehmen neue Themenimpulse auf, gestalten innovative Angebote und erreichen diversere Zielgruppen. Dadurch fördern wir gesellschaftliche Teilhabe und Innovation.`,
            },
          ].map((teaser, index) => (
            <div
              key={`teaser-${index}`}
              className="flex-100 mb-6 lg:flex-1/2 md:px-6 lg:px-10"
            >
              <div className="icon w-8 h-8 mb-2 bg-red-600"></div>
              <h4 className="text-2xl text-blue-500 mb-1">{teaser.title}</h4>
              <p className="text-neutral-600">{teaser.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-16" id="contact-details">
        <header>
          <h2>Für jede Frage die richtige Adresse</h2>
          <p className="lead">
            Ihr habt eine Frage, sucht Informationen oder möchtet eine Idee mit
            uns teilen? Wir sind als Ansprechpartner:innen von MINTvernetzt
            gerne für Euch da.
          </p>
        </header>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: `Service-Hotline`,
              text: `Ihr habt allgemeine Fragen, Informationen oder Ideen? Dann richtet diese gerne an Ina Liebmann, unser Gesicht hinter der Service-Hotline.`,
              phone: `(+49) 040 882 15690`,
              mail: `info@mint-vernetzt.de`,
            },
            {
              title: `Community & MINTvernetzt-Plattform`,
              text: `Erste Ansprechperson für alle Belange rund um unsere digitale Community-Plattform ist Anna Schröter. Ihr erreicht sie auf diesem Wege:`,
              phone: `(+49) 0211 757 0762`,
              mail: `anna.schroeter@mint-vernetzt.de`,
            },
            {
              title: `Veranstaltungen`,
              text: `Julia Novik erweckt unsere Veranstaltungen zum Leben und freut sich über Eure Fragen und Tipps.`,
              phone: `(+49) 0160 944 06027 `,
              mail: `julia.novik@mint-vernetzt.de`,
            },
            {
              title: `Kommunikation`,
              text: `Den Blick nach außen hat bei uns Anna Kellner. Für Presse- und Öffentlichkeitsarbeit, Kooperationen und Kampagnen ist sie die richtige Adresse.`,
              phone: `(+49) 0175 841 1669`,
              mail: `anna.kellner@mint-vernetzt.de`,
            },
          ].map((contactbox, index) => (
            <div
              key={`contactbox-${index}`}
              className="flex flex-wrap content-between px-4 pt-4 pb-8 rounded-3xl shadow-lg"
            >
              <div className="mb-4">
                <h4 className="text-4xl text-blue-500 mb-2 leading-tight">
                  {contactbox.title}
                </h4>
                <p className="text-neutral-600 mb-3 md:mb-6">
                  {contactbox.text}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-800 font-semibold mb-4">
                  <a
                    href={`tel:${contactbox.phone}`}
                    className="flex items-center"
                  >
                    <span className="icon w-4 h-4 mr-2 bg-red-600"></span>
                    <span>{contactbox.phone}</span>
                  </a>
                </p>
                <p className="text-xs text-neutral-800 font-semibold">
                  <a
                    href={`mailto:${contactbox.mail}`}
                    className="flex items-center"
                  >
                    <span className="icon w-4 h-4 mr-2 bg-red-600"></span>
                    <span>{contactbox.mail}</span>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-16">
        <UserCardContainer
          headline="Das Team"
          body="Wir sind MINTvernetzt – ein junges, engagiertes Team mit unterschiedlichen Erfahrungen, Kompetenzen und Hintergründen. Hier findet Ihr alle Teammitglieder mit ihren Aufgaben und Kontaktdaten. Wir freuen uns auf den Austausch mit Euch."
          userCardsProps={userCardsProps}
        />
      </section>

      <section className="container my-16">
        <header className="text-left">
          <h2>Der Nationale Pakt für Frauen in MINT-Berufen</h2>
          <p className="lead">
            Seit 2008 haben sich über 370 Partnerinnen und Partner aus
            Wirtschaft, Wissenschaft, Medien und Politik im Nationalen Pakt für
            Frauen in MINT-Berufen zusammengeschlossen. Ihr erklärtes Ziel ist
            es, mehr Mädchen und Frauen für eine Karriere in MINT-Berufen zu
            begeistern. Der Pakt ist im Mai 2021 von MINTvernetzt übernommen
            worden und wird gemeinsam mit den Partner:innen weiterentwickelt.
            Dies ist eine Übersich, der aktuellen Pakt-Partner:innen, die seit
            der Unterschrift des Memorandums für das Thema eintreten:
          </p>
        </header>

        <ul className="pakt-list">
          {categories.map((category, index) => (
            <li
              key={category}
              id={`category${index}`}
              className="pakt-category relative overflow-hidden"
            >
              <input
                className="absolute opacity-0 -z-1"
                type="checkbox"
                id={`opener-${index}`}
              />
              <label
                className="block font-bold text-blue-500 md:text-3xl md:leading-snug py-3 flex item-center select-none"
                for={`opener-${index}`}
              >
                {category}
              </label>
              <ul className="pakt-member max-h-0 transition-all ease-in-out duration-300 px-6 md:px-8">
                {paktDataByCategory[category].map((member) => (
                  <li className="py-2">
                    <Link
                      to={`/pakt/${member.slug}`}
                      className="block md:text-2xl"
                    >
                      {member.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Project;

export const pageQuery = graphql`
  query ProjectPage {
    paktData: allMarkdownRemark(
      sort: { fields: [frontmatter___category, frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            name
            category
          }
        }
      }
    }

    usersData: allWpContact(
      sort: { fields: contactInformations___lastName, order: ASC }
    ) {
      nodes {
        contactInformations {
          firstName
          lastName
          position
          organization {
            ... on WpOrganization {
              id
              title
              organizationInformations {
                url
                logo {
                  altText
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 300) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
          phone
          photo {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  src
                }
              }
            }
            altText
          }
        }
      }
    }
  }
`;
