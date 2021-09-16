import React, { useState, useEffect, createContext, useContext } from "react";

import { CountryProps } from "../dtos/country/countryDTO";
import { ChildrenProps } from "../dtos/medalist/childrenDTO";
import { MedalistProps } from "../dtos/medalist/medalistDTO";
import { countryBoard } from "../helpers/countryBoard";
import getCountries from "../helpers/getCountries";
import api from "../services/api";

import MedalistDataContext from "./context";

export const MedalistProvider = ({ children }: ChildrenProps) => {
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

  const getMedalist = async () => {
    const medalist = await api.get("/medalists").then((res) => res.data);

    medalist.map((list: MedalistProps) => {
      setListAllCountries((prev) => [...prev, list.country]);
    });
  }

  const handleValueCountry = (data: string) => {
    if (!!data) {
      setValueCountry(data);
    }
  };

  const handleAddCountries = (data: CountryProps) => {
    setCountries(prev => [...prev, data])
  }

  return (
    <MedalistDataContext.Provider
      value={{
        valueCountry,
        countries,
        selectedCountry,
        countriesNames,
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
