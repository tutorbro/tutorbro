import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children, title }) {
  return (
    <div>
      <Header title={title} />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
}
