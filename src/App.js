import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />}/>
          <Route path="/reserve" element={<ReservationPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;