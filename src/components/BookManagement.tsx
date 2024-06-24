import Book from './Book';
import BookForm from './BookForm';
import Modal from './Modal';
import { useState, useEffect } from 'react';
interface Book {
    id: number;
    title: string;
    borrower: string;
    borrowDate: string;
    returnDate: string;
    status: string;
}
export default function BookManagement() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentBook, setCurrentBook] = useState<Book | null>(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books') || '[]');
    setBooks(storedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book: Book) => {
    setBooks([...books, book]);
    setIsFormVisible(false);
  };

  const deleteBook = (id: number) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  const updateBookStatus = (id: number, status: string) => {
    const updatedBooks = books.map(book => book.id === id ? { ...book, status } : book);
    setBooks(updatedBooks);
  };

  const updateBook = (updatedBook: Book) => {
    const updatedBooks = books.map(book => book.id === updatedBook.id ? updatedBook : book);
    setBooks(updatedBooks);
    setCurrentBook(null);
    setIsFormVisible(false);
  };

  const openForm = (book: Book | null = null) => {
    setCurrentBook(book);
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
    setCurrentBook(null);
  };
  return (
    <div>
      <button onClick={() => openForm()}>Thêm thông tin</button>
      {isFormVisible && (
        <Modal onClose={closeForm}>
          <BookForm
            onSubmit={currentBook ? updateBook : addBook}
            book={currentBook}
          />
        </Modal>
      )}
      <Book
        books={books}
        onDelete={deleteBook}
        onUpdateStatus={updateBookStatus}
        onEdit={openForm}
      />
    </div>
  )
}
