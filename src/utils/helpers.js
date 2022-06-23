/**
 * This is used to remove special characters from route parameters of dynamic routes
 * @param {string} urlParameter - route parameters to be sanitized.
 * @memberof Helper
 * @returns {string} - returns a string of the sanitized url.
 */
export const stringSanitizer = (urlParameter) => {
  return urlParameter.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "").trim();
};
