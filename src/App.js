import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './pages/Header/Header';
import Body from './pages/Body/Body';
import Footer from './pages/Footer/Footer';

/*
<Route path='' element={<></>}/>
*/
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Body />
            <Footer />
          </>
        }/>
      </Routes>
      <h1>Let's Cook!</h1>
    </div>
  );
}

export default App;
