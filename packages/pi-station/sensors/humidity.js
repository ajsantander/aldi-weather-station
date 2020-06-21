const fs = require("fs");
const sensor = require("node-dht-sensor").promises;

async function execDht11() {
  try {
    const res = await sensor.read(11, 4);
    var obj = {};
    obj = {
      temp: `${res.temperature.toFixed(1)}°C`,
      humidity: `${res.humidity.toFixed(1)}%`,
    };
    const output = JSON.stringify(obj);
    fs.writeFile(__dirname + "/../output/humidity.json", output, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  } catch (err) {
    console.error("Failed to read sensor data:", err);
  }
}

module.exports = {
  execDht11,
};
