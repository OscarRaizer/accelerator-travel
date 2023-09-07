import L from '../../vendor/leaflet';

function initLeaflet() {

  L.Control.prototype._refocusOnMap = function _refocusOnMap(ev) {
    if (this._map && ev && ev.screenX > 0 && ev.screenY > 0) {
      this._map.getContainer().focus({preventScroll: true});
    }
  };

  const mapOptions = {
    center: [55.774836, 37.632664],
    zoom: 14,
  };

  const mapContainer = document.querySelector('#map');

  if (mapContainer) {
    const map = new L.map('map', mapOptions);

    const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    map.addLayer(layer);

    const iconOptions = {
      iconUrl: './img/sprite/icon-map-marker.svg',
      iconSize: [48, 48],
    };

    const customIcon = L.icon(iconOptions);

    const markerOptions = {
      title: 'MyLocation',
      clickable: true,
      draggable: false,
      icon: customIcon,
    };

    const marker = new L.Marker([55.774836, 37.632664], markerOptions);

    marker.addTo(map);
  }

  /* const map = new L.map('map', mapOptions);

  const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

  map.addLayer(layer);

  const iconOptions = {
    iconUrl: './img/sprite/icon-map-marker.svg',
    iconSize: [48, 48],
  };

  const customIcon = L.icon(iconOptions);

  const markerOptions = {
    title: 'MyLocation',
    clickable: true,
    draggable: false,
    icon: customIcon,
  };

  const marker = new L.Marker([55.774836, 37.632664], markerOptions);

  marker.addTo(map); */
}

export default initLeaflet;
