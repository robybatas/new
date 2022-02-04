import Login from './views/Login';
import Main from './views/Main';
import Navigation from './router/Navigation';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={
          <Login />
        } />
        <Route path="/" element={
          <Navigation>
            <Main />
          </Navigation>
        } />
      </Routes>
    </div>
  );
}

export default App;
