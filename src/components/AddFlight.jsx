import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";

const AddFlight = () => {
  const [input, changeInput] = useState({
    flight_number: "",
    airline: "",
    origin: "",
    destination: "",
    departure_date: "",
    departure_time: "",
    arrival_time: "",
    fare: "",
    total_seats: "",
    available_seats: "",
    status: "",
  });
  const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value });
  };
  const readValue = () => {
    console.log(input);
    axios
      .post("https://host-demo-app.onrender.com/api/add-flight", input)
      .then((response) => {
        console.log(response.data);
        alert("flight added");
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.response.data);
        console.log(error.response.status);
      });
  };
  return (
    <div>
      <NavBar />
      <h1 className="text-center">ADD FLIGHT</h1>

      <div className="container">
        <div className="row g-3">
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Flight Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="flight_number"
                  value={input.flight_number}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Airline</label>
                <input
                  type="text"
                  className="form-control"
                  name="airline"
                  value={input.airline}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Origin</label>
                <input
                  type="text"
                  className="form-control"
                  name="origin"
                  value={input.origin}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  name="destination"
                  value={input.destination}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Departure Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="departure_date"
                  value={input.departure_date}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Departure Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="departure_time"
                  value={input.departure_time}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Arrival Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="arrival_time"
                  value={input.arrival_time}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Fare (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  name="fare"
                  value={input.fare}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Total Seats</label>
                <input
                  type="number"
                  className="form-control"
                  name="total_seats"
                  value={input.total_seats}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Available Seats</label>
                <input
                  type="number"
                  className="form-control"
                  name="available_seats"
                  value={input.available_seats}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={input.status}
                  onChange={inputHandler}
                >
                  <option value="">Select Status</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="On Time">On Time</option>
                  <option value="Delayed">Delayed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div className="col-12">
                <button className="btn btn-primary mt-3" onClick={readValue}>
                  Add Flight
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFlight;
