import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
    .from('books')
    .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table>
      {
        myBooks.map(b => (
          <tr>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.isbn}</td>
          </tr>
        ))
    }
    </table>
  )
}

function MagicButton() {
  const[count,setCount] =useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <>
      <h3>This is a magic button</h3>
      <button onClick={doMagic}>Magic {count}</button>
    </>
  );
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
