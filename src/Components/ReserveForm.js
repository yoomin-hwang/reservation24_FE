import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { getAvailableRoomsAPI } from "../API/AxiosAPI";
import { ReservationData, AvailableRooms } from "../Atom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReserveForm = () => {
    const [availableRooms, setAvailableRooms] = useRecoilState(AvailableRooms);
    const [data, setData] = useRecoilState(ReservationData);

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


    const handleDateChange = (date) => {
        setData({ ...data, date });
    };

    const handleStartTimeChange = (e) => {
        setData({ ...data, startTime: e.target.value, endTime: "" });
    };

    const handleEndTimeChange = (e) => {
        setData({ ...data, endTime: e.target.value });
    };

    const handleCapacityChange = (e) => {
        setData({ ...data, capacity: parseInt(e.target.value) });
    };

    const handleRoomChange = (e) => {
        setData({ ...data, roomId: parseInt(e.target.value) });
    };
    
    // 다음 버튼 누를 시
    const onNext = () => {
        // 값이 안 들어가면 못 넘어가는 로직 추가하기
        setNext(true);
    };

    // 초기화 버튼 누를 시
    const onInitialize = () => {
        setData({
            date: new Date(),
            startTime: "",
            endTime: "",
            capacity: 10,
            roomId: ""
        });
    }

    // 조건에 맞는 회의실 리스트 서버로부터 받아오기
    const getAvailableRooms = async () => {
        const response = getAvailableRoomsAPI(data);
        console.log(response);
        setAvailableRooms(response);
    };

    useEffect(() => {
        // axios
        getAvailableRooms();
    }, [data.date, data.startTime, data.endTime, data.capacity]);

    return (
        // 다음 버튼 선택 여부에 따라 보여지는 컴포넌트 달라짐
        (next ? 
        <ReserveWrapper>
        </ReserveWrapper>
        :
        <ReserveWrapper>
            <CalendarWrapper>
                <Calendar>Calendar</Calendar>
            </CalendarWrapper>
            <Field>
                <Label>이용 날짜</Label>
                <DatePicker
                    selected={data.date}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    dateFormat="yyyy/MM/dd"
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
            <Field>
                <Label>이용 공간</Label>
                <Select value={data.roomId} onChange={handleRoomChange}>
                    <option value={0} disabled>Select a room</option>
                    <option value={1}>Room 1</option>
                    <option value={2}>Room 2</option>
                    <option value={3}>Room 3</option>
                </Select>
            </Field>
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
    padding-right: 2rem;

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
`

const Field = styled.div`
    width: 100%;
    margin: 1rem;
`

const Label = styled.label`
    margin-right: 10px;
`;

const Select = styled.select`
    width: 100%;
    padding: 5px;
`;

const Button = styled.button``

export default ReserveForm;