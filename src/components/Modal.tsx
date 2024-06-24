import React from 'react'
import "./Modal.css"
interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}
export default function Modal(onClose:any, children:any) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  )
}
