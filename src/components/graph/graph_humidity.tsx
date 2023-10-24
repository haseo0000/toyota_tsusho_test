import { Line } from "react-chartjs-2";
import { createDateTime } from "../../utils/createDate";

const data = {
  labels: createDateTime(),
  datasets: [
    {
      label: "Device-01",
      backgroundColor: "orange",
      borderColor: "orange",
      data: [0, 10, 5, 15, 20, 30, 10, 50],
    },
    {
      label: "Device-02",
      backgroundColor: "red",
      borderColor: "red",
      data: [0, 10, 15, 40, 30, 50, 50, 40],
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

function GraphHumidity() {
  return (
    <div className="layout-padding" style={{ width: "49vw" }}>
      <div style={{ marginBottom: "0.2rem" }}>Humidity</div>
      <div className="graph-height-layout">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default GraphHumidity;
