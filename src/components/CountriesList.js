import React from "react";
import { useGlobalAppContext } from "../contexts/AppContext";
import Country from "./Country";
import Loading from "./Loading"
import NotFound from "./NotFound"

export default function CountriesList() {
  const { loading, countries } = useGlobalAppContext()

  if (loading) {
    return <Loading />
  }

  if (countries === 'empty') {
    return <NotFound />
  }

  return (
    <div className="countries">
      {countries.map((country, idx) => (
        <Country key={idx} {...country}/>
      ))}
    </div>
  )
}