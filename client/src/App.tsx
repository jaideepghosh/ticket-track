import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Tickets from './components/Tickets';
import TicketInfo from './components/TicketInfo';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/tickets" element={<Tickets/>}/>
          <Route path="/ticket/:id" element={<TicketInfo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
