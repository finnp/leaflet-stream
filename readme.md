# leaflet-stream
[![NPM](https://nodei.co/npm/leaflet-stream.png)](https://nodei.co/npm/leaflet-stream/)


Pipe geojson objects into a leaflet map object. Every object will be on their own 
layer and geojson properties will be converted to popups.

```js
var leafletstream = require('leaflet-stream')

var stream = leafletstream(map)

stream.write({
    "type": "Feature",
    "properties": {
      "name": "Eiffel Tower",
      "description": "The Eiffel Tower is an iron lattice tower located on the Champ de Mars in Paris.",
      "rating": 4.7,
      "height": "301m"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.294481,48.85837]
    }
})

stream.end()
```

![Eiffel Tower]('screen.png')

This module is similar to and inspired by leaflet-geojson-stream.