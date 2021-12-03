import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber }) => {
  // console.log(info.pages)
let [width, setWidth] = useState(window.innerWidth)
console.log(width)

let updateDimension = () => {
setWidth(window.innerWidth)
}
useEffect(() => {
  window.addEventListener("resize", updateDimension);
  return () => window.addEventListener("resize", updateDimension);
}, [])

  return (
    <>
    <style jsx>
      {`
      @media(max-width:768px)
      .next, .prev{
        display: none;
      }
      .pagination{
        font-size: 14px;
      }
      `}
    </style>
  <ReactPaginate 
  activeClassName="active"
  breakLabel="..."
  className="pagination justify-content-center gap-4 my-4 " 
  forcePage={pageNumber === 1? 0 : pageNumber - 1}
  marginPagesDisplayed={width< 576 ? 1 : 2}
  pageRangeDisplayed={width< 576 ? 1 : 2}
  nextLabel="Next" 
  nextClassName="btn btn-success next"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  previousLabel="Prev"
  previousClassName="btn btn-success prev"
  onPageChange={(data) => { setPageNumber(data.selected + 1)}}
  pageCount={info?.pages}/>
  </>
  ) 
}

export default Pagination
