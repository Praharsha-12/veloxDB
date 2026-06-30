import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    totalKeys: 0,
    memoryUsage: "0 MB",
    clients: 0,
  });

  useEffect(() => {
    API.get("/stats")
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>VeloxDB Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h3>Memory</h3>
          <h2>{stats.memoryUsage}</h2>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h3>Keys</h3>
          <h2>{stats.totalKeys}</h2>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h3>Clients</h3>
          <h2>{stats.clients}</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;