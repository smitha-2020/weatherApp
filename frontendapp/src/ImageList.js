import Table from "react-bootstrap/Table";
import { getKelvinToCelcius } from "../services/formatterServices";

function getTableHeaderNames() {
  return [
    "Date",
    "MinTemp",
    "MaxTemp",
    "FeelsLike",
    "Humidity",
    "Conditions",
    "Pressure",
  ];
}

const ImageList = (props) => {
  return (
    props.weatherforecast.list && (
      <Table striped hover border>
        <thead className="sticky-top bg-info text-light">
          <tr>
            {getTableHeaderNames().map((headerName) => (
              <th key={`${headerName}`}>
                <div className="d-flex justify-content-between align-items-center h-100">
                  <span>{headerName}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody id="car-table-tbody" className={"h-100"}>
          {props.weatherforecast.list.length !== 0 ? (
            props.weatherforecast.list.map((weather) => (
              <tr key={`${weather["dt_txt"]}`}>
                <td>{weather["dt_txt"]}</td>
                <td>{getKelvinToCelcius(weather["main"]["temp_max"])}°C</td>
                <td>{getKelvinToCelcius(weather["main"]["temp_min"])}°C</td>
                <td>{getKelvinToCelcius(weather["main"]["feels_like"])}°C</td>
                <td>{weather["main"]["humidity"]}</td>
                <td>
                  {weather["weather"][0]["main"]}
                  <span>
                    <img
                      src={`${process.env.REACT_APP_OPEN_WEATHER_ICON_URL}${weather["weather"][0]["icon"]}@2x.png`}
                      alt={weather["weather"][0]["main"]}
                    />
                  </span>
                </td>
                <td>{weather["main"]["pressure"]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Records Found!!</td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  );
};

export default ImageList;
