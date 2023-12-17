import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import './utils/i18n';
import './App.css';
import Page2 from './pages/Page2';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
