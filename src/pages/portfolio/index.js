import * as React from "react";

import Layout from "../../components/Layout";
import ArtRoll from "../../components/ArtRoll";

export default class ArtIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <ArtRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
