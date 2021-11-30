import React, { useState, useEffect} from 'react'

import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap" 
import Filter from "./Components/Filters/Filters"
import Cards from "./Components/Cards/Cards"

function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([])
  let { info, results} = fetchedData;

  console.log(results)
  console.log(fetchedData.results)
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
  
useEffect(()=> {

 //IIFE
  ( async function(){
    let data  = await fetch(api).then(res => res.json())
    updateFetchedData(data);
    console.log(data.results)
  })()

}, [api])

  return (
    <div className="App">
      
      <h1 className="text-center ubuntu my-4">
      <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsZ4kIPn362NpJfOnswm9zIjr1aeAfNWoMT4qJUusnz8R3nZN4KwwlB5InGUlHhmCU9s&usqp=CAU"/>

      </h1>
      
      <div className="container">
        <div className = "row">

          <div className = "col-3">
          <Filter/>
          </div>

            <div className="col-8">
              <div className="row">
                <Cards/>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;
