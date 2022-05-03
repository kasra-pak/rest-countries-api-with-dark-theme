import React, {useState, useEffect, useContext} from "react";
const url = 'https://restcountries.com/v2/name/'
const fields = '?fields=name,capital,region,population,flag'
const AppContext = React.createContext()

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [regionFilter, setRegionFilter] = useState('all')
  const [countries, setCountries] = useState([])
  
  function fetchData(searchTerm, region) {
    setLoading(true)

    fetch(url + (searchTerm ? searchTerm : 'a') + fields)
      .then(res => res.json())
      .then(data => {
        if (data.status === 404) {
          console.log('naaa')
          setCountries('empty')
        } else {
          setCountries(
            region === 'all' ?
              data :
              data.filter(item => item.region.toLowerCase() === region)
          )
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData(searchTerm, regionFilter)
    }, 100);

    return () => clearTimeout(timeout)
  }, [searchTerm, regionFilter])

  return (
    <AppContext.Provider
      value={{
        loading,
        countries,
        setSearchTerm,
        setRegionFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useGlobalAppContext() {
  return useContext(AppContext)
}

export { AppContextProvider }