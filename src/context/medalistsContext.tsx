// import React, { useState, useEffect, createContext, useContext } from "react";
// import api from "../services/api";

// type MedalistProps = {
//   athlete: string;
//   country: string;
//   sex: string;
//   event: string;
//   medal: string;
// };

// type CountryProps = {
//   countryName: string;
//   goldMedal: number;
//   silverMedal: number;
//   bronzeMedal: number;
//   medalist: MedalistProps
// };

// const MedalistContext = createContext<CountryProps>({} as CountryProps);

// const MedalistProvider = ({ children }) => {
//   const [countryName, setCountryName] = useState<string>();

//   useEffect(() => {
//     const medalist: any = api.get("/medalists").then((res) => res.data);

//     medalist.map((value: CountryProps) => {
//       const newCountries = countryName?.filter((addValue) => addValue !== value.countryName);

//       setCountryName(newCountries);
//     });
//   }, []);

//   console.log(countryName)

//   return (
//     <MedalistContext.Provider value={{
//       countryName
//     }}>{children}</MedalistContext.Provider>
//   );
// };
import React from 'react';

// import { Container } from './styles';

const context: React.FC = () => {
  return <div />;
}

export default context;