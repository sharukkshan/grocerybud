import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const addItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, { text: inputText, done: false }]);
      setInputText('');
      toast("Item added!", { position: "top-center" });
    }
  };

  const toggleItemDone = (index) => {
    const newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    toast("Item deleted!", { position: "top-center" });
  };

  return (
    <div className="main-section">
      <ToastContainer />
      <div className="card-content">
        <h4>Grocery Bud</h4>
        <div className="input-btn">
          <input 
            type="text" 
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
          />
          <button onClick={addItem}>Add</button>
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <input 
                type="checkbox" 
                checked={item.done} 
                onChange={() => toggleItemDone(index)} 
              />
              <span className={item.done ? 'done' : ''}>{item.text}</span>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;