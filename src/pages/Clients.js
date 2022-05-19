import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [dataCount, setDataCount] = useState(10);
  useEffect(() => {
    fetch(`https://fakerapi.it/api/v1/persons?_quantity=${dataCount}`)
      .then((res) => res.json())
      .then((data) => setClients(data.data))
      .catch((err) => console.log(err));
  }, [dataCount]);

  const handleChange = (e) => setDataCount(e.target.value);

  return (
    <div>
      <h4>
        <strong>Clients</strong>
      </h4>
      <hr />
      <div className="d-flex flex-row align-items-center mb-3">
        Show{" "}
        <span>
          <select
            onChange={handleChange}
            className="form-select form-select-sm mx-2"
            style={{ width: "unset" }}
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </span>{" "}
        entries.
      </div>
      <div className="table-responsive" style={{ width: "100%" }}>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {clients.length >= 1 ? (
              clients.map((data) => (
                <tr key={data.id} style={{ verticalAlign: "middle" }}>
                  <td>
                    <img
                      src={data.image}
                      alt={data.firstname}
                      style={{ maxHeight: "50px" }}
                    />
                  </td>
                  <td>{`${data.firstname} ${data.lastname}`}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.gender}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  <div className="spinner-border spinner-border-sm"></div>
                </td>
              </tr>
            )}
          </tbody>
          {clients.length >= 1 && (
            <tfoot>
              <tr>
                <th colSpan="5">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <p className="m-0">Showing 1 to 10 of 50 entries</p>
                    </div>
                    <div>
                      <button className="btn btn-outline-dark btn-sm ms-2">
                        <FaArrowLeft />{" "}
                        <span className=" d-none d-sm-inline-block">Prev</span>
                      </button>
                      <button className="btn btn-outline-dark btn-sm ms-2">
                        <span className=" d-none d-sm-inline-block">Next</span>{" "}
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
};

export default Clients;
