import React, { useState, useEffect} from 'react'

import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap" 
import RickMortyLogo from'./Components/Assets/rickandmmortytransparent.png'
import Filter from "./Components/Filters/Filters"
import Cards from "./Components/Cards/Cards"
import Pagination from './Components/Pagination/Pagination'
import Search from "./Components/Search/Search"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } 
from "react-router-dom"
import Location from './Components/Pages/Locations'
import CardDetails from './Components/Cards/CardDetails'

function App(){
return(
  <Router>
    <div className="App">
    <Navbar/>
    </div>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/:id" element={<CardDetails/>} />

  <Route path="/location" element={<Location/>} />
  <Route path="/location/:id" element={<CardDetails/>} />
</Routes>

  </Router>
)
}
const Home = () => {

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
       {/* <style jsx>
        {`
        .App{
          background-color: ##181818;
          color: white;
        }
      `}
      </style> */}

      
      {/* <Navbar/> */}
      
      <h1 className="text-center ubuntu my-4">
      <img alt="" src={RickMortyLogo}/>

      </h1>
      {/* <h1 className="text-center mb-4"> Characters</h1> */}
      <h1 className="text-center"></h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} className=""/>
      <div className="container">
        <div className = "row">

          <div className = "col-3">
            
          <Filter setStatus={setStatus} setPageNumber={setPageNumber}/>
          </div>

            <div className="col-8">
              <div className="row">
                <Cards page="/" results={results}/>
            </div>
          </div>
        </div>
        </div>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </div>
  );
}

export default App;
