# WeatherApp

Simple One page Application which shows the Current weather and the forecast based on the browser's Geolocation.
- Backend developed in Nodejs and Koa
- Frontend developed in React,react-bootstrap
- Solution is containerized
✨ ✨
![alt text](https://github.com/smitha-2020/weatherApp/blob/main/weatherApp.png)
![alt text](https://github.com/smitha-2020/weatherApp/weatherAppfront.png)

- Deployed in AWS EC2 and ECR.


# Steps to replicate(Installation):
steps to run the code locally without the docker installed:
- clone the Repository
- Install the dependencies by changing to backend.
```sh
npm install
```
- Install the dependencies by changing to frontendapp.
```sh
npm install
```
- create the .env file in the frontendapp folder with credentials
```sh
REACT_APP_PORT=3000
REACT_APP_FRONT_URL=http://localhost:9000
REACT_APP_OPEN_WEATHER_ICON_URL=https://openweathermap.org/img/wn/
```
- create a .env file in the backend folder with credentials(secret is the apikey provided by openweathermap api)
```sh
APPID=secret
MAP_ENDPOINT=https://api.openweathermap.org/data/2.5/
PORT=9000
```
```sh
cd backend && npm start
cd frontendapp && npm start
```
steps to run the code locally with the docker installed:
- create the .env file in the frontendapp folder with credentials
```sh
REACT_APP_PORT=3000
REACT_APP_FRONT_URL=http://localhost:9000
REACT_APP_OPEN_WEATHER_ICON_URL=https://openweathermap.org/img/wn/
```
- create a .env file in the backend folder with credentials(secret is the apikey provided by openweathermap api)
```sh
APPID=secret
MAP_ENDPOINT=https://api.openweathermap.org/data/2.5/
PORT=9000
```
- cd weatherapp
- docker-compose up -d
- Access the React frontpage using http://localhost:3000/
  
Solution is also deployed in AWS:
http://13.51.107.134:3000/
 
# Future Improvements:
- Including test cases for both backend and frontend


