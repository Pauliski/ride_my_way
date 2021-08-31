import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useTable } from "react-table";
import COLUMNS from "../column";
import Moment from 'react-moment';
import './HistoryTable.css'

function HistoryTable() {
  const [tableData, setTableData] = useState([]);
  
  const columns = useMemo(() => COLUMNS, []);
  console.log("history===>", tableData);
  
  const tableInstance = useTable({
    columns,
    data : tableData
  });
  console.log("history ===>", tableData);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
   
    const getHistory = async () => {
      try {
        const token = localStorage.getItem("driverToken");
        console.log(token);
        const res = await axios.get(
          `http://localhost:3000/v1/driver/ride-history`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(token);
        if (res.status === 200) {
          console.log(res);
          setTableData(res.data.offerDetails);
          
        }
        
      } catch (error) {
        console.log(error);
      }
    };
    getHistory();
  }, []);
  
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")} </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")} </td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default HistoryTable;
