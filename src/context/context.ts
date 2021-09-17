import { createContext } from "react";
import { CountryProps } from "../dtos/country/countryDTO";
import { MedalistProps } from "../dtos/medalist/medalistDTO";

type CountryMedalistsProps = {
  selectedCountry: CountryProps[];
  countries: CountryProps[];
  valueCountry: string;
  countriesNames: string[];
  listAllAthletes: MedalistProps[];
  handleValueCountry: (e: string) => void;
  handleAddCountries: (e: CountryProps) => void;
};

const MedalistDataContext = createContext<CountryMedalistsProps>(
  {} as CountryMedalistsProps
);

export default MedalistDataContext;
