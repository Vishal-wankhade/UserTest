// App.js
import './App.css';
import SideBg from './SideBg';
import Content from './Content';
import Dashboard from './Dashboard'; // Import the Dashboard component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './Main.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
