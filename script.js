const gridContainer = document.getElementById('grid-container');
const toggleBtn = document.getElementById('toggle-btn');



const CARD_WIDTH_CLASS = 'w-32';

function getRemFromTailwindWidth(className) {
  const match = className.match(/^w-(\d+)$/);
  if (match) {
    const twUnits = parseInt(match[1], 10);
    return `${twUnits / 4}rem`; // Tailwind's spacing scale: 4 units per rem
  }
  throw new Error(`Unsupported class: ${className}`);
}

const CARD_WIDTH_REM = getRemFromTailwindWidth(CARD_WIDTH_CLASS);




function createCard(link) {
  // Toggle between horizontal or vertical card layout
  const USE_VERTICAL_LAYOUT = true;
  
  const card = document.createElement('a');
  card.href = link.url;
  card.target = '_blank';

  if (USE_VERTICAL_LAYOUT) {
    card.className =
      `${CARD_WIDTH_CLASS} bg-white py-1 px-1 rounded-lg shadow-[0_0px_2px_rgba(0,0,0,0.8)] transition transform hover:-translate-y-1 flex flex-col items-center justify-center space-y-0 text-center`;
  } else {
    card.className =
      `${CARD_WIDTH_CLASS} bg-white py-1 px-1 rounded-lg shadow-[0_0px_2px_rgba(0,0,0,0.8)] transition transform hover:-translate-y-1 flex items-center justify-center space-x-4`;
  }

  const img = document.createElement('img');
  img.src = link.image;
  img.alt = link.label;
  img.className = USE_VERTICAL_LAYOUT ? 'h-10 object-contain' : 'h-10 object-contain';

  const span = document.createElement('span');
  span.textContent = link.label;
  span.className = 'leading-none text-[0.825rem]';

  card.appendChild(img);
  card.appendChild(span);

  return card;
}



function displayLinks(links) {
  const maxButtonsPerRow = Math.max(...linksData.map(row => row.length));
  
  
  gridContainer.innerHTML = '';

  links.forEach(group => {
    const row = document.createElement('div');
    row.className = 'grid gap-4 justify-center';
    row.style.gridTemplateColumns = `repeat(${maxButtonsPerRow}, ${CARD_WIDTH_REM})`;//###########

    group.forEach(link => {
      const card = createCard(link);
      row.appendChild(card);
    });

    const missing = maxButtonsPerRow - group.length;
    for (let i = 0; i < missing; i++) {
      const placeholder = document.createElement('div');
      placeholder.className = `invisible ${CARD_WIDTH_CLASS}`; // Matches real card width
      row.appendChild(placeholder);
    }

    gridContainer.appendChild(row);
  });
}





const toggleDetails = document.getElementById('toggle-details');
const summary = toggleDetails.querySelector('summary');
const arrow = document.getElementById('arrow');
const label = document.getElementById('label');

toggleDetails.addEventListener('toggle', () => {
  const gridContainer = document.getElementById('grid-container');
  const isOpen = toggleDetails.open;

  arrow.textContent = isOpen ? '▼' : '►';
  label.textContent = isOpen ? 'Show Quick Links' : 'Show Quick Links';

  if (isOpen) {
    displayLinks(linksData);
  } else {
    gridContainer.innerHTML = '';
  }
});