import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { getAvailableRoomsAPI, postReserveAPI } from "../API/AxiosAPI";
import { ReservationData, AvailableRooms, RoomData } from "../Atom";
import { getAllRoomsAPI } from "../API/AxiosAPI";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const ReserveForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useRecoilState(ReservationData);

    const [roomInfo, setRoomInfo] = useRecoilState(RoomData);

    const [next, setNext] = useState(false);

    // 데이터 입력 관련 함수들
    const generateTimeOptions = () => {
        const times = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let min = 0; min < 60; min += 30) {
                times.push(`${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`);
            }
        }
        return times;
    };
    
    const generateEndTimeOptions = (startTime) => {
        if (!startTime) return [];
        const [startHour, startMin] = startTime.split(":").map(Number);
        const startIndex = startHour * 2 + startMin / 30 + 1; // Start time index + 1
        const times = generateTimeOptions();
        return times.slice(startIndex);
    };

    const startTimes = generateTimeOptions();
    const endTimes = generateEndTimeOptions(data.startTime);

    const handleDateChange = (d) => {
        setData({ ...data, date: d.toISOString().split("T")[0] });
    };

    const handleStartTimeChange = (e) => {
        setData({ ...data, startTime: e.target.value, endTime: "" });
    };

    const handleEndTimeChange = (e) => {
        setData({ ...data, endTime: e.target.value });
    };

    const handleCapacityChange = (e) => {
        setData({ ...data, capacity: e.target.value });
    };

    // name, faculty, group name, purpose
    const handleNameChange = (e) => {
        setData({ ...data, userName: e.target.value });
    };
    const handleFacultyChange = (e) => {
        setData({ ...data, userFaculty: e.target.value });
    };
    const handleGroupNameChange = (e) => {
        setData({ ...data, groupname: e.target.value });
    };
    const handlePurposeChange = (e) => {
        setData({ ...data, purpose: e.target.value });
    };

    const postReservation = () => {
        console.log(data);
        const response = postReserveAPI(data);
        console.log(response);
    }
    
    // 다음 버튼 누를 시
    const onNext = () => {
        // 값이 안 들어가면 못 넘어가는 로직 추가하기
        if (!data.date || !data.startTime || !data.endTime || !data.capacity || !data.userName || !data.userFaculty || !data.groupname || !data.purpose) {
            alert("모든 필수 입력 필드를 채워야 합니다.");
            return;
        }
        setNext(!next);
    };

    // 초기화 버튼 누를 시
    const onInitialize = () => {
        setData({
            date: new Date(),
            startTime: "",
            endTime: "",
            capacity: "",
            roomId: ""
        });
    }

    // 예약하기 버튼 누를 시
    const onSubmit = () => {
        postReservation(data);
        alert("예약 완료!");
        onInitialize();
        navigate("/");
    };
    
    return (
        // 다음 버튼 선택 여부에 따라 보여지는 컴포넌트 달라짐
        (next ? 
        <ReserveWrapper>
            <Field>
                <Label>장소</Label>
                <InfoLabel>{roomInfo.name}</InfoLabel>
            </Field>
            <Field>
                <Label>예약 날짜</Label>
                <InfoLabel>{data.date}</InfoLabel>
            </Field>
            <Field>
                <Label>시작 시간</Label>
                <InfoLabel>{data.startTime}</InfoLabel>
            </Field>
            <Field>
                <Label>끝 시간</Label>
                <InfoLabel>{data.endTime}</InfoLabel>
            </Field>
            <Field>
                <Label>예약자 이름</Label>
                <Input onChange={handleNameChange} />
            </Field>
            <Field>
                <Label>학부</Label>
                <Input onChange={handleFacultyChange} />
            </Field>
            <Field>
                <Label>모임명</Label>
                <Input onChange={handleGroupNameChange} />
            </Field>
            <Field>
                <Label>목적</Label>
                <Input onChange={handlePurposeChange} />
            </Field>
            <BtnWrapper>
                <Button onClick={onNext}>이전</Button>
                <Button onClick={onSubmit}>예약하기</Button>
            </BtnWrapper>
        </ReserveWrapper>
        :
        <ReserveWrapper>
            <CalendarWrapper>
                <Calendar>Calendar</Calendar>
            </CalendarWrapper>
            <Field>
                <Label>이용 날짜</Label>
                <StyledDatePicker
                    selected={data.date}
                    onChange={handleDateChange}
                    minDate={new Date()}
                />
            </Field>
            <Field>
                <Label>시작 시간</Label>
                <Select value={data.startTime} onChange={handleStartTimeChange}>
                    <option value="" disabled>Select start time</option>
                    {startTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </Select>
            </Field>
            <Field>
                <Label>끝 시간</Label>
                <Select value={data.endTime} onChange={handleEndTimeChange} disabled={!data.startTime}>
                    <option value="" disabled>Select end time</option>
                    {endTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </Select>
            </Field>
            <Field>
                <Label>수용 인원</Label>
                <Select value={data.capacity} onChange={handleCapacityChange}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </Select>
            </Field>
            {/* <Field>
                <Label>이용 공간</Label>
                <Select value={data.roomId} onChange={handleRoomChange}>
                    <option value={0} disabled>Select a room</option>
                    <option value={1}>Room 1</option>
                    <option value={2}>Room 2</option>
                    <option value={3}>Room 3</option>
                </Select>
            </Field> */}
            <BtnWrapper>
                <Button onClick={onNext}>다음</Button>
                <Button onClick={onInitialize}>초기화</Button>
            </BtnWrapper>
        </ReserveWrapper>)
    );
};

const ReserveWrapper = styled.div`
    width: 30%;
    margin: 0.5rem;
    padding: 0.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CalendarWrapper = styled.div`
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const BtnWrapper = styled.div`
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const Calendar = styled.button`
    width: 5rem;
    height: 2.5rem;

    border: 1px solid #E0EFEF;
    border-radius: 8px;
    background-color: #E0EFEF;

    font-size: 16px;

    &:hover {
        border: 1px solid #C7DFDF;
        background-color: #C7DFDF;
    }
`

const Field = styled.div`
    width: 100%;
    margin: 0.5rem;
    
    font-size: 16px;
`

const Label = styled.label`
    margin-right: 10px;

    font-size: 16px;
    font-weight: 600;
`;

const InfoLabel = styled.div`
    margin-top: 0.5rem;
    margin-right: 0.5rem;
`

const Input = styled.input`
    width: 100%;
    height: 2.5rem;

    margin-top: 0.5rem;
    padding: 0.2rem;
    border: 1px solid #D4D4D4;
    border-radius: 8px;

    font-size: 1rem;

    &:focus{
        border: 1px solid #527CFF;
        outline: none;
    }
`

const Select = styled.select`
    width: 100%;
    height: 2.5rem;

    margin-top: 0.5rem;
    padding: 0.2rem;
    border: 1px solid #D4D4D4;
    border-radius: 8px;

    font-size: 1rem;

    &:focus{
        border: 1px solid #527CFF;
        outline: none;
    }
`;

const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    height: 1rem;

    padding: 0.5rem;
    border: 1px solid #D4D4D4;
    border-radius: 8px;

    font-size: 1rem;

    &:focus{
        border: 1px solid #527CFF;
        outline: none;
    }
`;

const Button = styled.button`
    width: 4.5rem;
    height: 2rem;

    margin: 0.1rem;
    border: 1px solid #E0EFEF;
    border-radius: 8px;
    background-color: #E0EFEF;

    font-size: 16px;

    &:hover {
        cursor: pointer;
        border: 1px solid #C7DFDF;
        background-color: #C7DFDF;
    }
`

export default ReserveForm;