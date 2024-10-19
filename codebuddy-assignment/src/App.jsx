import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Issue occurred while fetching API!");
        }
        const result = await response.json();
        setFetchData(result.slice(0, 9));
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchApi();
  }, []);

  const handleDeleteFirstName = () => {
    // Removes the first user in the list
    if (fetchData.length > 0) {
      setFetchData(fetchData.slice(1));
    }
  };

  const handleDeleteByID = (deleteId) => {
    setFetchData(fetchData.filter((data) => data.id !== deleteId));
  };

  return (
    <>
      <div className="container">
        {fetchData.length > 0 ? (
          fetchData.map((data) => (
            <div className="grid-item" key={data.id}>
              {data.name}
              <button
                className="delete"
                onClick={() => handleDeleteByID(data.id)}
              >
                delete
              </button>
            </div>
          ))
        ) : (
          <div>No users available</div>
        )}
      </div>
      {fetchData.length > 0 && (
        <button onClick={handleDeleteFirstName}>Delete By First Name</button>
      )}
    </>
  );
};

export default App;
