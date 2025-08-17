// src/Counter.jsx
import React, { useState, useEffect } from 'react'; // ต้อง import useState

function Counter() {
  // ประกาศ state ชื่อ count และฟังก์ชันสำหรับอัปเดตชื่อ setCount
  // 0 คือค่าเริ่มต้นของ count
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Effect ทำงาน!');
    document.title = `คุณกดไปแล้ว ${count} ครั้ง`;
  }, [count]);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
      <div style={{border: '1px solid #ccc',padding:'1rem',margin: '1rem'}}>
        <h3>ตัวนับเลข (พร้อม Effect)</h3>
        <p>คุณกดไปแล้ว: {count} ครั้ง</p>
        <button onClick={handleIncrement}>
            เพิ่มค่า +
        </button>
        <button onClick={handleDecrement} style={{marginLeft:'8px'}}>
            ลดค่า -
        </button>
      </div>
  );
}

export default Counter;
