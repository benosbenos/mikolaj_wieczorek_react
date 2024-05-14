import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  const [imie, setimie] = useState('');
  const [nazwisko, setnazwisko] = useState('');
  const [to, setTo] = useState('');
  const kursy = ["Programowanie w C#", "Angulardla początkujących", "Kurs Django"];
  const listKursy = kursy.map((kurs) =>
  <li>{kurs}</li>
  
  );
  const wybory = kursy.map((kurs) =>
    <option value={kurs}>{kurs}</option>
  );

  function handleSubmit(e) {
      e.preventDefault();
    if (imie === '' || nazwisko ==='' || to ===''){
        alert("wypełnij");
    
      }else{
        alert(`Imie: ${imie}\nNazwisko: ${nazwisko}\nKurs: ${to}`);
      }
    
  }

  return (
    <div className="container">
      <header className="App-header">
        <h1>Liczba kursów:{kursy.length}</h1>
        <ol>
          {listKursy}
        </ol>

        <form onSubmit={handleSubmit}>
          <label>Imię</label>
          <input class="form-control"  value={imie} onChange={e => setimie(e.target.value)}></input>
          <label>Nazwisko</label>
          <input class="form-control"  value={nazwisko} onChange={e => setnazwisko(e.target.value)}></input>
          <label>Kurs</label>
          <select class="form-control"  value={to} onChange={e => setTo(e.target.value)}>
          <option value="" disabled selected>Wybierz opcję</option>
            {wybory}
          </select>
          <button className="btn btn-primary" type="submit">Dodaj do Kursu</button>
        </form>
      </header>
    </div>
  );
}

export default App;
