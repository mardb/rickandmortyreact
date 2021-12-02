import React, { useState, useEffect} from 'react'

import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap" 
import Filter from "./Components/Filters/Filters"
import Cards from "./Components/Cards"
import Pagination from './Components/Pagination/Pagination'
import Search from "./Components/Search/Search"

function App() {

  let [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber)
  let [search, setSearch] = useState("")
  let [status, setStatus] = useState("")
  let [fetchedData, updateFetchedData] = useState([])
  let { info, results} = fetchedData;

  console.log(fetchedData.results)

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`
  
useEffect(()=> {
 //IIFE
  ( async function(){
    let data  = await fetch(api).then(res => res.json())
    updateFetchedData(data);
    console.log(data.results)
  })()
}, [api])

  return (
    <div className="App" 
    // style={{background:"black", "}} 
    >
      
      <h1 className="text-center ubuntu my-4">
      <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsZ4kIPn362NpJfOnswm9zIjr1aeAfNWoMT4qJUusnz8R3nZN4KwwlB5InGUlHhmCU9s&usqp=CAU"/>

      </h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} className=""/>
      <div className="container">
        <div className = "row">

          <div className = "col-3">
          <Filter setStatus={setStatus} setPageNumber={setPageNumber}/>
          </div>

            <div className="col-8">
              <div className="row">
                <Cards results={results}/>
            </div>
          </div>
        </div>
        </div>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </div>
  );
}

export default App;
