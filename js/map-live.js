/**
 * Matriz de Coordenadas de Alta Precisão Geográfica (Costa Leste Realinhada)
 */
const US_EXACT_MAP_COORDS = {
  "SEATTLE": { top: 18.0, left: 16.0 }, "PORTLAND": { top: 24.0, left: 15.0 },
  "SAN FRANCISCO": { top: 45.0, left: 12.0 }, "SACRAMENTO": { top: 39.0, left: 13.0 },
  "LOS ANGELES": { top: 57.0, left: 18.5 }, "SAN DIEGO": { top: 64.0, left: 21.0 },
  "LAS VEGAS": { top: 50.0, left: 24.5 }, "PHOENIX": { top: 60.5, left: 29.5 },
  "TUCSON": { top: 67.5, left: 32.0 }, "SALT LAKE CITY": { top: 40.0, left: 32.0 },
  "BOISE": { top: 29.0, left: 27.0 }, "DENVER": { top: 45.0, left: 43.5 },
  "CHEYENNE": { top: 37.0, left: 42.5 }, "ALBUQUERQUE": { top: 56.0, left: 38.5 },
  "HELENA": { top: 23.5, left: 33.0 }, "BISMARCK": { top: 24.0, left: 49.5 },
  "PIERRE": { top: 31.0, left: 48.5 }, "OMAHA": { top: 40.0, left: 53.5 },
  "DES MOINES": { top: 39.0, left: 57.5 }, "KANSAS CITY": { top: 47.5, left: 54.5 },
  "ST. LOUIS": { top: 50.0, left: 61.0 }, "MINNEAPOLIS": { top: 30.0, left: 57.5 },
  "ST. PAUL": { top: 30.0, left: 58.0 }, "CHICAGO": { top: 40.0, left: 66.0 },
  "MILWAUKEE": { top: 35.5, left: 65.5 }, "MADISON": { top: 36.0, left: 63.5 },
  "SPRINGFIELD": { top: 46.5, left: 61.0 }, "INDIANAPOLIS": { top: 43.5, left: 69.0 },
  "LANSING": { top: 35.0, left: 71.0 }, "DETROIT": { top: 38.5, left: 73.0 },
  "COLUMBUS": { top: 42.5, left: 74.5 }, "CLEVELAND": { top: 38.5, left: 75.5 },
  "CINCINNATI": { top: 46.0, left: 71.0 }, "LOUISVILLE": { top: 49.0, left: 68.0 },
  "FRANKFORT": { top: 47.5, left: 69.5 }, "NASHVILLE": { top: 53.5, left: 68.5 },
  "MEMPHIS": { top: 58.0, left: 63.5 }, "DALLAS": { top: 64.5, left: 55.5 },
  "FORT WORTH": { top: 64.5, left: 54.0 }, "HOUSTON": { top: 73.5, left: 58.5 },
  "AUSTIN": { top: 70.0, left: 55.0 }, "SAN ANTONIO": { top: 75.0, left: 53.5 },
  "OKLAHOMA CITY": { top: 55.0, left: 53.0 }, "TULSA": { top: 52.5, left: 55.0 },
  "LITTLE ROCK": { top: 59.0, left: 61.0 }, "BATON ROUGE": { top: 71.0, left: 62.5 },
  "NEW ORLEANS": { top: 72.0, left: 65.0 }, "JACKSON": { top: 63.0, left: 63.0 },
  "MONTGOMERY": { top: 63.0, left: 68.0 }, "BIRMINGHAM": { top: 60.5, left: 67.0 },
  "ATLANTA": { top: 58.0, left: 73.0 }, "TALLAHASSEE": { top: 67.0, left: 74.0 },
  "JACKSONVILLE": { top: 66.0, left: 77.0 }, "ORLANDO": { top: 71.0, left: 78.5 },
  "TAMPA": { top: 72.5, left: 75.5 }, "MIAMI": { top: 79.0, left: 81.0 },
  "CHARLOTTE": { top: 53.5, left: 77.5 }, "RALEIGH": { top: 51.0, left: 80.0 },
  "COLUMBIA": { top: 58.5, left: 77.0 }, "CHARLESTON": { top: 61.5, left: 79.5 },
  "PHILADELPHIA": { top: 38.0, left: 85.0 }, "PHILADELPHIA, PA": { top: 38.0, left: 85.0 },
  "RICHMOND": { top: 46.0, left: 82.0 }, "VIRGINIA BEACH": { top: 48.0, left: 84.5 },
  "WASHINGTON": { top: 42.5, left: 82.5 }, "ANNAPOLIS": { top: 40.5, left: 83.5 },
  "BALTIMORE": { top: 40.0, left: 83.0 }, "TRENTON": { top: 37.0, left: 86.0 },
  "DOVER": { top: 41.5, left: 85.0 }, "NEW YORK": { top: 34.0, left: 87.0 },
  "NEWARK": { top: 35.0, left: 86.5 }, "HARTFORD": { top: 31.0, left: 88.0 },
  "PROVIDENCE": { top: 29.0, left: 89.5 }, "BOSTON": { top: 26.0, left: 90.5 },
  "CONCORD": { top: 25.0, left: 89.0 }, "MONTPELIER": { top: 23.0, left: 87.5 },
  "AUGUSTA": { top: 20.0, left: 90.0 }, "ALBANY": { top: 29.0, left: 86.5 },
  "HARRISBURG": { top: 40.0, left: 81.0 }, "PITTSBURGH": { top: 40.5, left: 78.0 },
  "BUFFALO": { top: 30.5, left: 82.5 }, "CHARLESTON (WV)": { top: 47.0, left: 77.0 },
  "JUNEAU": { top: 85.0, left: 23.0 }, "ANCHORAGE": { top: 80.0, left: 17.5 },
  "HONOLULU": { top: 86.0, left: 36.0 }, "HI": { top: 86.0, left: 36.0 },
  "AL": { top: 63.0, left: 68.0 }, "AK": { top: 80.0, left: 17.5 }, "AZ": { top: 60.5, left: 29.5 },
  "AR": { top: 59.0, left: 61.0 }, "CA": { top: 45.0, left: 12.0 }, "CO": { top: 45.0, left: 43.5 },
  "CT": { top: 31.0, left: 88.0 }, "DE": { top: 41.5, left: 85.0 }, "FL": { top: 71.0, left: 78.5 },
  "GA": { top: 58.0, left: 73.0 }, "ID": { top: 29.0, left: 27.0 }, "IL": { top: 40.0, left: 66.0 }, 
  "IN": { top: 43.5, left: 69.0 }, "IA": { top: 39.0, left: 57.5 }, "KS": { top: 47.5, left: 54.5 },
  "KY": { top: 49.0, left: 68.0 }, "LA": { top: 71.0, left: 62.5 }, "ME": { top: 20.0, left: 90.0 }, 
  "MD": { top: 40.5, left: 83.5 }, "MA": { top: 26.0, left: 90.5 }, "MI": { top: 35.0, left: 71.0 },
  "MN": { top: 30.0, left: 57.5 }, "MS": { top: 63.0, left: 63.0 }, "MO": { top: 50.0, left: 61.0 }, 
  "MT": { top: 23.5, left: 33.0 }, "NE": { top: 40.0, left: 53.5 }, "NV": { top: 50.0, left: 24.5 },
  "NH": { top: 25.0, left: 89.0 }, "NJ": { top: 36.0, left: 86.0 }, "NM": { top: 56.0, left: 38.5 }, 
  "NY": { top: 34.0, left: 87.0 }, "NC": { top: 51.0, left: 80.0 }, "ND": { top: 24.0, left: 49.5 },
  "OH": { top: 42.5, left: 74.5 }, "OK": { top: 55.0, left: 53.0 }, "OR": { top: 24.0, left: 15.0 }, 
  "PA": { top: 38.0, left: 85.0 }, "RI": { top: 29.0, left: 89.5 }, "SC": { top: 58.5, left: 77.0 },
  "SD": { top: 31.0, left: 48.5 }, "TN": { top: 53.5, left: 68.5 }, "TX": { top: 73.5, left: 58.5 }, 
  "UT": { top: 40.0, left: 32.0 }, "VT": { top: 23.0, left: 87.5 }, "VA": { top: 46.0, left: 82.0 },
  "WA": { top: 18.0, left: 16.0 }, "WV": { top: 47.0, left: 77.0 }, "WI": { top: 35.5, left: 65.5 }, 
  "WY": { top: 37.0, left: 42.5 }
};

function getPreciseCoordinates(locationString) {
  if (!locationString) return { top: 50, left: 50 };
  const clean = locationString.trim().toUpperCase();
  if (US_EXACT_MAP_COORDS[clean]) return US_EXACT_MAP_COORDS[clean];
  
  const parts = clean.split(/[\s,]+/);
  const lastPart = parts[parts.length - 1];
  if (US_EXACT_MAP_COORDS[lastPart]) return US_EXACT_MAP_COORDS[lastPart];

  for (const [key, coords] of Object.entries(US_EXACT_MAP_COORDS)) {
    if (clean.includes(key)) return coords;
  }

  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = clean.charCodeAt(i) + ((hash << 5) - hash);
  }
  return {
    top: 28 + Math.abs(hash % 45),
    left: 18 + Math.abs((hash >> 3) % 62)
  };
}

async function renderPreciseMap() {
  const container = document.querySelector('.map-wrapper');
  if (!container) return;

  try {
    const response = await fetch('https://guthrie-api-bridge-production.up.railway.app/api/guthrie-projects');
    if (!response.ok) throw new Error(`Erro na API: ${response.status}`);

    const projectsData = await response.json();
    
    container.querySelectorAll('.night-city-node, .night-svg-layer').forEach(el => el.remove());

    let grandTotalProjects = 0;
    const clustersMap = {};

    projectsData.forEach(item => {
      const rawLocation = item.location ? item.location.trim() : 'Unknown';
      const count = item.count || 1;
      grandTotalProjects += count;

      const coords = getPreciseCoordinates(rawLocation);

      if (coords) {
        const clusterTop = Math.round(coords.top * 3.5) / 3.5;
        const clusterLeft = Math.round(coords.left * 3.5) / 3.5;
        const clusterKey = `${clusterTop.toFixed(2)}-${clusterLeft.toFixed(2)}`;

        if (!clustersMap[clusterKey]) {
          clustersMap[clusterKey] = { top: `${clusterTop}%`, left: `${clusterLeft}%`, topNum: clusterTop, leftNum: clusterLeft, subCities: [] };
        }

        const existingCity = clustersMap[clusterKey].subCities.find(c => c.name.toUpperCase() === rawLocation.toUpperCase());
        if (existingCity) {
          existingCity.count += count;
        } else {
          clustersMap[clusterKey].subCities.push({ name: rawLocation, count: count });
        }
      }
    });

    const clustersToRender = Object.values(clustersMap);

    const specificCounter = document.getElementById('total-projects-counter');
    if (specificCounter) {
      specificCounter.textContent = grandTotalProjects >= 1000 ? (grandTotalProjects / 1000).toFixed(1) + 'k+' : grandTotalProjects + '+';
    }

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "night-svg-layer");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; overflow: visible;";

    const connections = new Set();
    clustersToRender.forEach((c1, i) => {
      let closestIdx = -1;
      let minDst = Infinity;
      clustersToRender.forEach((c2, j) => {
        if (i === j) return;
        const distance = Math.hypot(c2.leftNum - c1.leftNum, c2.topNum - c1.topNum);
        if (distance < 24) {
          connections.add(i < j ? `${i}-${j}` : `${j}-${i}`);
        }
        if (distance < minDst) {
          minDst = distance;
          closestIdx = j;
        }
      });
      if (closestIdx !== -1) {
        connections.add(i < closestIdx ? `${i}-${closestIdx}` : `${closestIdx}-${i}`);
      }
    });

    connections.forEach(pairKey => {
      const [iStr, jStr] = pairKey.split('-');
      const c1 = clustersToRender[parseInt(iStr)];
      const c2 = clustersToRender[parseInt(jStr)];

      const createLine = (className) => {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", c1.leftNum); line.setAttribute("y1", c1.topNum);
        line.setAttribute("x2", c2.leftNum); line.setAttribute("y2", c2.topNum);
        line.setAttribute("class", className);
        return line;
      };

      svg.appendChild(createLine("tracer-base-line"));
      
      const tracer = createLine("tracer-bullet-beam");
      tracer.style.animationDuration = `${(6 + Math.random() * 12).toFixed(2)}s`;
      tracer.style.animationDelay = `${(Math.random() * 8).toFixed(2)}s`;
      svg.appendChild(tracer);
    });

    container.appendChild(svg);

    clustersToRender.forEach(cluster => {
      let subCitiesHTML = cluster.subCities.map(sc => `
        <div style="display: flex; justify-content: space-between; gap: 16px; margin-bottom: 2px; align-items: center;">
          <span style="color: #cbd5e1;">${sc.name}</span>
          <strong style="color: #4ade80;">${sc.count} proj</strong>
        </div>
      `).join('');

      const nodeHTML = `
        <div class="night-city-node" style="top: ${cluster.top}; left: ${cluster.left};">
           <div class="night-soft-glow"></div>
           <div class="night-city-dot"></div>
           <div class="city-hover-card">
              <div style="font-size: 0.7rem; font-weight: 700; color: #4ade80; margin-bottom: 4px; border-bottom: 1px solid rgba(74,222,128,0.25); padding-bottom: 2px; text-transform: uppercase; letter-spacing: 0.5px;">CITIES / PROJECTS</div>
              ${subCitiesHTML}
           </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', nodeHTML);
    });

    container.classList.add('map-rendered');

    // 🚀 AVISA O HTML QUE OS DADOS ESTÃO PRONTOS PARA O FOMO
    const event = new CustomEvent('guthrieMapDataReady', { 
      detail: { projectsData: projectsData, total: grandTotalProjects } 
    });
    document.dispatchEvent(event);

  } catch (error) {
    console.error('Erro ao renderizar o mapa interligado:', error);
  }
}

document.addEventListener('DOMContentLoaded', renderPreciseMap);