var L = require('leaflet')
// var Writable = require('readable-stream').Writable
var writable = require('stream-wrapper').writable

function stream(map) {

  function write(chunk, enc, next) {
    var layer = L.geoJson(chunk)
    var label = createLabel(chunk.properties)

    if(label.length > 0) layer.bindPopup(label)
    layer.addTo(map)
    next()
  }
  
  return writable({objectMode: true}, write)
}

function createLabel(props) {
  if(!props) return ''
  var label = ''
  if(props.name) {
    label += '<h3>' + props.name + '</h3>'
    delete props.name
  }
    
  if(props.description) {
    label += '<p>' + props.description + '</p>'
    delete props.description
  }

  if(Object.keys(props).length > 0) {
    label += '<table class="geojsonproperties">'
    for(key in props) {
      var value = props[key]
      label += '<tr><td>' + key + '</td><td>' + value + '</td></tr>'
    }
    label += '</table>'
  }
  return label
}

module.exports = stream