import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useTable, usePagination } from "react-table";
import COLUMNS from "../TableColumn";
import "./PassengerHistoryTable.css";

function PassengerHistoryTable() {
  const [tableData, setTableData] = useState([]);

  const columns = useMemo(() => COLUMNS, []);
  const tableInstance = useTable({
    columns,
    data: tableData,
  }, usePagination);
  console.log("history ===>", tableData);
  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize, state, prepareRow } =
    tableInstance;
    const { pageIndex, pageSize } = state
    const handleChange = (e)=>{
       const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
       gotoPage(pageNumber)
    }
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
    <>
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
        {page.map((row) => {
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
    <div style={{marginTop: '10px'}}>
        <span>
            Page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length} {' '}
            </strong>
        </span>
        <span>
            | Go to page: {' '}
            <input type="number" defaultValue={pageIndex + 1} onChange={handleChange} style={{width: '50px'}}/>
        </span>
        <select value={pageSize} name="" id="" onChange={(e)=>setPageSize(+e.target.value)} style={{height: '22px', borderRadius: '0px'}}>
            <option value="10">show 10</option>
            <option value="20">show 20</option>
        </select>
        <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={()=> gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
    </div>
    </>
  );
}

export default PassengerHistoryTable;
