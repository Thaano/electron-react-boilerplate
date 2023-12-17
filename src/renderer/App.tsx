import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import './utils/i18n';
import './App.css';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
