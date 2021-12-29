import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
      <h1 style={{color: "red", margin: "16px"}}>NOT FOUND:</h1>
      <br/>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
);

export default NotFoundPage;
