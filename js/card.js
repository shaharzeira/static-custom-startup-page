function createCard(link) {
  const USE_VERTICAL_LAYOUT = true;

  const card = document.createElement('a');
  card.href = link.url;
  card.target = '_blank';

  card.className = `${CARD_WIDTH_CLASS} bg-white py-1 pb-0.5 px-1 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.3)] 
  transition transform hover:-translate-y-1 flex 
  ${USE_VERTICAL_LAYOUT ? 'flex-col space-y-1 text-center' : 'items-center space-x-4'} items-center justify-center`;

  const img = document.createElement('img');
  img.src = link.image;
  img.alt = link.label;
  img.className = 'h-10 object-contain';

  const span = document.createElement('span');
  span.textContent = link.label;
  span.className = 'leading-none text-[0.825rem]';

  card.appendChild(img);
  card.appendChild(span);

  return card;
}
