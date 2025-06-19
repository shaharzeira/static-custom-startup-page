function setupToggle() {
  const toggleDetails = document.getElementById('toggle-details');
  const gridContainer = document.getElementById('grid-container');
  const arrow = document.getElementById('arrow');
  const label = document.getElementById('label');

  toggleDetails.addEventListener('toggle', () => {
    const isOpen = toggleDetails.open;
    arrow.textContent = isOpen ? '▼' : '►';

    if (isOpen) {
      displayLinks(gridContainer, linksInfo);
    } else {
      gridContainer.innerHTML = '';
    }
  });
}
