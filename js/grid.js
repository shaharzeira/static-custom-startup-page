function displayLinks(container, links) {
  const maxButtonsPerRow = Math.max(...linksData.map(row => row.length));

  container.innerHTML = '';

  links.forEach(group => {
    const row = document.createElement('div');
    row.className = 'grid gap-5 justify-center';
    row.style.gridTemplateColumns = `repeat(${maxButtonsPerRow}, ${CARD_WIDTH_REM})`;

    group.forEach(link => {
      row.appendChild(createCard(link));
    });

    const missing = maxButtonsPerRow - group.length;
    for (let i = 0; i < missing; i++) {
      const placeholder = document.createElement('div');
      placeholder.className = `invisible ${CARD_WIDTH_CLASS}`;
      row.appendChild(placeholder);
    }

    container.appendChild(row);
  });
}
