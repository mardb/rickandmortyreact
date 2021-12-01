import React from 'react'
import styles from './Search.module.scss'

const Search = ( {setSearch} ) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input onChange={(e)=>{
        setSearch(e.target.value);
      }} placeholder="Character Search" type="" className={`${styles.input}`}/>
      <button className={`${styles.btn} btn btn-secondary fs-5`}>
        Search
      </button>
    </form>
  )
}

export default Search
