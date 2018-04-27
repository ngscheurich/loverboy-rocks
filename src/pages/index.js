import React from "react";
import Header from "../components/Header";
import Installation from "../components/Installation";
import Usage from "../components/Usage";
import Tour from "../components/Tour";
import Links from "../components/Links";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />

    <main className="bg-blue-lighter">
      <div className="container py-xl">
        <div className="md:flex justify-between">
          <div className="md:w-2/3 max-w-md mb-8 md:mb-0">
            <Installation className="mb-8" />
            <Usage />
          </div>

          <div className="md:w-1/3 md:ml-8">
            <Tour className="mb-8" />
            <Links />
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default IndexPage;
