import React, { useState, useEffect } from "react";

import { CountryData } from "../../context/medalistsContext";

import ImgPodium from "../../components/ImgPodium";
import Header from "../../components/Header";
import Table from "../../components/Table";

import podium from "../../assets/images/podium.png";
import olympic from "../../assets/images/olympic.png";

import "./styles.css";
import Line from "../../components/Line";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const { context } = CountryData();
  const { countriesNames, selectedCountry, handleValueCountry } = context;

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

          {/* <div className="list-countries">
            <div className="input">
              <label htmlFor="country">Choose your country</label>
              <input
                id="country"
                type="text"
                list="countries"
                placeholder="Countries"
                onChange={(e) => handleValueCountry(e.target.value)}
              />
              <datalist id="countries">
                {countriesNames &&
                  countriesNames.map((country, index) => (
                    <option key={index} value={country} />
                  ))}
              </datalist>
            </div>
            <Table country={selectedCountry} showMedalist />
          </div> */}
          
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
                  link="/"
                />

                <Line />
              </div>
            </div>
          </div>

          <div className="card-athletes">
            <h3>Athletes participate</h3>
            <p><Link to="/">Click here</Link> to see all athletes that won a medal in this games.</p>
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;
