import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";

import ImgPodium from "../../components/ImgPodium";
import Header from "../../components/Header";
import Line from "../../components/Line";
import Card from "../../components/Card";

import podium from "../../assets/images/podium.png";
import olympic from "../../assets/images/olympic.png";

import { CountryData } from "../../context/medalistsContext";

import "./styles.css";

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { context } = CountryData();
  const { listAllAthletes } = context;

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <div className="card-image">
            <div className="title">
              <h1>Here we'll show you the medal board</h1>
              <p>Find it out who's in the top</p>
            </div>
            <div className="card-medals">
              <ImgPodium />
            </div>
          </div>

          <div className="cards">
            <div className="card-title">
              <h2>Top medals</h2>
              <div className="content-card">
                <Card
                  title="Total medals"
                  info="See the medal count rank and find out who's in the first"
                  image={podium}
                  link="/totalMedals"
                />

                <Line />

                <Card
                  title="List of countries"
                  info="The list of countries that participated"
                  image={olympic}
                  link="/countries"
                />
              </div>
            </div>
          </div>

          <div className="card-athletes">
            <h3>Athletes participate</h3>
            <p>
              <span className="click" onClick={() => setShowModal(true)}>
                Click here
              </span>{" "}
              to see all athletes that won a medal in this games.
            </p>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="modal-container">
          <div className="close-icon click" onClick={() => setShowModal(false)}>
            <ClearIcon
              style={{
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--white)",
              }}
            />
          </div>
          <div className="modal-content">
            <h2>Athletes</h2>
            <div className="modal-card">
              {listAllAthletes &&
                listAllAthletes.map((athlete) => {
                  return (
                    <div>
                      <span>{athlete.athlete}</span>
                      <span>{athlete.country}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
