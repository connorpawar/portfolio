export const getPostUrlSlug = (urlPath) => {
  return urlPath.match(/([^\/]*)\/*$/)[0];
};
