import React from "react";

import Searchbar from '../components/Searchbar'
import RegionFilter from "../components/RegionFilter";
import CountriesList from "../components/CountriesList";

export default function Home() {

  return (
    <main className="home">
      <div className="inputs-container">
        <Searchbar />
        <RegionFilter />
      </div>
      <CountriesList />
    </main>
  )
}