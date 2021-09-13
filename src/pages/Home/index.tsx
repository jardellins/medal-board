import React from "react";

import ImgPodium from "../../components/ImgPodium";
import Header from "../../components/Header";

import "./styles.css";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="container">

          <div className="card-image">
            <div className="title">
              <h1>Here we'll show you the medal board</h1>
              <p>Find out who's in the top</p>
            </div>
            <div className="image-medals">
              <ImgPodium />
            </div>
          </div>


          <div className="top-10">
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Gold</th>
                    <th>Silver</th>
                    <th>Bronze</th>
                    <th>Total</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
