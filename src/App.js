import React from 'react';
import './App.css';
import EmployeeTable from './EmployeeTable';

function App() {
  return (
    <div className="App">
      <header>

        <h1>Employee Directory</h1>

      </header>
      <section>
        <EmployeeTable />
      </section>
    </div>
  );
}

export default App;
