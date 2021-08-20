const hexToRgb = (hex) => {
  const temp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(temp[1], 16);
  const g = parseInt(temp[2], 16);
  const b = parseInt(temp[3], 16);

  return [r, g, b];
}

export default hexToRgb;