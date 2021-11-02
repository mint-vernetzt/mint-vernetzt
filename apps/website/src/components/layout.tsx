import Header from "./header";
import Footer from "./footer";
import "../../../../libs/design-system/src/styles.css";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
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
