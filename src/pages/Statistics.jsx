import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import "./Statistics.css";
function Statistics() {
  return (
    <>
      <Navbar />

      <div className="main">

        <Sidebar />

        <div className="content">

          <h1>Statistics</h1>

          <div className="cards">

            <StatsCard title="Requests" value="1024" />

            <StatsCard title="Cache Hits" value="900" />

            <StatsCard title="Cache Miss" value="124" />

          </div>

        </div>

      </div>
    </>
  );
}

export default Statistics;