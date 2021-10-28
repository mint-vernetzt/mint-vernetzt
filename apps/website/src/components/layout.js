import React from "react";
import NavigationBar from "../../../../libs/react-components/src/lib/NavigationBar/NavigationBar";
import FooterSection from "../../../../libs/react-components/src/lib/FooterSection/FooterSection";
import "../../../../libs/design-system/src/styles.css";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <header>
        <NavigationBar />
      </header>

      <main className="flex-1 pb-20">{children}</main>

      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}

export default Layout;
