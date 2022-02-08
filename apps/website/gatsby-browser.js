/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onRouteUpdate = () => {
  window.locations = window.locations || [document.referrer];
  window.locations.push(window.location.pathname);
  window.previousPath = window.locations[locations.length - 2];
};
