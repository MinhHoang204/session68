import React from 'react'
import { useState } from 'react';
interface BookFormProps {
    onSubmit: (book: Book) => void;
    book: Book | null;
}
  
interface Book {
    id: number;
    title: string;
    borrower: string;
    borrowDate: string;
    returnDate: string;
    status: string;
 }
export default function BookForm(book:any, onSubmit:any) {
    const [title, setTitle] = useState(book ? book.title : '');
    const [borrower, setBorrower] = useState(book ? book.borrower : '');
    const [borrowDate, setBorrowDate] = useState(book ? book.borrowDate : '');
    const [returnDate, setReturnDate] = useState(book ? book.returnDate : '');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newBook: Book = {
        id: book ? book.id : Date.now(),
        title,
        borrower,
        borrowDate,
        returnDate,
        status: book ? book.status : 'Chưa trả'
      };
  
      if (new Date(borrowDate) < new Date() || new Date(returnDate) < new Date()) {
        alert("Ngày mượn và ngày trả không được bé hơn ngày hiện tại");
        return;
      }
  
      onSubmit(newBook);
    };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên sách</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tên người mượn</label>
        <input
          type="text"
          value={borrower}
          onChange={(e) => setBorrower(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ngày mượn</label>
        <input
          type="date"
          value={borrowDate}
          onChange={(e) => setBorrowDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Ngày trả</label>
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Thêm</button>
    </form>
  )
}
