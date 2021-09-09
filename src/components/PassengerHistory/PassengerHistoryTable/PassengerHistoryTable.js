import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useTable } from "react-table";
import COLUMNS from "../TableColumn";
import "./PassengerHistoryTable.css";

function PassengerHistoryTable() {
  const [tableData, setTableData] = useState([]);

  const columns = useMemo(() => COLUMNS, []);
  const tableInstance = useTable({
    columns,
    data: tableData,
  });
  console.log("history ===>", tableData);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  useEffect(() => {
    const getHistory = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
      
        const res = await axios.get(
          `http://localhost:3000/v1/passenger/ride-history`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        if (res.status === 200) {
          setTableData(res.data.offerDetails);
        }
      } catch (error) {
        console.log(error.response);
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

export default PassengerHistoryTable;
