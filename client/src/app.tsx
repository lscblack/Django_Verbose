// src/app.tsx

import { Router, Link, Route } from 'wouter-preact';
import DefaultPage from './pages/DefaultPage';
import DashMain from './pages/DashMain';

export function App() {
  return (
    <Router>
        <Route path="/" component={DefaultPage} />
        <Route path="/dash" component={DashMain} />
    </Router>
  );
}

export default App;
