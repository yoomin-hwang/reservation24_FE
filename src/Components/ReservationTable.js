import styled from "styled-components";
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

import { deleteReserveAPI, getAllBoardAPI } from "../API/AxiosAPI";
import { useNavigate } from "react-router-dom";

function ReservationTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  
  // useEffect(() => {
  //   fetch("/Data/data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  //
  
  // 수정 기능 꼭 필요하지 않다고 생각됨
  // const handleEdit = (boardId) => {
  //   navigate("/reserve");
  // };

  const handleDelete = async (boardId) => {
    if (window.confirm("예약 내역을 삭제하시겠습니까?")) {
      try {
        const response = await deleteReserveAPI(boardId);
        console.log(response);
        setData(data.filter(item => item.id !== boardId));
      } catch(err) {
        console.error(err);
      }
    }
  };

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
    { field: 'roomName', headerName: '강의실', width: 140 },
    { field: 'date', headerName: '날짜', width: 120 },
    { field: 'startTime', headerName: '시작 시간', width: 120 },
    { field: 'endTime', headerName: '끝 시간', width: 120 },
    { field: 'userFaculty', headerName: '학부', width: 140 },
    { field: 'userName', headerName: '예약자명', width: 120 },
    { field: 'purpose', headerName: '목적', width: 140 },
    {
      field: 'actions',
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <>
          {/* <Button onClick={() => handleEdit(params.row.id)}>수정</Button> */}
          <Button style={{backgroundColor: "#E92D1D", color: "#FAFFFF"}} onClick={() => handleDelete(params.row.id)}>삭제</Button>
        </>
      ),
      sortable: false
    }
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
        disableColumnResize
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
  width: 100%;
  background-color: #ECECEC;
`;

const Button = styled.button`
    width: 4rem;
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
