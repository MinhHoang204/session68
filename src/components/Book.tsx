import React from 'react'
import { Book } from '../interface/interface';
interface BookTableProps {
    books: Book[];
    onDelete: (id: number) => void;
    onUpdateStatus: (id: number, status: string) => void;
    onEdit: (book: Book) => void;
}
  
export default function TodoBook(onDelete:any, onUpdateStatus:any, books:any, onEdit:any) {
    const handleDelete = (id: number) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa không?')) {
          onDelete(id);
        }
    };
    
    const handleChangeStatus = (id: number, status: string) => {
        const newStatus = status === 'Đã trả' ? 'Chưa trả' : 'Đã trả';
        onUpdateStatus(id, newStatus);
    };
  return (
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên sách</th>
          <th>Tên người mượn</th>
          <th>Ngày mượn</th>
          <th>Ngày trả</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book:any, index:any) => (
          <tr key={book.id}>
            <td>{index + 1}</td>
            <td>{book.title}</td>
            <td>{book.borrower}</td>
            <td>{book.borrowDate}</td>
            <td>{book.returnDate}</td>
            <td>
              <button onClick={() => handleChangeStatus(book.id, book.status)}>
                {book.status}
              </button>
            </td>
            <td>
              <button onClick={() => onEdit(book)}>Sửa</button>
              <button onClick={() => handleDelete(book.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
