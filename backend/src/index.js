const debug = require("debug")("weathermap");
const Koa = require("koa");
const router = require("koa-router")();
const cors = require("kcors");

require("dotenv").config();
const {
  handleCurrentWeatherRequest,
  handleWeatherRequest,
} = require("./Weather/RequestHandling");

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.error("Error handling request:", error);
    ctx.status = error.status || 500;
    ctx.body = { error: error.message || "Internal Server Error" };
  }
});

//Returns Weather Listing for a  span of 3 hours for next 5 days.
router.get("/api/weather", handleWeatherRequest);

//Returns Current Weather
router.get("/api/weather/current", handleCurrentWeatherRequest);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
