import React, { useState } from 'react'

const ViewFlight = () => {
  const [data, changeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    axios
      .get("https://host-demo-app.onrender.com/api/flights")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">View Flight Details</h2>

        {loading && (
  <div className="loading-container">
    <div
      className="spinner-border text-success loading-spinner"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>

    <h4 className="loading-text mt-3">
      Fetching Flight Details...
    </h4>
  </div>
)}


        <div className="table-responsive">
          <table className="table table-dark table-hover table-bordered align-middle text-center">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Flight Number</th>
                <th>Airline</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Departure_Date</th>
                <th>Departure_Time</th>
                <th>Arrival_Time</th>
                <th>fare</th>
                <th>Total_Seats</th>
                <th>Available_Seats</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((value, index) => (
                  <tr key={value.flight_number}>
                    <td>{value.airline}</td>
                    <td>{value.origin}</td>
                    <td>{value.destination}</td>
                    <td>{value.departure_date}</td>
                    <td>{value.departure_time}</td>
                    <td>{value.arrival_time}</td>
                    <td>{value.city}</td>
                    <td>{value.fare}</td>
                    <td>{value.total_seats}</td>
                    <td>{value.available_seats}</td>
                    <td>{value.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10">No donors found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewFlight;