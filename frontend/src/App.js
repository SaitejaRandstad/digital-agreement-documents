import React from 'react';
import './App.css';
import AgreementForm from './components/AgreementForm';
import AgreementList from './components/AgreementList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Agreement Management System</h1>
        <AgreementForm />
        <AgreementList />
      </header>
    </div>
  );
}

export default App;
