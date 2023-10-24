import "./App.css";
import GraphHumidity from "./components/graph/graph_humidity";
import GraphSoilHumidity from "./components/graph/graph_soil_humidity";
import GraphSoilTemper from "./components/graph/graph_soil_temper";
import GraphTemperature from "./components/graph/graph_temperature";
import Humidity from "./components/last_humidity";
import LastTemperature from "./components/last_temperature";
import Temperature from "./components/temperature";
import TotalSensor from "./components/totalSensor";
import "chart.js/auto";

function App() {
  return (
    <>
      <section>
        <TotalSensor />
        <LastTemperature />
        <Humidity />
        <Temperature />
      </section>
      <section>
        <GraphTemperature />
        <GraphHumidity />
        <GraphSoilTemper />
        <GraphSoilHumidity />
      </section>
    </>
  );
}

export default App;
