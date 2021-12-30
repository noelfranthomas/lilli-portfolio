import React from "react";

import ArtGallery from "../components/artGallery";
import Footer from "../components/Footer";
import Hero from "../components/hero";
// eslint-disable-next-line
export const IndexPageTemplate = ({

}) => {

  return (
    <div>
      <Hero />
      <ArtGallery />
      <Footer />
    </div>
  );
};


const IndexPage = ({ data }) => {

  return (
      <IndexPageTemplate
      />
  );
};
export default IndexPage;