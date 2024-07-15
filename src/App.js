import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import MainPage from './Pages/MainPage';
import ReservationPage from './Pages/ReservationPage';
import MyReservationPage from './Pages/MyReservationPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />}/>
          <Route path="/reserve" element={<ReservationPage />}/>
          <Route path="/mypage" element={<MyReservationPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;