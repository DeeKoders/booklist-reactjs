import './index.css'

function App() {

//setting up array
const bookShelf = [
{
  id:1,
  img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL604_SR604,400_.jpg',
  title: 'It Ends with Us: A Novel',
  author: 'Colleen Hoover',

}
,
{
  id:2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/61+nBGbGW7L._AC_UL604_SR604,400_.jpg',
  title: 'Verity',
  author: 'Colleen Hoover',

}
,
{
  id:3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/81gtzoeueoS._AC_UL604_SR604,400_.jpg',
  title: 'My Little Golden Book About Betty White',
  author: 'Deborah Hopkinson',

}
]
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
