import React from "react";

import { MEDALS } from "../config/medalsTypes/medals";
import { CountryProps } from "../dtos/country/countryDTO";
import { MedalistProps } from "../dtos/medalist/medalistDTO";
import countryRequest from "../hooks/getCountries";

async function countryBoard(country: string) {
  const data = await countryRequest.getCountry(country);

  let gold = 0;
  let silver = 0;
  let bronze = 0;

  data.map((data: MedalistProps) => {
    switch (data.medal) {
      case MEDALS.GOLD:
        gold += 1;
        return;
      case MEDALS.SILVER:
        silver += 1;
        return;
      case MEDALS.BRONZE:
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
