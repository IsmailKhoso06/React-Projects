import React from "react";

function Head({handleNameChange, handleDateChange, handleAddBtnClicked}) {
  return (
    <>
      <div className="row my-3">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter To Do Item Here"
            style={{ width: "430px", fontSize: "20px", padding: "10px" }}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            style={{ width: "432px", fontSize: "20px", padding: "10px" }}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-4">
          <button
            className="btn btn-success"
            style={{ width: "200px", fontSize: "20px", padding: "10px" }}
            onClick={handleAddBtnClicked}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default Head;
