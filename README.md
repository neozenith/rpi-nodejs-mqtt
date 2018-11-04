# Raspberry Pi MQTT Client

Requires sqlite3 as a backing datastore

https://github.com/mapbox/node-sqlite3#source-install

```bash
sudo apt-get install libsqlite3-dev
npm install sqlite3 --build-from-source --sqlite=/usr
```

Also needs a `.env` file with the following keys:

```bash
MQTT_USERNAME=neozenith
MQTT_KEY=<insert API key here>
MQTT_HOST=io.adafruit.com
MQTT_PORT=1883
```

But otherwise

```
npm install
npm start
```
