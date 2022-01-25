import './index.css'
import { bookShelf } from './book';
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

const Books = (props) =>{
  const {img,title,author} = props
  return(
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )

}

export default App;
