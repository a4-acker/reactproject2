import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import D from './pages/D';
import E from './pages/E';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <button><Link to="/a">Go to A</Link></button>
                    <button><Link to="/b">Go to B</Link></button>
                    <button><Link to="/c">Go to C</Link></button>
                    <button><Link to="/d">Go to D</Link></button>
                    <button><Link to="/e">Go to E</Link></button>
                </nav>
                <Routes>
                    <Route path="/a" element={<A />} />
                    <Route path="/b" element={<B />} />
                    <Route path="/c" element={<C />} />
                    <Route path="/d" element={<D />} />
                    <Route path="/e" element={<E />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
