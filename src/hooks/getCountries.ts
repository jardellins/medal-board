import React from "react";

import { ERRORS } from "../config/errors/errorsApi";

import api from "../services/api";

const countryRequest = {
  async getCountry(country: string) {
    try {
      const data = await api
        .get(`/medalists?country=${country}`)
        .then((res) => res.data);

      if (!data) {
        throw Error(ERRORS.COUNTRY_NOT_FOUND);
      }

      return data;

    } catch (error) {
      throw Error(ERRORS.COUNTRY_NOT_FOUND);
    }
  },
};

export default countryRequest;
