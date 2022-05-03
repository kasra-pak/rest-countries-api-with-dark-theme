import React, {useEffect, useRef} from 'react'
import { useGlobalAppContext } from "../contexts/AppContext";
import { ReactComponent as Magnifier } from '../images/magnifier.svg'

export default function Searchbar() {
  const { setSearchTerm } = useGlobalAppContext()

  const inputEl = useRef('')

  useEffect(() => {
    inputEl.current.focus()
  })
  
  return (
    <div
      className="search-bar-container"
      onClick={() => inputEl.current.focus()}  
    >
      <Magnifier className='magnifier' alt='magnifier icon' />
      <input
        ref={inputEl} 
        className='search-bar'
        type='text'
        placeholder='Search for a country...'
        onChange={() => setSearchTerm(inputEl.current.value)}
      />
    </div>
  )
}