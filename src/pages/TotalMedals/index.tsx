import React, { useEffect, useState } from "react";

import { CountryData } from "../../context/medalistsContext";
import { CountryProps } from "../../dtos/country/countryDTO";
import { countryBoard } from "../../helpers/countryBoard";

import Table from "../../components/Table";
import Header from "../../components/Header";

import loadingGif from "../../assets/images/carregando.gif";

import "./styles.css";

const TotalMedals = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [sortCountriesTotal, setSortCountriesTotal] = useState<CountryProps[]>(
    []
  );

  const { context } = CountryData();
  const { countriesNames, handleAddCountries, countries } = context;

  useEffect(() => {
    countriesNames.map((name) => getTotal(name));
  }, []);

  useEffect(() => {
    if (countries.length === countriesNames.length) {
      sortTotal();
    }
  }, [countries]);

  async function getTotal(country: string) {
    if (countries.length <= countriesNames.length) {
      const data = await countryBoard(country);

      handleAddCountries(data);
    }
  }

  const sortTotal = () => {
    const newData = countries.sort((a, b) => a.total - b.total).reverse();

    setSortCountriesTotal(newData);
    setLoading(false);
  };

  return (
    <>
      <Header />

      <div className="board-title">
        <h1>Medal Board Rank</h1>
        <p>
          This board shows all countries that won at least one medal in this
          year.
        </p>
      </div>

      <div className={loading ? "won-table active-loading" : "won-table"}>
        {loading ? (
          <img id="loading" src={loadingGif} alt="Loading" />
        ) : (
          <Table country={sortCountriesTotal} />
        )}
      </div>
    </>
  );
};

export default TotalMedals;
