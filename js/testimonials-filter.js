document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const roleSelect = document.getElementById('filter-role');
  const goalSelect = document.getElementById('filter-goal');
  const stories = document.querySelectorAll('.story-card-item');
  const noResultsMsg = document.getElementById('no-results-msg');
  const resetBtn = document.getElementById('reset-filters-btn');
  const resultsCount = document.getElementById('results-count'); // Novo contador

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedRole = roleSelect ? roleSelect.value : 'all';
    const selectedGoal = goalSelect ? goalSelect.value : 'all';

    let visibleCount = 0;

    stories.forEach(story => {
      const keywords = story.dataset.keywords || '';
      const matchSearch = query === '' || keywords.toLowerCase().includes(query);
      const matchRole = selectedRole === 'all' || story.dataset.role === selectedRole;
      const matchGoal = selectedGoal === 'all' || story.dataset.goal === selectedGoal;

      if (matchSearch && matchRole && matchGoal) {
        story.classList.remove('d-none');
        visibleCount++;
      } else {
        story.classList.add('d-none');
      }
    });

    // Atualiza o texto dinâmico de contagem de resultados (se o elemento existir)
    if (resultsCount) {
      resultsCount.textContent = `Showing ${visibleCount} Customer ${visibleCount === 1 ? 'Story' : 'Stories'}`;
    }

    // Mostra ou esconde a mensagem de "nenhum resultado"
    if (noResultsMsg) {
      if (visibleCount === 0) {
        noResultsMsg.classList.remove('d-none');
      } else {
        noResultsMsg.classList.add('d-none');
      }
    }
  }

  // Event Listeners
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (roleSelect) roleSelect.addEventListener('change', applyFilters);
  if (goalSelect) goalSelect.addEventListener('change', applyFilters);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (roleSelect) roleSelect.value = 'all';
      if (goalSelect) goalSelect.value = 'all';
      applyFilters();
    });
  }

  // A lógica do Modal de Vídeo foi removida daqui pois já está tratada diretamente no final do testimonials.html
});