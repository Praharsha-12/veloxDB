import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8082/api";

export default function Key() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  // Load all keys
  const loadData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/all`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Add key
  const addKey = async () => {
    if (!key || !value) return;

    try {
      await axios.get(`${BASE_URL}/set?key=${key}&value=${value}`);
      setKey("");
      setValue("");
      loadData();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete key
  const deleteKey = async (k) => {
    try {
      await axios.get(`${BASE_URL}/delete/${k}`);
      loadData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Keys</h2>

      {/* INPUT */}
      <input
        placeholder="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <input
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addKey}>Add Key</button>

      <hr />

      {/* TABLE */}
      <table border="1" width="50%">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">No keys found</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.key}>
                <td>{item.key}</td>
                <td>{item.value}</td>
                <td>
                  <button onClick={() => deleteKey(item.key)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}