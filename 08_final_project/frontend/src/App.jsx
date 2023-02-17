import './common/template/dependencies';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './common/template/Header';
import Sidebar from './common/template/Sidebar';
import Footer from './common/template/Footer';
import Dashboard from './pages/dashboard/Dashboard';
import BillingCycle from './pages/billingcycle/BillingCycle';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />

        <Sidebar />
        
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/billingcycles' element={<BillingCycle />} />
          <Route path='*' element={<Navigate to="/" /> }/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
