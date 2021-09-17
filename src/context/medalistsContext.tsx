import React, { useState, useEffect, useContext } from "react";

import { CountryProps } from "../dtos/country/countryDTO";
import { ChildrenProps } from "../dtos/medalist/childrenDTO";
import { MedalistProps } from "../dtos/medalist/medalistDTO";

import { countryBoard } from "../helpers/countryBoard";
import sortCountries from "../helpers/sortCountries";

import { LENGTH_SEARCH } from "../config/searchLength/length";

import MedalistDataContext from "./context";
import medalistRequest from "../hooks/getMedalists";

export const MedalistProvider = ({ children }: ChildrenProps) => {
  const [listAllAthletes, setListAthletes] = useState<MedalistProps[]>([]);
  const [listAllCountries, setListAllCountries] = useState<string[]>([]);
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [countriesNames, setCountriesNames] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryProps[]>([]);
  const [valueCountry, setValueCountry] = useState<string>("");

  useEffect(() => {
    getMedalist();
  }, []);

  useEffect(() => {
    const countriesNamesFiltered = sortCountries(listAllCountries);

    setCountriesNames(countriesNamesFiltered);
  }, [listAllCountries]);

  useEffect(() => {
    if (valueCountry.length === LENGTH_SEARCH.WORD_LENGTH) {
      const getData = async () => {
        let data: CountryProps[] = [];
        data[0] = await countryBoard(valueCountry);

        setSelectedCountry(data);
      };

      getData();
    } else {
      setSelectedCountry([]);
    }
  }, [valueCountry]);

  const getMedalist = async () => {
    const medalist = await medalistRequest.getAll();

    medalist.map((list: MedalistProps) => {
      setListAllCountries((prev) => [...prev, list.country]);
    });
    setListAthletes(medalist);
  };

  const handleValueCountry = (data: string) => {
    if (!!data) {
      setValueCountry(data);
    }
  };

  const handleAddCountries = (data: CountryProps) => {
    setCountries((prev) => [...prev, data]);
  };

  return (
    <MedalistDataContext.Provider
      value={{
        valueCountry,
        countries,
        selectedCountry,
        countriesNames,
        listAllAthletes,
        handleValueCountry,
        handleAddCountries,
      }}
    >
      {children}
    </MedalistDataContext.Provider>
  );
};

export function CountryData() {
  const context = useContext(MedalistDataContext);

  return { context };
}
