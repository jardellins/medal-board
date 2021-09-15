import { type } from "os";
import { createContext } from "react";
import { CountryProps } from "../dtos/country/countryDTO";

type CountryMedalistsProps = {
    selectedCountry: CountryProps;
    countries: CountryProps[];
    valueCountry: string;
    countriesNames: string[];
    handleValueCountry: (e: string) => void;
}

const MedalistDataContext = createContext<CountryMedalistsProps>({} as CountryMedalistsProps);

export default MedalistDataContext;
