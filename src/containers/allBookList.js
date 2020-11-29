import React from 'react';
import { connect } from "react-redux";
import SearchResult from '../components/searchResult'


const AllBookList = ({ books }) => {
  
  if (!books || books.length === 0) return <p class="text-center">No Results, sorry</p>;
  return (
    <div>
      <h4 className='text-center list-head mb-5'>Available Books...</h4>
      <div className="container">
            <div className="row"> 
          
            {books.map((book) => {
            return (
            <SearchResult key={book.id}  book={book.volumeInfo} />
            );
          })}
        </div>

      </div>
      <footer style={{fontFamily:"serif"}} className="mt-2 page-footer font-small card  bg-light">

<div className="footer-copyright text-center py-3">© 2020 Copyright:
  <span className="text-info"> Asmaa Aman</span>
</div>

</footer>
    </div>
  );
      
 
  
  }
  const mapStateToProps = (state) => ({
    books: state.books,
    searching: state.searching,
  });
  
export default connect(mapStateToProps)(AllBookList);