import moment from "moment";

export const isIterableArray = (array) =>
  Array.isArray(array) && !!array.length;

export const getDuration = (startDate, endDate) => {
  if (!moment.isMoment(startDate))
    throw new Error(
      `Start date must be a moment object, received ${typeof startDate}`
    );
  if (endDate && !moment.isMoment(endDate))
    throw new Error(
      `End date must be a moment object, received ${typeof startDate}`
    );

  return `${startDate.format("ll")} - ${
    endDate ? endDate.format("ll") : "Present"
  } • ${startDate.from(endDate || moment(), true)}`;
};

export const numberFormatter = (number, fixed = 2) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(number)) >= 1.0e9
    ? (Math.abs(Number(number)) / 1.0e9).toFixed(fixed) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(number)) >= 1.0e6
    ? (Math.abs(Number(number)) / 1.0e6).toFixed(fixed) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(number)) >= 1.0e3
    ? (Math.abs(Number(number)) / 1.0e3).toFixed(fixed) + "K"
    : Math.abs(Number(number)).toFixed(fixed);
};

//===============================
// Colors
//===============================
export const hexToRgb = (hexValue) => {
  let hex;
  hexValue.indexOf("#") === 0
    ? (hex = hexValue.substring(1))
    : (hex = hexValue);
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
  );
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

export const rgbColor = (color = colors[0]) => `rgb(${hexToRgb(color)})`;
export const rgbaColor = (color = colors[0], alpha = 0.5) =>
  `rgba(${hexToRgb(color)},${alpha})`;

export const colors = [
  "#76aaaa",
  "#00d97e",
  "#e63757",
  "#39afd1",
  "#fd7e14",
  "#02a8b5",
  "#727cf5",
  "#6b5eae",
  "#ff679b",
  "#f6c343",
];

export const themeColors = {
  primary: "#76aaaa",
  secondary: "#748194",
  success: "#00d27a",
  info: "#27bcfd",
  warning: "#f5803e",
  danger: "#e63757",
  light: "#f9fafd",
  dark: "#0b1727",
};

export const grays = {
  white: "#fff",
  100: "#f9fafd",
  200: "#edf2f9",
  300: "#d8e2ef",
  400: "#b6c1d2",
  500: "#9da9bb",
  600: "#748194",
  700: "#5e6e82",
  800: "#4d5969",
  900: "#344050",
  1000: "#232e3c",
  1100: "#0b1727",
  black: "#000",
};

export const rgbColors = colors.map((color) => rgbColor(color));
export const rgbaColors = colors.map((color) => rgbaColor(color));

//===============================
// Echarts
//===============================
export const getPosition = (pos, params, dom, rect, size) => ({
  top: pos[1] - size.contentSize[1] - 10,
  left: pos[0] - size.contentSize[0] / 2,
});

//===============================
// E-Commerce
//===============================
export const calculateSale = (base, less = 0, fix = 2) =>
  (base - base * (less / 100)).toFixed(fix);
export const getTotalPrice = (cart, baseItems) =>
  cart.reduce((accumulator, currentValue) => {
    const { id, quantity } = currentValue;
    const { price, sale } = baseItems.find((item) => item.id === id);
    return accumulator + calculateSale(price, sale) * quantity;
  }, 0);

//===============================
// Store
//===============================
export const getItemFromStore = (key, defaultValue, store = localStorage) =>
  JSON.parse(store.getItem(key)) || defaultValue;
export const setItemToStore = (key, payload, store = localStorage) =>
  store.setItem(key, JSON.stringify(payload));
export const getStoreSpace = (store = localStorage) =>
  parseFloat(
    (
      escape(encodeURIComponent(JSON.stringify(store))).length /
      (1024 * 1024)
    ).toFixed(2)
  );

//===============================
// Helpers
//===============================
export const getPaginationArray = (totalSize, sizePerPage) => {
  const noOfpages = Math.ceil(totalSize / sizePerPage);
  const array = [];
  let pageNo = 1;
  while (pageNo <= noOfpages) {
    array.push(pageNo);
    pageNo = pageNo + 1;
  }
  return array;
};
