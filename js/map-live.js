const US_STATES_COORDINATES = {
  "AL": { name: "Alabama", top: "58%", left: "64%", variant: "pin-top-left" },
  "AK": { name: "Alaska", top: "85%", left: "18%", variant: "pin-top-right" },
  "AZ": { name: "Arizona", top: "58%", left: "22%", variant: "pin-bottom-left" },
  "AR": { name: "Arkansas", top: "58%", left: "53%", variant: "pin-top-left" },
  "CA": { name: "California", top: "45%", left: "12%", variant: "pin-bottom-left" },
  "CO": { name: "Colorado", top: "45%", left: "38%", variant: "pin-top-left" },
  "FL": { name: "Florida", top: "64%", left: "72%", variant: "pin-top-right" },
  "GA": { name: "Georgia", top: "58%", left: "68%", variant: "pin-top-right" },
  "HI": { name: "Hawaii", top: "88%", left: "38%", variant: "pin-top-right" },
  "ID": { name: "Idaho", top: "28%", left: "22%", variant: "pin-top-left" },
  "IL": { name: "Illinois", top: "38%", left: "57%", variant: "pin-top-left" },
  "IN": { name: "Indiana", top: "38%", left: "62%", variant: "pin-top-left" },
  "IA": { name: "Iowa", top: "34%", left: "52%", variant: "pin-top-left" },
  "KS": { name: "Kansas", top: "48%", left: "46%", variant: "pin-bottom-left" },
  "KY": { name: "Kentucky", top: "46%", left: "64%", variant: "pin-top-left" },
  "LA": { name: "Louisiana", top: "68%", left: "54%", variant: "pin-bottom-left" },
  "MS": { name: "Mississippi", top: "62%", left: "59%", variant: "pin-bottom-left" },
  "MO": { name: "Missouri", top: "48%", left: "53%", variant: "pin-top-left" },
  "MT": { name: "Montana", top: "18%", left: "28%", variant: "pin-top-left" },
  "NE": { name: "Nebraska", top: "38%", left: "42%", variant: "pin-top-left" },
  "NV": { name: "Nevada", top: "38%", left: "17%", variant: "pin-top-left" },
  "NM": { name: "New Mexico", top: "58%", left: "32%", variant: "pin-bottom-left" },
  "NC": { name: "North Carolina", top: "48%", left: "73%", variant: "pin-top-right" },
  "ND": { name: "North Dakota", top: "18%", left: "42%", variant: "pin-top-left" },
  "OH": { name: "Ohio", top: "35%", left: "66%", variant: "pin-top-left" },
  "OK": { name: "Oklahoma", top: "60%", left: "46%", variant: "pin-bottom-left" },
  "OR": { name: "Oregon", top: "22%", left: "13%", variant: "pin-top-left" },
  "SD": { name: "South Dakota", top: "28%", left: "42%", variant: "pin-top-left" },
  "TN": { name: "Tennessee", top: "52%", left: "62%", variant: "pin-top-left" },
  "TX": { name: "Texas", top: "72%", left: "45%", variant: "pin-bottom-right" },
  "UT": { name: "Utah", top: "42%", left: "26%", variant: "pin-top-left" },
  "VA": { name: "Virginia", top: "42%", left: "71%", variant: "pin-top-right" },
  "WA": { name: "Washington", top: "14%", left: "14%", variant: "pin-top-right" },
  "WV": { name: "West Virginia", top: "40%", left: "68%", variant: "pin-top-left" },
  "WI": { name: "Wisconsin", top: "25%", left: "57%", variant: "pin-top-left" },
  "WY": { name: "Wyoming", top: "32%", left: "32%", variant: "pin-top-left" },

  "NE_CLUSTER": { 
    name: "Northeast Region", 
    top: "22%", 
    left: "71%", 
    variant: "pin-top-left", 
    isCluster: true 
  }
};

const northeastClusterStates = ["NY", "PA", "NJ", "CT", "MA", "MD", "ME", "NH", "VT", "DE"];

function parseStateCode(locationString) {
  if (!locationString) return null;
  const clean = locationString.trim().toUpperCase();
  
  if (northeastClusterStates.includes(clean)) {
    return clean;
  }

  if (clean.length === 2 && US_STATES_COORDINATES[clean]) return clean;
  if (clean.includes(',')) {
    const parts = clean.split(',');
    const statePart = parts[parts.length - 1].trim();
    if (northeastClusterStates.includes(statePart)) return statePart;
    if (statePart.length === 2 && US_STATES_COORDINATES[statePart]) return statePart;
  }
  for (const [code, info] of Object.entries(US_STATES_COORDINATES)) {
    if (info.name.toUpperCase() === clean) return code;
  }
  return null;
}

async function renderLiveMapProjects() {
  const container = document.querySelector('.map-wrapper');
  if (!container) return;

  try {
    const response = await fetch('https://guthrie-api-bridge-production.up.railway.app/api/guthrie-projects');
    if (!response.ok) throw new Error(`Erro na API: ${response.status}`);

    const projectsData = await response.json();
    container.querySelectorAll('.heat-pin-spot').forEach(el => el.remove());

    const stateTotals = {};
    let grandTotalProjects = 0;
    const clusterBreakdown = {};

    projectsData.forEach(item => {
      const stateCode = parseStateCode(item.location);
      const count = item.count || 1;
      
      grandTotalProjects += count;

      if (stateCode) {
        if (northeastClusterStates.includes(stateCode)) {
          clusterBreakdown[stateCode] = (clusterBreakdown[stateCode] || 0) + count;
        } else {
          stateTotals[stateCode] = (stateTotals[stateCode] || 0) + count;
        }
      }
    });

    const clusterTotalCount = Object.values(clusterBreakdown).reduce((a, b) => a + b, 0);

    function formatProjectTotal(num) {
      if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k+';
      }
      return num + '+';
    }

    const specificCounter = document.getElementById('total-projects-counter');
    if (specificCounter) {
      specificCounter.textContent = formatProjectTotal(grandTotalProjects);
    }

    Object.keys(stateTotals).forEach(stateCode => {
      const config = US_STATES_COORDINATES[stateCode];
      const count = stateTotals[stateCode];

      if (config && count > 0) {
        const spotHTML = `
          <div class="heat-pin-spot ${config.variant}" style="top: ${config.top}; left: ${config.left};">
             <div class="pulse-ring"></div>
             <div class="pin-dot"></div>
             <div class="connector-line"></div>
             <div class="info-card">
                <span class="location-name">${config.name}</span>
                <span class="project-count"><strong>${count}</strong> PROJECTS</span>
             </div>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', spotHTML);
      }
    });

    if (clusterTotalCount > 0) {
      const clusterConfig = US_STATES_COORDINATES["NE_CLUSTER"];
      
      let breakdownHTML = '';
      // Ordena por quantidade de projetos em ordem decrescente para ficar mais limpo
      const sortedCluster = Object.entries(clusterBreakdown).sort((a, b) => b[1] - a[1]);
      
      sortedCluster.forEach(([stCode, stCount]) => {
        breakdownHTML += `<div class="cluster-item"><span>${stCode}</span><strong>${stCount}</strong></div>`;
      });

      const clusterHTML = `
        <div class="heat-pin-spot ${clusterConfig.variant}" style="top: ${clusterConfig.top}; left: ${clusterConfig.left};">
           <div class="pulse-ring"></div>
           <div class="pin-dot"></div>
           <div class="connector-line"></div>
           <div class="info-card cluster-hover-card">
              <span class="location-name">${clusterConfig.name}</span>
              <span class="project-count"><strong>${clusterTotalCount}</strong> PROJECTS</span>
              <div class="cluster-dropdown">
                 ${breakdownHTML}
              </div>
           </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', clusterHTML);
    }

  } catch (error) {
    console.error('Erro ao carregar os projetos:', error);
  }
}

document.addEventListener('DOMContentLoaded', renderLiveMapProjects);