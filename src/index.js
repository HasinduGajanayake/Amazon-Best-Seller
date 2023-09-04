import ReactDOM  from 'react-dom/client';
import './index.css';
import {books} from './books';
import Book from './Book';

const image='./book-1.jpg';


const BookList = () =>{

const getBook =(id)=>{
    const book = books.find((book)=> book.id === id);
    console.log(book);
}
    return (
            <>
            <h1>Amazon Best Sellers</h1>
            <section className='book-list'>
            <EventExamples/>
            {books.map((book,index)=>{
                
                return (
                    <Book {...book} key={book.id} getBook={getBook} number={index}/>
                );
            })}</section></>);
}

const EventExamples = () =>{
    const handleInputChange= (e) =>{
        console.log(e.target.value);
        console.log(e.target.type);
    }
    const handleBtnClick= () =>{
        console.log('btn');
    }
    const handleFormSubmission= (e) =>{
        e.preventDefault();
        console.log('Form Submitted');
    }
    
    return (
            <form onSubmit={handleFormSubmission}>
                <input type='text' onChange={handleInputChange} style={{margin: '1rem 0'}}></input>
                <button onClick={handleBtnClick}>click</button>
            </form>
            
            );
}




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);