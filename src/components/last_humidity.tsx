const humidityData = [
  {
    name: "SensorDevice-02",
    temp: "45.3",
  },
  {
    name: "SensorDevice-05",
    temp: "42.3",
  },
  {
    name: "SensorDevice-01",
    temp: "55.3",
  },
  {
    name: "SensorDevice-03",
    temp: "66.3",
  },
  {
    name: "SensorDevice-04",
    temp: "70.3",
  },
  {
    name: "SensorDevice-08",
    temp: "11.3",
  },
  {
    name: "SensorDevice-07",
    temp: "87.3",
  },
  {
    name: "SensorDevice-06",
    temp: "43.3",
  },
  {
    name: "SensorDevice-09",
    temp: "45.3",
  },
];

function Humidity() {
  return (
    <div className="layout-padding">
      <div>
        <span>Last Temperature</span>
      </div>
      <div className="header-layout">
        <span>device_name</span>
        <span>last_humidity</span>
      </div>
      <div className="data-list-layout">
        {humidityData.map((item, idx) => (
          <div key={idx} className="data-item-layout">
            <span className="device-name">{item.name}</span>
            <span className="device-temp">{item.temp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Humidity;
