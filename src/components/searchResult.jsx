import React from 'react';
import allBookList from '../containers/allBookList';


const SearchResult = ({ book }) => {



  return (
    <div className="mt-5 col-md-3">
      <div classnName="card" style={{height:"334px",overflowY:"scroll",border: "1px solid #ece1e1"}}>
      {book.imageLinks && book.imageLinks.thumbnail ? (
        <img
        className="shadow card-img-top" style={{height: "160px",
        objectFit: "fill"}}
          src={book.imageLinks.thumbnail}
          alt={book.title}
        />
      ) : (
        <span className="m-5 d-flex align-items-center justify-content-center">
          No Image
        </span>
      )}
   
        
        
        <div className="card-body">
          <p style={{textAlign: "initial",
    fontFamily: "serif"}} class="card-title">{book.title}</p>
          <p classnName="card-text"></p>

        </div>
      </div>
    </div>
  );
}

export default SearchResult;