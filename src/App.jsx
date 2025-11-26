import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import DetailPage from './pages/Detailpage';
import CartPage from './pages/Cartpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;