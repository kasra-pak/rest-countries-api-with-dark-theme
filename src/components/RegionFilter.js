import React, { useRef, useState } from "react";
import { ReactComponent as DownArrow } from "../images/down-arrow.svg";
import { useGlobalAppContext } from "../contexts/AppContext";

export default function RegionFilter() {
  const { setRegionFilter } = useGlobalAppContext()
  const [showFilterOptions, setShowFilterOptions] = useState(false)
  const regionEl = useRef()
  const regions = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania']

  function toggleRegion(region) {
    setRegionFilter(region)
    setShowFilterOptions(false)
    regionEl.current.textContent = region[0].toUpperCase() + region.slice(1)
  }

  function toggleOptions(e) {
    if (!e.target.classList.contains('drop-list')) {
      setShowFilterOptions(prevState => !prevState)
    } 
  }
  return (
    <>
      <div className="filter-container">
        <div className="region-filter" onClick={toggleOptions}>
          <p ref={regionEl}>Filter by Region</p>
          <DownArrow className='down-arrow'  />
        </div>
        <ul className={`drop-list ${showFilterOptions ? 'show' : ''}`}>
          {regions.map((region, idx) => (
            <li
              key={idx}
              onClick={() => toggleRegion(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}