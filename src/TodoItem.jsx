// src/TodoItem.jsx
import React, { useContext, useState } from 'react';
import { TodoContext } from './contexts/TodoContext';

// 🔽 รับ props ทั้งหมดที่จำเป็น
function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo, editTodo} = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // เราจะเพิ่มฟังก์ชันแก้ไขในขั้นตอนต่อไป
  const handleSave = () => {
    if (newText.trim()){
        editTodo(todo.id,newText);
        setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {isEditing ? (
            <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave} // บันทึกเมื่อ focus หลุด
          onKeyDown={(e) => e.key === 'Enter' && handleSave()} // บันทึกเมื่อกด Enter
          autoFocus // focus อัตโนมัติเมื่อแสดงผล
        />
        ) : (
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>
        )}
      <div>
        {isEditing ? (
            <button onClick={handleSave} className='seve-btn'>บันทึก</button>
        ) : (
            <button onClick={() => setIsEditing(true)} className='edit-btn'>แก้ไข</button>
        )}
        <button onClick={() => deleteTodo(todo.id)}>ลบ</button>
      </div>
    </li>
  );
}

export default TodoItem;
