import React from "react";
import { ERRORS } from "../config/errors/errorsApi";
import { MedalistProps } from "../dtos/medalist/medalistDTO";
import api from "../services/api";

const medalistRequest = {
  async getAll() {
    try {
      const data: MedalistProps[] = await api
        .get("/medalists")
        .then((res) => res.data);

      if (!data) {
        throw Error(ERRORS.MEDALISTS_NOT_FOUND);
      }

      return data;
    } catch (error) {
      throw Error(ERRORS.CANT_FIND);
    }
  },
};

export default medalistRequest;
