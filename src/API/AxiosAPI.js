import axios from "axios";

const server = process.env.REACT_APP_API_URL;

// 전체 회의실 리스트
export const getAllRoomsAPI = async () => {
    try {
        const response = await axios.get(`${server}/rooms`);
        return response.data;
    } catch(err) {
        console.log(err);
    }
};

// 가능한 회의실 리스트
export const getAvailableRoomsAPI = async () => {
  try {
    const response = await axios
    // .get( == "all" ? `${server}/rooms` : `${server}?part=${part}`);
    return response.data;
  } catch(err) {
    console.error(err);
  }
};

// 개별 회의실 정보
export const getRoomInfoAPI = async (roomId) => {
  try {
      const response = await axios.get(`${server}/room/${roomId}`);
      return response.data;
  } catch(err) {
      console.log(err);
  }
};

// 전체 예약 내역 보기
export const getAllReserveAPI = async () => {
  try {
    const response = await axios
    .get(`${server}/reserve/all`);
    return response.data;
  } catch(err) {
    console.error(err);
  }
};

// 예약 내역 삭제하기
export const deleteReserveAPI = async (postId) => {
  try {
    const response = await axios
    .delete(`${server}/reserve/delete/${postId}`);
    console.log(response);
    return response;
  } catch(err) {
    console.error(err);
  }
};

// 예약하기
export const postReserveAPI = async (data) => {
  try {
    const config = {"Content-Type": 'application/json'};
    const response = await axios.post(`${server}/reserve/post`, data, config);
    return response;
  } catch (err) {
    console.error(err);
  }
};