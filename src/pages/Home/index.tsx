import React, { useState, useEffect } from "react";

import ImgPodium from "../../components/ImgPodium";
import Header from "../../components/Header";

import "./styles.css";
import api from "../../services/api";
import getCountries from "../../helpers/getCountries";
import { CountryProps } from "../../dtos/country/countryDTO";
import { MedalistProps } from "../../dtos/medalist/medalistDTO";
import { countryBoard } from "../../helpers/countryBoard";

const Home = () => {
  const [listAllCountries, setListAllCountries] = useState<string[]>([]);
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [countriesNames, setCountriesNames] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryProps>(
    {} as CountryProps
  );
  const [valueCountry, setValueCountry] = useState<string>("");

  useEffect(() => {
    getMedalist();
  }, []);

  useEffect(() => {
    const countriesNamesFiltered = getCountries(listAllCountries);

    setCountriesNames(countriesNamesFiltered);
  }, [listAllCountries]);

  useEffect(() => {
    if (!!valueCountry) {
      const getData = async () => {
        const data = await countryBoard(valueCountry);

        setSelectedCountry(data);
      };

      getData();
    }
  }, [valueCountry]);

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

          <div className="list-countries">
            <div className="input">
              <label htmlFor="country">Choose your country</label>
              <input
                id="country"
                type="text"
                list="countries"
                onChange={(e) => setValueCountry(e.target.value)}
              />
              <datalist id="countries">
                {countriesNames &&
                  countriesNames.map((country, index) => (
                    <option key={index} value={country} />
                  ))}
              </datalist>
            </div>
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
                <tbody>
                  {selectedCountry && (
                    <tr>
                      <td>{selectedCountry.countryName}</td>
                      <td>{selectedCountry.goldMedal}</td>
                      <td>{selectedCountry.silverMedal}</td>
                      <td>{selectedCountry.bronzeMedal}</td>
                      <td>{selectedCountry.total}</td>
                    </tr>
                  )}
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
