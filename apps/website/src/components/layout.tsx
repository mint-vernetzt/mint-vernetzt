import Header from "./header";
import Footer from "./footer";
import "../../../../libs/design-system/src/styles.css";
import { Link } from "gatsby";

function Layout({ children, ...otherProps }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-600">
      {otherProps.location?.pathname === "/" ? (
        <div className="bg-lilac-300">
          <div className="container">
            <p>
              <Link
                to="/event/mint-aktionswoche"
                className="block text-center px-4 py-2 text-white font-bold"
              >
                Bis zum 26.11. findet die MINT-Aktionswoche statt. Hier findet
                Ihr einen Überblick über alle Sessions und wie Ihr teilnehmen
                könnt.
              </Link>
            </p>
          </div>
        </div>
      ) : null}
      <header>
        <Header />
      </header>

      <main className="flex-1 pb-20">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
