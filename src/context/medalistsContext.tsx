import React, {useState, useEffect, createContext, useContext} from 'react';
import api from '../services/api';

type MedalistProps = {
  athlete: string;
  country: string;
  sex: string;
  event: string;
  medal: string;
}

const MedalistContext = createContext<MedalistProps>({} as MedalistProps)

const MedalistProvider = ({children}) => {
const [country, setCountry] = useState<Array<string>>()
  
useEffect(() => {
  const data: any = api.get("/medalists").then(res => res.data)

  
}, [])

  return (
      <MedalistContext.Provider
        value={{

        }}
      >
        {children}
      </MedalistContext.Provider>
    )
}
