'use strict'


console.log('Setup connection client...');

require('dotenv').config()
const mqtt = require('mqtt');

const USERNAME = process.env.MQTT_USERNAME
const KEY = process.env.MQTT_KEY;
const PORT = process.env.MQTT_PORT
const HOST = process.env.MQTT_HOST
const client = mqtt.connect(`mqtt://${USERNAME}:${KEY}@${HOST}:${PORT}`);

const subscriptions = [
  `${USERNAME}/feeds/bonsai.moisturea`,
  `${USERNAME}/feeds/bonsai.moistureb`,

  `${USERNAME}/feeds/bonsai.temperature`,
  `${USERNAME}/feeds/bonsai.ambientlight`,

  `${USERNAME}/feeds/bonsai.dht22-humidity`,
  `${USERNAME}/feeds/bonsai.dht22-temperature`,
]

console.log('Setup connection handler...');

client.on('connect', (error, other)=>{
  console.log({arguments})
  if (error){
    console.log(`CONNECTION ERROR:`);
    console.log({error})
  }
  if (other){
    console.log(`CONNECTION OTHER:`);
    console.log({other})
  }

  const subscriptionHandler = function (err, other) {
    console.log('Subscribe callback')
    console.log({err});
    console.log({other})
  };

  subscriptions.forEach(subscription => {
    console.log(`Setup subscription: ${subscription}`)
    client.subscribe(subscription, subscriptionHandler)
  });

});

console.log('Setup message handler...');

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(`${Date.now()} ${topic}: ${message.toString()}`);
});

console.log('INITIALISED');
