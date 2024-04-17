import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import session from "express-session";

const app = express();
const port = 4000;
const apiKey = "/CEbqArsxN+VpaQ/QxIx6Q==iv9CGVeXvzR5bYcq";
const API_URL = "https://api.calorieninjas.com/v1";
app.use(express.static("public"));

const config = {
  headers: { "X-Api-Key": apiKey },
};

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  try {
    const query = "100g onions";
    const response = await axios.get(
      `${API_URL}/nutrition?query=` + query,
      config,
    );
    const result = JSON.stringify(response.data);
    console.log(result);
  } catch (error) {
    console.log(JSON.stringify(error.response.data));
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port} `);
});
