// Taiwan Pilgrim Building Map - Map Module

/**
 * Map instance
 */
let map = null;

/**
 * Marker cluster group
 */
let markerCluster = null;

/**
 * All temple markers
 */
let markers = [];

/**
 * Current temple data
 */
let templeData = [];

/**
 * Initialize the Leaflet map
 * @returns {object} Leaflet map instance
 */
function initMap() {
  // Create map centered on Taiwan
  map = L.map('map', {
    center: [23.7, 120.9],
    zoom: 8,
    minZoom: 7,
    maxZoom: 18,
    zoomControl: true
  });

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // Initialize marker cluster
  markerCluster = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true,
    iconCreateFunction: function(cluster) {
      const count = cluster.getChildCount();
      let size = 'small';

      if (count > 10) {
        size = 'medium';
      }
      if (count > 20) {
        size = 'large';
      }

      return L.divIcon({
        html: `<div><span>${count}</span></div>`,
        className: `marker-cluster marker-cluster-${size}`,
        iconSize: L.point(40, 40)
      });
    }
  });

  map.addLayer(markerCluster);

  console.log('Map initialized');
  return map;
}

/**
 * Create custom icon based on deity type
 * @param {string} deity - Deity name
 * @returns {object} Leaflet icon
 */
function createDeityIcon(deity) {
  // Icon colors based on deity type
  const deityColors = {
    "媽祖": "#FF6B6B",          // Red-pink for Mazu
    "五府千歲": "#9B59B6",      // Purple for Wang Ye
    "保生大帝": "#3498DB",      // Blue for Baosheng Dadi
    "關聖帝君": "#E74C3C",      // Red for Guan Di
    "呂洞賓": "#F39C12",        // Orange for Lu Dongbin
    "佛教": "#9B59B6",          // Purple for Buddhist
    "觀音菩薩": "#E91E63",      // Pink for Guanyin
    "土地公": "#8D6E63"         // Brown for Earth God
  };

  const color = deityColors[deity] || "#C8102E";

  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div class="marker-pin" style="background-color: ${color};">
             <i class="fas fa-place-of-worship"></i>
           </div>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -42]
  });
}

/**
 * Create popup content for a temple
 * @param {object} temple - Temple data object
 * @returns {string} HTML string for popup
 */
function createPopupContent(temple) {
  const lang = window.i18n.getCurrentLanguage();
  const name = lang === 'zh' ? temple.nameZh : temple.nameEn;
  const address = lang === 'zh' ? temple.addressZh : temple.addressEn;
  const description = lang === 'zh' ? temple.description.zh : temple.description.en;
  const deityText = window.i18n.getDeityText(temple.deity);
  const regionText = window.i18n.getRegionText(temple.region);

  return `
    <div class="popup-content">
      <div class="popup-temple-name">${temple.nameZh}</div>
      <div class="popup-temple-name-en">${temple.nameEn}</div>
      <div class="popup-info">
        <strong>${window.i18n.getText('address')}:</strong><br>
        ${temple.addressZh}<br>
        ${temple.addressEn}
      </div>
      <div class="popup-info">
        <strong>${window.i18n.getText('deity')}:</strong> ${deityText}
      </div>
      <button class="popup-btn" onclick="showTempleModal(${temple.id})">
        ${window.i18n.getText('viewDetails')}
      </button>
    </div>
  `;
}

/**
 * Create a marker for a temple
 * @param {object} temple - Temple data object
 * @returns {object} Leaflet marker
 */
function createMarker(temple) {
  const icon = createDeityIcon(temple.deity);
  const marker = L.marker([temple.lat, temple.lng], { icon });

  // Bind popup
  marker.bindPopup(createPopupContent(temple), {
    maxWidth: 300,
    minWidth: 250
  });

  // Store temple data in marker
  marker.templeData = temple;

  // Add click event
  marker.on('click', function() {
    console.log(`Marker clicked: ${temple.nameZh}`);
  });

  return marker;
}

/**
 * Create all markers from temple data
 * @param {array} temples - Array of temple data objects
 */
function createAllMarkers(temples) {
  templeData = temples;
  markers = temples.map(temple => createMarker(temple));

  // Add all markers to cluster
  markerCluster.addLayers(markers);

  console.log(`Created ${markers.length} markers`);
}

/**
 * Show temple modal with detailed information
 * @param {number} templeId - Temple ID
 */
function showTempleModal(templeId) {
  const temple = templeData.find(t => t.id === templeId);
  if (!temple) {
    console.error(`Temple not found: ${templeId}`);
    return;
  }

  const lang = window.i18n.getCurrentLanguage();
  const name = lang === 'zh' ? temple.nameZh : temple.nameEn;
  const address = lang === 'zh' ? temple.addressZh : temple.addressEn;
  const description = lang === 'zh' ? temple.description.zh : temple.description.en;
  const deityText = window.i18n.getDeityText(temple.deity);
  const regionText = window.i18n.getRegionText(temple.region);

  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <h2 class="modal-temple-name">${temple.nameZh}</h2>
    <p class="modal-temple-name-en">${temple.nameEn}</p>

    <div class="modal-section">
      <strong>${window.i18n.getText('address')}</strong>
      <p>${temple.addressZh}<br>${temple.addressEn}</p>
    </div>

    <div class="modal-section">
      <strong>${window.i18n.getText('phone')}</strong>
      <p>${temple.phone || 'N/A'}</p>
    </div>

    ${temple.website ? `
    <div class="modal-section">
      <strong>${window.i18n.getText('website')}</strong>
      <p><a href="${temple.website}" target="_blank" rel="noopener">${temple.website}</a></p>
    </div>
    ` : ''}

    <div class="modal-section">
      <strong>${window.i18n.getText('deity')}</strong>
      <p>${deityText}</p>
    </div>

    <div class="modal-section">
      <strong>${window.i18n.getText('region')}</strong>
      <p>${regionText}</p>
    </div>

    <div class="modal-section">
      <strong>${window.i18n.getText('description')}</strong>
      <p class="modal-description">${description}</p>
    </div>

    <button class="btn-add-route" onclick="addTempleToRoute(${temple.id})">
      ${window.i18n.getText('addToRoute')}
    </button>
  `;

  // Show modal
  const modal = document.getElementById('temple-modal');
  modal.classList.add('active');
}

/**
 * Close temple modal
 */
function closeTempleModal() {
  const modal = document.getElementById('temple-modal');
  modal.classList.remove('active');
}

/**
 * Update marker popups when language changes
 */
function updateMarkerPopups() {
  markers.forEach(marker => {
    const temple = marker.templeData;
    marker.setPopupContent(createPopupContent(temple));
  });
}

/**
 * Filter markers based on selected deities and regions
 * @param {array} selectedDeities - Array of selected deity names
 * @param {array} selectedRegions - Array of selected region names
 */
function filterMarkers(selectedDeities, selectedRegions) {
  // Clear all markers from cluster
  markerCluster.clearLayers();

  // Filter and add back matching markers
  const filteredMarkers = markers.filter(marker => {
    const temple = marker.templeData;
    const deityMatch = selectedDeities.length === 0 || selectedDeities.includes(temple.deity);
    const regionMatch = selectedRegions.length === 0 || selectedRegions.includes(temple.region);
    return deityMatch && regionMatch;
  });

  markerCluster.addLayers(filteredMarkers);

  console.log(`Filtered to ${filteredMarkers.length} markers`);
}

/**
 * Focus map on a specific temple
 * @param {number} templeId - Temple ID
 */
function focusTemple(templeId) {
  const marker = markers.find(m => m.templeData.id === templeId);
  if (marker) {
    const temple = marker.templeData;
    map.setView([temple.lat, temple.lng], 15, {
      animate: true,
      duration: 0.5
    });
    marker.openPopup();
  }
}

/**
 * Get map instance
 * @returns {object} Leaflet map instance
 */
function getMap() {
  return map;
}

/**
 * Get all markers
 * @returns {array} Array of all markers
 */
function getAllMarkers() {
  return markers;
}

/**
 * Initialize map module
 * @param {array} temples - Array of temple data objects
 * @returns {object} Leaflet map instance
 */
function initMapModule(temples) {
  initMap();
  createAllMarkers(temples);

  // Set up modal close handlers
  const modalClose = document.getElementById('modal-close');
  if (modalClose) {
    modalClose.addEventListener('click', closeTempleModal);
  }

  const modal = document.getElementById('temple-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeTempleModal();
      }
    });
  }

  // Listen for language changes
  window.addEventListener('languageChanged', function(e) {
    updateMarkerPopups();
  });

  return map;
}

// Make functions globally available
window.showTempleModal = showTempleModal;
window.addTempleToRoute = function(templeId) {
  // This will be implemented in routing.js
  console.log(`Add temple ${templeId} to route`);
  closeTempleModal();
};

// Export functions for use in other modules
window.mapModule = {
  init: initMapModule,
  filter: filterMarkers,
  focus: focusTemple,
  getMap: getMap,
  getAllMarkers: getAllMarkers,
  updatePopups: updateMarkerPopups
};
