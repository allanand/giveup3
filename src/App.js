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
    
    <table class='hi'>
      {
        myBooks.map(b => (
          <tr>
            <td class='hi2'>{b.title}</td>
            <td class='hi2'>{b.author}</td>
            <td class='hi2'>{b.isbn}</td>
            <td class='hi2'>{b.description}</td>
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
