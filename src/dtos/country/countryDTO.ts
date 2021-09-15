import { MedalistProps } from "../medalist/medalistDTO";

export type CountryProps = {
  countryName: string;
  goldMedal: number;
  silverMedal: number;
  bronzeMedal: number;
  total: number;
  medalist: MedalistProps[];
};
