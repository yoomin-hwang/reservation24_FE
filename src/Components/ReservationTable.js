import styled from "styled-components";
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

import { getAllBoardAPI } from "../API/AxiosAPI";

function ReservationTable() {
  const [data, setData] = useState([]);
  
  // useEffect(() => {
  //   fetch("/Data/data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  const getAllBoard = async () => {
    try {
      const response = await getAllBoardAPI();
      setData(response);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllBoard();
  }, []);

  // Define columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'NO', width: 40 },
    { field: 'roomName', headerName: 'Place', width: 150 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'startTime', headerName: 'Start Time', width: 90 },
    { field: 'endTime', headerName: 'End Time', width: 90 },
    { field: 'userFaculty', headerName: 'Faculty', width: 130 },
    { field: 'userName', headerName: 'Professor', width: 130 },
    { field: 'purpose', headerName: 'Purpose', width: 130 }
  ];

  // Generate rows with unique id field
  const rows = data.map((item, index) => ({
    id: index,
    ...item
  }));

  return (
    <TableContainer >
      <StyledDataGrid 
        pagination
        rows={rows}
        columns={columns}
        autoPageSize
        checkboxSelection
      />
    </TableContainer>
  );
};

const TableContainer = styled.div`
  height: 423px;
  width: 100%;
  margin: 1rem 0;
`;

const StyledDataGrid = styled(DataGrid)`
  background-color: #ECECEC;
`;

export default ReservationTable;

// function ReservationTable () {
//     const [data, setData] = useState([]);
//     const variables = ["NO", "Place", "Date", "Time", "Faculty", "Professor", "Purpose", "Approval"];
      
//     useEffect(() => {
//     fetch("/Data/data.json")
//         .then((res) => res.json())
//         .then((data) => {
//         setData(data);
//         // console.log(data);
//         });
//     }, []);

//     return (
//         <Table>
//             <thead>
//                 <tr>
//                     {
//                         variables.map((item, index) => {
//                         return (
//                             <th key={index}>{ item }</th>
//                         )
//                         })
//                     }
//                 </tr>
//             </thead>
//                 {data.map((item, index) => (
//                     <tr key={index}>
//                         <td>{item.no}</td>
//                         <td>{item.place}</td>
//                         <td>{item.rdate}</td>
//                         <td>{item.rtime}</td>
//                         <td>{item.faculty}</td>
//                         <td>{item.professor}</td>
//                         <td>{item.purpose}</td>
//                         <td>{item.approval ? "Approved" : "Refused"}</td>
//                     </tr>
//                 ))}
//             <tbody>
//             </tbody>
//         </Table>
//     );
// };

// const Table = styled.table`
//     width: 85%;
//     margin: 1rem;

//     th, td {
//         border: 1px solid #C7DFDF;
//         padding: 8px;
//     }

//     th {
//         padding-top: 12px;
//         padding-bottom: 12px;
//         text-align: left;
//         background-color: #2051FF;
//         color: white;
//     }

//     tr:nth-child(even) {
//         background-color: #f2f2f2;
//     }

//     tr:hover {
//         background-color: #ddd;
//     }
// `;

// export default ReservationTable;
