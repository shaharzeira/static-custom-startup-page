const CARD_WIDTH_CLASS = 'w-32';

function getRemFromTailwindWidth(className) {
  const match = className.match(/^w-(\d+)$/);
  if (match) {
    const twUnits = parseInt(match[1], 10);
    return `${twUnits / 4}rem`;
  }
  throw new Error(`Unsupported class: ${className}`);
}

const CARD_WIDTH_REM = getRemFromTailwindWidth(CARD_WIDTH_CLASS);
