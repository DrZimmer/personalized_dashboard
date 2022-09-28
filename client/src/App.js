import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
            <div className="container">
          
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/profile/:username" component={Profile} /> */}
          <Route component={NoMatch} />
        
      </div>
      <Footer />
    </div>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

//import * as React from 'react';
// import { Outlet, Link } from 'react-router-dom';

// export default function App() {
//   return (
//     <div>
//       <h1>Bookkeeper</h1>
//       <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
//         <Link to="/invoices">Invoices</Link> |{' '}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }
