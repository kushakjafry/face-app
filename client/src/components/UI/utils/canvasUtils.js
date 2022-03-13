export const writeOnCanvas = (context, text, font, positionX, positionY) => {
  context.font = font + "px serif";
  context.fillText(text, positionX, font + positionY);
};

export const drawProbability = (context, canvas, prabability) => {
  const length = prabability * canvas.width;
  context.lineWidth = 10;
  context.beginPath();
  context.moveTo(10, 10);
  context.lineTo(length, 0);
};
