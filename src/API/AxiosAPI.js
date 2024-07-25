import axios, { AxiosHeaders } from "axios";

const server = process.env.REACT_APP_API_URL;

export const getAllRoomsAPI = async () => {
  try {
    const response = await axios
    .get(`${server}/api/room`);
    return response.data;
  } catch(err) {
    console.error(err);
  }
};


// 가능한 회의실 리스트
export const getAvailableRoomsAPI = async (reserveInfo) => {
  try {
    const response = await axios
    .post(`${server}/api/room/available`, reserveInfo);
    return response.data;
  } catch(err) {
    console.error(err);
  }
};

// 개별 회의실 정보
export const getRoomInfoAPI = async (roomId) => {
  try {
      const response = await axios.get(`${server}/api/room/${roomId}`);
      return response.data;
  } catch(err) {
      console.log(err);
  }
};

// 전체 예약 내역 보기
export const getAllBoardAPI = async () => {
  try {
    const response = await axios
    .get(`${server}/api/reserve/board`);
    return response.data;
  } catch(err) {
    console.error(err);
  }
};

// 예약 상세 보기
// export const getReserveAPI = async (boardId) => {
//   try {
//     const response = await axios
//     .get(`${server}/api/reserve/${boardId}`);
//     return response.data;
//   } catch(err) {
//     console.error(err);
//   }
// };

// 예약 내역 삭제하기
export const deleteReserveAPI = async (boardId) => {
  try {
    const response = await axios
    .delete(`${server}/api/reserve/${boardId}`);
    return response.data;
  } catch(err) {
    console.error(err);
  }
};

// 예약하기
export const postReserveAPI = async (reserveInfo) => {
  try {
    const response = await axios.post(`${server}/api/reserve`, reserveInfo);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};