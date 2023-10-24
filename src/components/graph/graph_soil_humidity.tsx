import { Line } from "react-chartjs-2";
import { createDateTime } from "../../utils/createDate";

const data = {
  labels: createDateTime(),
  datasets: [
    {
      label: "Device-01",
      backgroundColor: "orange",
      borderColor: "orange",
      data: [0, 0.25, 0, 0, 0.25, 0.25, 0, 0.25],
    },
  ],
};

const options = {
  aspectRatio: 1,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
    },
  },
};

function GraphSoilHumidity() {
  return (
    <div className="layout-padding" style={{ width: "49vw" }}>
      <div style={{ marginBottom: "0.2rem" }}>Soil_humidity</div>
      <div className="graph-height-layout">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default GraphSoilHumidity;
