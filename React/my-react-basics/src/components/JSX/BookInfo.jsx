function BookInfo() {
  const book = {
    bookTitle: "I too had a Lovestory",
    authorName: "James Bond",
    publicationYear: 2011,
    price: 500,
    pages: 200,
    available: false,
    rating: 4,
    img: "https://i.pravatar.cc/150?img=5",
  };
  const status = book.available ? "Available" : "Sold Out";
  const color = book.available ? "greenColor" : "redColor";
  return (
    <div className="book-info">
      <img src={book.img} alt="Book Cover Pic" />
      <h3>{book.bookTitle}</h3>
      <p>Author Name: {book.authorName}</p>
      <p>Publication Year : {book.publicationYear}</p>
      <p>Price: {book.price.toLocaleString()}</p>
      <p>Number of Pages: {book.pages}</p>
      <p>
        Is this Available? : <span className={color}>{status}</span>
      </p>
      <p>Rating: {book.rating} stars</p>
    </div>
  );
}
export default BookInfo;
