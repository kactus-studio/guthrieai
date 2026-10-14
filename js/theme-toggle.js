document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('thbtn');
  const sunIcon = document.getElementById('suni');
  const moonIcon = document.getElementById('mooni');

  // Recupera o tema salvo ou usa 'dark' por padrão
  const savedTheme = localStorage.getItem('theme') || 'dark';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('lm');
      // No modo claro, esconde o Sol e mostra a Lua
      if (sunIcon) sunIcon.style.setProperty('display', 'none', 'important');
      if (moonIcon) moonIcon.style.setProperty('display', 'block', 'important');
    } else {
      document.body.classList.remove('lm');
      // No modo escuro, mostra o Sol e esconde a Lua
      if (sunIcon) sunIcon.style.setProperty('display', 'block', 'important');
      if (moonIcon) moonIcon.style.setProperty('display', 'none', 'important');
    }
  }

  // Aplica o tema imediatamente ao carregar
  applyTheme(savedTheme);

  // Evento de clique para alternar
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('lm');
      const newTheme = isLight ? 'dark' : 'light';
      
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
});