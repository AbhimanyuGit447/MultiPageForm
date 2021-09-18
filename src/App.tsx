import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Form } from 'react-bootstrap';
import { Resources } from './components/Resources';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import MultiForm from './Multiform/MultiForm';


const overrides = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
};
const client = new QueryClient(overrides);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MultiForm />
      </header>
    </div>
    
     
  );
}

export default App;
