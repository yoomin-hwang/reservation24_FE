import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [capacity, setCapacity] = useState(1);
  const [reservationDate, setReservationDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get('/available-rooms', {
      params: {
        capacity,
        reservationDate,
        startTime,
        endTime,
      },
    });
    setAvailableRooms(response.data);
  };

  return (
    <div>
      <h1>회의실 예약</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <div>
          <label>인원 수: </label>
          <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        </div>
        <div>
          <label>예약 날짜: </label>
          <input type="date" value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} />
        </div>
        <div>
          <label>시작 시간: </label>
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div>
          <label>끝 시간: </label>
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
        <button type="submit">검색</button>
      </form>

      <h2>예약 가능한 회의실</h2>
      <ul>
        {availableRooms.map((room) => (
          <li key={room.id}>{room.name} (최대 {room.capacity}명)</li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationForm;
