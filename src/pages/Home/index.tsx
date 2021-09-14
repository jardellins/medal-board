import React, { useState, useEffect } from "react";

import ImgPodium from "../../components/ImgPodium";
import Header from "../../components/Header";

import "./styles.css";
import api from "../../services/api";
import getCountries from "../../helpers/getCountries";

type MedalistProps = {
  athlete: string;
  country: string;
  sex: string;
  event: string;
  medal: string;
};

type CountryProps = {
  countryName: string;
  goldMedal: number;
  silverMedal: number;
  bronzeMedal: number;
  medalist: MedalistProps[];
};

const Home = () => {
  const [listAllCountries, setListAllCountries] = useState<string[]>([]);
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [countriesNames, setCountriesNames] = useState<string[]>([]);

  useEffect(() => {
    getMedalist();
  }, []);

  useEffect(() => {
    const countriesNamesFiltered = getCountries(listAllCountries);

    setCountriesNames(countriesNamesFiltered);
  }, [listAllCountries]);

  setTimeout(() => {
    console.log("passou")
    // const newData = getMedalists(countriesNames[0])
    // setCountries(prev => [...prev, newData])
    
    // countriesNames.map(country => {
    // })
  }, 1000)

  async function handleCountries() {
      const data = await api.get(`/medalists?country=KEN`).then((res) => res.data);
      let gold = 0
      let silver = 0
      let bronze = 0

      console.log(data)
      data.map((data: MedalistProps) => {
        switch(data.medal) {
          case "Gold": gold+=1
              return
          case "Silver": silver+=1
              return
          case "Bronze": bronze+=1
        }
      })

      const newData: CountryProps = {
        countryName: "KEN",
        goldMedal: gold,
        silverMedal: silver,
        bronzeMedal: bronze,
        medalist: data,
      }

      setCountries(prev => [...prev, newData])

      return newData
  }

  console.log(countries)

  async function getMedalist() {
    const medalist = await api.get("/medalists").then((res) => res.data);

    medalist.map((list: MedalistProps) => {
      setListAllCountries((prev) => [...prev, list.country]);
    });
  }

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

          <div className="top-10">
            <div>
              <table>
                <thead>
                  <tr>
                    <th onClick={handleCountries}>Country</th>
                    <th>Gold</th>
                    <th>Silver</th>
                    <th>Bronze</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {countriesNames &&
                    countriesNames.map((country, index) => (
                      <tr key={index}>
                        <td>{country}</td>
                        <td>12</td>
                        <td>11</td>
                        <td>10</td>
                        <td>33</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
