import React from "react";
import { CountryProps } from "../../dtos/country/countryDTO";
import { MedalistProps } from "../../dtos/medalist/medalistDTO";
import Line from "../Line";

import "./styles.css";

type TableProps = {
  country: CountryProps[];
  showMedalist?: boolean;
};

const Table = ({ country, showMedalist }: TableProps) => {
  return (
    <>
      {Object.keys(country).length > 0 && (
        <>
          {showMedalist && (
            <>
              <span className="title-table">Medal board</span>

              <Line />
            </>
          )}

          <div className="list">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Gold</th>
                  <th>Silver</th>
                  <th>Bronze</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {country.map((country, index) => {
                  return (
                    <tr key={index}>
                      <td>{country.countryName}</td>
                      <td>{country.goldMedal}</td>
                      <td>{country.silverMedal}</td>
                      <td>{country.bronzeMedal}</td>
                      <td>{country.total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {showMedalist && (
            <>
              <span className="title-table">
                Here is the list of all Olympics medalists
              </span>
              <Line />
              <div className="list">
                <table>
                  <thead>
                    <tr>
                      <th>athlete</th>
                      <th>Event</th>
                      <th>medal</th>
                      <th>Sex</th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.map((country, index) => {
                      country.medalist.map((medalist, index) => {
                        return (
                          <tr key={index}>
                            <td>{medalist.athlete}</td>
                            <td>{medalist.event}</td>
                            <td>{medalist.medal}</td>
                            <td>{medalist.sex}</td>
                          </tr>
                        );
                      });
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Table;
