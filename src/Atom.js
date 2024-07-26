import { atom } from "recoil";

export const UserData = atom({
    key: 'UserData',
    default: {
        id: "",
    }
});

export const ReservationData = atom({
    key: 'ReservationData',
    default: [{
        userName: "",
        userFaculty: "",
        date: "",
        startTime: "",
        endTime: "",
        capacity: "",
        roomId: "",
        groupname: "",
        purpose: "",
    }]
});

export const AvailableRooms = atom({
    key: 'AvailableRooms',
    default: []
});

export const RoomData = atom({
    key: 'RoomData',
    default: {}
})