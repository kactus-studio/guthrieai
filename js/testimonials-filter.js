document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const sectorSelect = document.getElementById('filter-sector');
  const roleSelect = document.getElementById('filter-role');
  const goalSelect = document.getElementById('filter-goal');
  const stories = document.querySelectorAll('.story-card-item');
  const resultsCount = document.getElementById('results-count');
  const noResultsMsg = document.getElementById('no-results-msg');
  const resetBtn = document.getElementById('reset-filters-btn');

  function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedSector = sectorSelect.value;
    const selectedRole = roleSelect.value;
    const selectedGoal = goalSelect.value;

    let visibleCount = 0;

    stories.forEach(story => {
      const matchSearch = query === '' || story.dataset.keywords.toLowerCase().includes(query);
      const matchSector = selectedSector === 'all' || story.dataset.sector === selectedSector;
      const matchRole = selectedRole === 'all' || story.dataset.role === selectedRole;
      const matchGoal = selectedGoal === 'all' || story.dataset.goal === selectedGoal;

      if (matchSearch && matchSector && matchRole && matchGoal) {
        story.classList.remove('d-none');
        visibleCount++;
      } else {
        story.classList.add('d-none');
      }
    });

    // Atualiza o texto dinâmico de contagem de resultados
    resultsCount.textContent = `Showing ${visibleCount} Customer ${visibleCount === 1 ? 'Story' : 'Stories'}`;

    if (visibleCount === 0) {
      noResultsMsg.classList.remove('d-none');
    } else {
      noResultsMsg.classList.add('d-none');
    }
  }

  // Event Listeners
  searchInput.addEventListener('input', applyFilters);
  sectorSelect.addEventListener('change', applyFilters);
  roleSelect.addEventListener('change', applyFilters);
  goalSelect.addEventListener('change', applyFilters);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      searchInput.value = '';
      sectorSelect.value = 'all';
      roleSelect.value = 'all';
      goalSelect.value = 'all';
      applyFilters();
    });
  }

  // Lógica do Modal de Vídeo Lightbox
  const videoModal = document.getElementById('videoModal');
  const modalIframe = document.getElementById('modalIframe');

  if (videoModal) {
    videoModal.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget;
      const videoSrc = button.getAttribute('data-video');
      modalIframe.src = videoSrc + '?autoplay=1';
    });

    videoModal.addEventListener('hide.bs.modal', () => {
      modalIframe.src = '';
    });
  }
});