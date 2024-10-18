const mqtt = require("mqtt");
const client = mqtt.connect("tcp://broker.mqtt.cool:1883");
const topics = ["mustafa"];

client.on("connect", () => {
  console.log("[+] Client connected");

  client.subscribe(topics, () => {
    console.log(`Subscribing this topics: ${topics}`);
    setTimeout(() => {
      client.publish(topics[0], "naber");
    }, 3000);
  });
});

client.on("message", (topic, message) => {
  console.log({ topic, message, str: message.toString() });
});
