import './index.css'
import { bookShelf } from './books';
import Books from './book.js';
function App() {

//setting up array

  return (
    <section className='booklist'>
      {bookShelf.map((book)=>{
        return(
          <Books key={book.id} {...book}/>
        );
      })}
    </section>
  );
}



export default App;
