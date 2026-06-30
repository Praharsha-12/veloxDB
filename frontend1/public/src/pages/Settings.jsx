import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Settings.css";
function Settings() {
  return (
    <>
      <Navbar />

      <div className="main">

        <Sidebar />

        <div className="content">

          <h1>Settings</h1>

          <p>Server Port : 6379</p>

          <p>Memory Limit : 512 MB</p>

          <p>Snapshot Interval : 5 min</p>

        </div>

      </div>
    </>
  );
}

export default Settings;