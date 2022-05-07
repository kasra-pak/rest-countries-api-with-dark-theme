import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading"
import { ReactComponent as LeftArrow  } from "../images/left-arrow.svg";

export default function Detail() {
  const { name } = useParams()
  const [country, setCountry] = useState()
  const [borders, setBorders] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchByNameURL = `https://restcountries.com/v2/name/${name}?fullText=true`
  const fields = '?fields=name,topLevelDomain,capital,region,subregion,population,nativeName,flag,currencies,languages,borders'

  useEffect(() => {
    setLoading(true)
    fetch(fetchByNameURL + fields)
      .then(res => res.json())
      .then(data => {
        setCountry(
          {
            name: data[0].name,
            domain: data[0].topLevelDomain[0],
            capital: data[0].capital,
            region: data[0].region,
            subregion: data[0].subregion,
            population: data[0].population,
            nativeName: data[0].nativeName,
            flag: data[0].flag,
            currency: data[0].currencies[0].name,
            languages: data[0].languages.map(lang => lang.name),
            borders: data[0].borders || [],
          }
        )
        const fetchByCodeURL = 'https://restcountries.com/v2/alpha?codes='

        const codes = data[0].borders.join(',')
        return fetch(fetchByCodeURL + codes)
      })
      .then(res => res.json())
      .then(data => setBorders(data.map(item => item.name)))
          
      .catch((error) => {
        if (error instanceof TypeError) {
          error.message === 'data[0].borders is undefined' ?
            setBorders(null) :
            console.log(error)
        } else {
          throw(error)
        }
      })
      .finally(() => setLoading(false))
      

  }, [fetchByNameURL])

  if (loading) {
    return (
      <main className="detail">
        <Link to='/' className="btn back-btn">
          <LeftArrow className="left-arrow" />
          back
        </Link>
        <Loading />
      </main>
    )
  }

  return (
    <main className="detail">
      <Link to='/' className="btn back-btn">
        <LeftArrow className="left-arrow" />
        back
      </Link>
      <section className="detail__country">
        <img src={country.flag} alt={`${country.name} flag`} />
        <div className="detail__info">
          <h1>{country.name}</h1>
          <div>
            <p>
              <b>native name:</b> {country.nativeName}
            </p>
            <p>
              <b>population:</b> {country.population.toLocaleString()}
            </p>
            <p>
              <b>region:</b> {country.region}
            </p>
            <p>
              <b>sub region:</b> {country.subregion}
            </p>
            <p>
              <b>capital:</b> {country.capital}
            </p>
          </div>
          <div>
            <p>
              <b>top level domain:</b> {country.domain}
            </p>
            <p>
              <b>currencies:</b> {country.currency}
            </p>
            <p>
              <b>languages:</b> {country.languages.join(', ')}
            </p>
          </div>
          {borders && <div className="border-countries">
            <h3>border countries:</h3> 
            <div className="boxes">
              {borders.map((border, idx) => (
                <span key={idx} className="box">{border}</span>
              ))}
            </div>
          </div>}
        </div>
      </section>

    </main>
  )
}