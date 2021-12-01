import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber }) => {
  // console.log(info.pages)

  return <ReactPaginate 
  activeClassName="active"
  breakLabel="..."
  className="pagination justify-content-center gap-4 my-4" 
  forcePage={pageNumber === 1? 0 : pageNumber - 1}
  nextLabel="Next" 
  nextClassName="btn btn-success "
  pageClassName="page-item"
  pageLinkClassName="page-link"
  previousLabel="Prev"
  previousClassName="btn btn-success"
  onPageChange={(data) => { setPageNumber(data.selected + 1)}}
  pageCount={info?.pages}/>
}

export default Pagination
