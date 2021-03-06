import React from "react";

const sortCountries = (list: string[]) => {
  const data = list.filter((elem, index) => {
    return index === list.indexOf(elem);
  });

  return data.sort();
};

export default sortCountries;
