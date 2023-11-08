import React, { useState } from "react";
import "./style.css"
import data from "../../../data/generated.json";
import { pagination } from "../../../data/data";
import { Button } from "@chakra-ui/react";

const Table = () => {

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1)

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
            {
                pagination(page, limit).map((data, index) => (
                    <tr key={data._id}>
                        <td>{(index+(limit*(page-1)))+1}</td>
                        <td>{data.teacherName}</td>
                        <td>{data.teacherId}</td>
                        <td>{data.Department}</td>
                        <td>{data.students}</td>
                        <td>{data.Status?"ok":"no ok"}</td>
                        <td><a href="a">{"View More >"}</a></td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      {
        (Array.from({length:Math.ceil(data.length/limit)})).map((v, i) =>(
          <Button key={i} onClick={() => setPage(i+1)} style={{backgroundColor:page === i+1 ? "blue" : ""}}>{i+1}</Button>
        ))
      }
    </div>
  );
};

export default Table;
