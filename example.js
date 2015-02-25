var map = require('leaflet-default')()

var leafletstream = require('./')

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