import React from "react";

import api from "../services/api";

import { CountryProps } from "../dtos/country/countryDTO";
import { MedalistProps } from "../dtos/medalist/medalistDTO";

async function countryBoard(country: string) {
  const data = await api
    .get(`/medalists?country=${country}`)
    .then((res) => res.data);
  let gold = 0;
  let silver = 0;
  let bronze = 0;

  data.map((data: MedalistProps) => {
    switch (data.medal) {
      case "Gold":
        gold += 1;
        return;
      case "Silver":
        silver += 1;
        return;
      case "Bronze":
        bronze += 1;
    }
  });

  const total = data.length;

  const newData: CountryProps = {
    countryName: country,
    goldMedal: gold,
    silverMedal: silver,
    bronzeMedal: bronze,
    total,
    medalist: data,
  };

  return newData;
}

export { countryBoard };
