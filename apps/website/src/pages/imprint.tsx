import Layout from "../components/layout";
import SEO from "../components/seo";

/* eslint-disable-next-line */
export interface ImprintProps {}

export function Imprint(props: ImprintProps) {
  return (
    <Layout>
      <SEO
        title="Impressum"
        image=""
        description="Impressum"
        slug="/imprint/"
        children={""}
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <h1>Impressum</h1>
        <p>
          Körber-Stiftung
          <br />
          Kehrwieder 12
          <br />
          20457 Hamburg
        </p>
        <p>
          Telefon:{" "}
          <a href="tel:040 88215690" className="text-lilac-500 hover:underline">
            040 88215690
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:info@mint-vernetzt.de"
            className="text-lilac-500 hover:underline"
          >
            info@mint-vernetzt.de
          </a>
          <br />
          <a
            href="https://www.koerber-stiftung.de"
            className="text-lilac-500 hover:underline"
            target="_blank"
            noreferrer
          >
            www.koerber-stiftung.de
          </a>
        </p>
        <p>
          Die Körber-Stiftung ist eine rechtsfähige Stiftung bürgerlichen
          Rechts.
          <br />
          Vertretungsberechtigte Personen: Dr. Lothar Dittmer (Vorsitzender des
          Vorstands), Tatjana König (Mitglied des Vorstands), Dr. Thomas Paulsen
          (Mitglied des Vorstands). Umsatzsteuer-Identifikationsnummer gemäß §
          27 a Umsatzsteuergesetz: DE 118 717 618
        </p>
        <h2>Haftungshinweis</h2>
        <p>
          Alle Inhalte dienen ausschließlich der allgemeinen Information. Für
          die Korrektheit und Vollständigkeit der Inhalte wird keine Garantie
          übernommen. Jegliche Verwendung der angebotenen Informationen
          geschieht auf eigenes Risiko der:des Nutzerin:s. Die Körber-Stiftung
          übernimmt hierfür – vorbehaltlich zwingender gesetzlicher Vorschriften
          – keine Haftung, dies gilt insbesondere für Schadensersatz. Alle
          Texte, Bilder und Grafiken sowie das Layout dieser Website unterliegen
          dem Urheberrecht. Die unerlaubte Verwendung einzelner Inhalte oder
          kompletter Seiten wird sowohl straf- als auch zivilrechtlich verfolgt.
        </p>
        <p>Folgende Bilder werden verwendet:</p>
        <ul className="m-4">
          <li className="list-disc">
            MINTvernetzt-Fotos: Claudia Höhne:{" "}
            <a
              href="https://www.claudiahoehne.com"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              claudiahoehne.com
            </a>
          </li>
          <li className="list-disc">
            iStock.com/golero: :{" "}
            <a
              href="https://www.istockphoto.com/de/foto/blick-auf-gesch%C3%A4ftsleute-rund-um-den-schreibtisch-gm1138843871-304196636"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Blick Auf Geschäftsleute Rund Um Den Schreibtisch Stockfoto und
              mehr Bilder von Lernen - iStock (istockphoto.com)
            </a>
          </li>
          <li className="list-disc">
            iStock.com/structuresxx:{" "}
            <a
              href="https://www.istockphoto.com/de/foto/fotografenarbeitsplatz-gm639695818-115447955"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Fotografenarbeitsplatz Stockfoto und mehr Bilder von Fotograf -
              iStock (istockphoto.com)
            </a>
          </li>
          <li className="list-disc">
            iStock.com/AndreyPopov:{" "}
            <a
              href="https://www.istockphoto.com/de/foto/collage-von-einem-l%C3%A4chelnden-menschen-gm855021852-141009663?clarity=false"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Collage Von Einem Lächelnden Menschen Stockfoto und mehr Bilder
              von Menschliches Gesicht - iStock (istockphoto.com)
            </a>
          </li>
          <li className="list-disc">
            iStock.com/LumiNola:{" "}
            <a
              href="https://www.istockphoto.com/de/foto/nichts-verbindet-uns-wie-ein-gemeinsames-ziel-gm1282344506-380104873?clarity=false"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Nichts Verbindet Uns Wie Ein Gemeinsames Ziel Stockfoto und mehr
              Bilder von Demonstration - iStock (istockphoto.com)
            </a>
          </li>
          <li className="list-disc">
            iStock.com/mirsad sarajlic:{" "}
            <a
              href="https://www.istockphoto.com/de/foto/rakete-an-wand-und-hand-mit-pinsel-gm1190862983-337741044?clarity=false"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Rakete An Wand Und Hand Mit Pinsel Stockfoto und mehr Bilder von
              Abheben - Aktivität - iStock (istockphoto.com)
            </a>
          </li>
          <li className="list-disc">
            iStock.com/Prostock-Studio:{" "}
            <a
              href="https://www.istockphoto.com/de/foto/internationales-team-von-mitarbeitern-die-bunte-r%C3%A4tsel-zusammensetzen-gm1201193769-344377835?clarity=false"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Internationales Team Von Mitarbeitern Die Bunte Rätsel
              Zusammensetzen Stockfoto und mehr Bilder von Zusammenarbeit -
              iStock (istockphoto.com)
            </a>
          </li>
          <li className="list-disc">
            iStock.com/cagkansayin:{" "}
            <a
              href="https://www.istockphoto.com/de/foto/aktionswort-auf-holzbl%C3%B6cken-geschrieben-mit-einer-menschlichen-hand-dr%C3%BCcken-den-knopf-gm1264143420-370173089?clarity=false"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Aktionswort Auf Holzblöcken Geschrieben Mit Einer Menschlichen
              Hand Drücken Den Knopf Aktionswort Auf Holzblöcken Geschrieben Mit
              Einer Menschlichen Hand Drücken Den Knopf Konzept Des Handelns
              Stockfoto und mehr Bilder von Bewegung - iStock (istockphoto.com)
            </a>
          </li>
          <li className="list-disc">
            iStock.com/VioletaStoimenova:{" "}
            <a
              href="https://www.istockphoto.com/de/foto/bleiben-sie-in-verbindung-gm1267194556-371722796?clarity=false"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Bleiben Sie In Verbindung Stockfoto und mehr Bilder von Soziales
              Netzwerk - iStock (istockphoto.com)
            </a>
          </li>
          <li className="list-disc">
            iStock.com/simarik:{" "}
            <a
              href="https://www.istockphoto.com/de/foto/game-changer-gm1285792890-382497484?clarity=false"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Game Changer Stockfoto und mehr Bilder von Newsletter - iStock
              (istockphoto.com)
            </a>
          </li>
          <li className="list-disc">
            iStock.com/Stadtratte:{" "}
            <a
              href="https://www.istockphoto.com/de/foto/ein-computer-und-w%C3%BCrfeln-mit-den-fragen-wer-war-wie-wo-gm1007247568-271793117?clarity=false"
              className="text-lilac-500 hover:underline"
              target="_blank"
              noreferrer
            >
              Ein Computer Und Würfeln Mit Den Fragen Wer War Wie Wo Stockfoto
              und mehr Bilder von Informationssymbol - iStock (istockphoto.com)
            </a>
          </li>
        </ul>
        <h2>Zuständige Aufsichtsbehörde</h2>
        <p>
          Freie und Hansestadt Hamburg, Behörde für Justiz und Gleichstellung,
          Drehbahn 36, 20354 Hamburg
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE
          118 717 618
          <br />
          Inhaltlich Verantwortlicher gemäß § 6 MDStV: Dr. Lothar Dittmer
        </p>
        <h2>Design und Gestaltungskonzept</h2>
        <p>matrix gGmbH</p>
        <h2>Programmierung und Hosting</h2>
        <p>
          matrix gGmbH
          <br />
          Am Falder 4<br />
          40589 Düsseldorf
          <br />
          <a
            href="https://matrix-gmbh.de/matrix-ggmbh/"
            className="text-lilac-500 hover:underline"
            target="_blank"
            noreferrer
          >
            matrix-ggmbh.de
          </a>
        </p>
      </section>
    </Layout>
  );
}

export default Imprint;
