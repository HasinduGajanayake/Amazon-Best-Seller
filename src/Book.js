const Book =(props) => {
    const {image,title,author,id,getBook,number}=props;
    const getSingleBook=() =>{
        getBook(id);
    }
    return (<article className='book'>
                <div>
                <span className='number'>{`# ${number+1}`}</span>
                <img src ={image}/>
                <h2>{title}</h2>
                <h2 style ={{color:'#617d98',marginTop:'0.75rem',fontSize:'0.5rem'}}>{author}</h2>
                <button onClick={getSingleBook}>title</button>
                
                </div></article>);
}

export default Book;