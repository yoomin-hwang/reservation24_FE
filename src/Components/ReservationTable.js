import styled from "styled-components";
import { useState, useEffect } from "react";

function ReservationTable () {
    const [data, setData] = useState([]);
    const variables = ["NO", "Place", "Date", "Time", "Faculty", "Professor", "Purpose", "Approval"];

    useEffect(() => {
    fetch("/Data/data.json")
        .then((res) => res.json())
        .then((data) => {
        setData(data);
        // console.log(data);
        });
    }, []);

    return (
        <Table>
            <thead>
                <tr>
                    {
                        variables.map((item, index) => {
                        return (
                            <th key={index}>{ item }</th>
                        )
                        })
                    }
                </tr>
            </thead>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.no}</td>
                        <td>{item.place}</td>
                        <td>{item.rdate}</td>
                        <td>{item.rtime}</td>
                        <td>{item.faculty}</td>
                        <td>{item.professor}</td>
                        <td>{item.purpose}</td>
                        <td>{item.approval ? "Approved" : "Refused"}</td>
                    </tr>
                ))}
            <tbody>
            </tbody>
        </Table>
    );
};

const Table = styled.table`
    width: 85%;
    margin: 1rem;

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }
`;

export default ReservationTable;
