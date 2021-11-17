import Header from "./header";
import Footer from "./footer";
import "../../../../libs/design-system/src/styles.css";
import { Link } from "gatsby";

function Layout({ children, ...otherProps }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-600">
      {otherProps.path === "/" ? (
        <div className="bg-lilac-300">
          <div className="container">
            <p className="text-center px-4 py-2 text-white font-bold">
              Vom 22. bis. 26.11. findet die MINT-Aktionswoche statt. Schaut
              Euch die{" "}
              <Link
                to="/event/auftaktveranstaltung"
                className="hover:underline"
              >
                Auftaktveranstaltung im Livestream
              </Link>{" "}
              an.
            </p>
          </div>
        </div>
      ) : null}
      <header>
        <Header {...otherProps} />
      </header>

      <main className="flex-1 pb-20">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
