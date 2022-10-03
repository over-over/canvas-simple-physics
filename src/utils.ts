import { context } from './context';

type TDrawCircleArgs = {
  x: number;
  y: number;
  radius: number;
};

export const drawCircle = ({ x, y, radius }: TDrawCircleArgs) => {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.lineWidth = 2;
  context.strokeStyle = '#000000';
  context.stroke();
};
