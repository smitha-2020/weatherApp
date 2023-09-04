import { Card } from "react-bootstrap";
import { getKelvinToCelcius, getUnixTime } from "../services/formatterServices";

const CurrentWeather = (props) => {
  if (!props.weathertoday) {
    return null;
  }
  return (
    props.weathertoday && (
      <div className="justify-content-md-center">
        <Card className="text-center">
          <Card.Header>
            <span>{props.weathertoday["name"]}</span>,
            <span>{props.weathertoday["sys"]["country"]}</span>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>{props.weathertoday["weather"][0]["main"]}</p>
              <p>
                <img
                  src={`${process.env.REACT_APP_OPEN_WEATHER_ICON_URL}${props.weathertoday["weather"][0]["icon"]}@2x.png`}
                  alt={props.weathertoday["weather"][0]["id"]}
                />
              </p>
              <span>
                Max:{getKelvinToCelcius(props.weathertoday["main"]["temp_max"])}
                °C
              </span>
              ,
              <span>
                Min:{getKelvinToCelcius(props.weathertoday["main"]["temp_min"])}
                °C
              </span>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {getUnixTime(props.weathertoday["dt"])}
          </Card.Footer>
        </Card>
      </div>
    )
  );
};

export default CurrentWeather;
