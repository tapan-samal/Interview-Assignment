import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";

const App = () => {
  const [data, setData] = useState([]);
  const [colDefs, setColDefs] = useState([
    { field: "id", width: "80px" },
    { field: "userId", width: "100px" },
    { field: "title", width: "400px"},
    { field: "body", width: "666px" },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <div className="container">
          <h3>List of Posts:</h3>
          <div className="ag-theme-quartz" style={{ height: 520 }}>
            <AgGridReact
              rowData={data}
              columnDefs={colDefs}
              pagination={true}
              paginationPageSize={10}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default App;
