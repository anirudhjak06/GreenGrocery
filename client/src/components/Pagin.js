import React from 'react';
//import { useState } from "react";
//import ReactPaginate from "react-paginate"
import "./pagin.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='page'>
    <center>
      <div className='pagination'>
        {pageNumbers.map(number => (
          <div key={number} className='pagination'>
          {/* <a onClick={() => paginate(number-1)} >&laquo;</a> */}
            <a onClick={() => paginate(number)} >
              {number}
            </a>
            

          </div>

        ))}
      </div>
      </center>
    </div>
  );
};

export default Pagination;
