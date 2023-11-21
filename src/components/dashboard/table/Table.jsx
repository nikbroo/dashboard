import React, { useEffect, useState } from "react";
import "./style.css";
import { pagination } from "../../../data/data";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { filterDispatch, searchDispatch } from "../../../reducers/dataSlice"; 

const Table = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState([]);

  const itemState = useSelector((state) => state.items.itemState)
  const itemDep = useSelector((state) => state.items.itemDep)
  const testSearchData = useSelector((state) => state.data.searchState)

  const dispatch = useDispatch();

  useEffect(() => {
    let {pageData,newData} = pagination(page, limit, itemState, itemDep);
    setTableData(pageData)
    dispatch(filterDispatch(newData))
  }, [itemState, itemDep, page])

  let filterDataFinal = useSelector((state) => state.data.dataState)

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Record ID</th>
            <th>Teacher Name</th>
            <th>Teacher Id.</th>
            <th>Department</th>
            <th>Student</th>
            <th>Status</th>
            <th>All Details</th>
          </tr>
        </thead>
        <tbody>
          {(testSearchData.length===0? tableData : testSearchData).map((data, index) => (
            <tr key={data._id}>
              <td>{index + limit * (page - 1) + 1}</td>
              <td>{data.teacherName}</td>
              <td>{data.teacherId}</td>
              <td>{data.Department}</td>
              <td>{data.students}</td>
              <td>{data.Status ? "ok" : "no ok"}</td>
              <td>
                <a href="a">{"View More >"}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {Array.from({ length: Math.ceil((testSearchData.length===0? filterDataFinal : testSearchData).length / limit) }).map((v, i) => (
        <Button
          key={i}
          onClick={() => setPage(i + 1)}
          style={{ backgroundColor: page === i + 1 ? "blue" : "" }}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
};

export default Table;
