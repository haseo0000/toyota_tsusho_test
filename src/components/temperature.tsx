const temperatureData = [
  {
    name: "Battery Sensor-Device04",
    percentage: "100",
  },
  {
    name: "Battery Sensor-Device02",
    percentage: "100",
  },
  {
    name: "Battery Sensor-Device06",
    percentage: "100",
  },
  {
    name: "Battery Sensor-Device09",
    percentage: "100",
  },
  {
    name: "Battery Sensor-Device07",
    percentage: "100",
  },
  {
    name: "Battery Sensor-Device08",
    percentage: "100",
  },
  {
    name: "Battery Sensor-Device05",
    percentage: "100",
  },
  {
    name: "Battery Sensor-Device01",
    percentage: "100",
  },
];

function Temperature() {
  return (
    <div className="layout-padding">
      <div style={{ marginBottom: "1rem" }}>Temperature</div>
      <div style={{ overflow: "auto", height: "175px" }}>
        {temperatureData.map((item, idx) => (
          <div key={idx} className="temperture-layout">
            <div className="left-layout">
              <span className="text">{item.name}</span>
              <div className="line"></div>
            </div>
            <div className="right-layout">
              <span>{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Temperature;
