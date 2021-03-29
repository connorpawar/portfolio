/* Api methods to call /functions */

// const create = (slug: string) => {
// 	return fetch('/.netlify/functions/new-reactions', {
// 	  body: JSON.stringify(data),
// 	  method: 'POST'
// 	}).then(response => {
// 	  return response.json()
// 	})
//   }

//   const incrementReaction = (slug: string) => {
// 	return fetch(`/.netlify/functions/reactions/${slug}`, {
// 	  method: 'POST',
// 	}).then(response => {
// 	  return response.json()
// 	})
//   }

//   const decrementReaction = (slug: string) => {
// 	return fetch(`/.netlify/functions/reactions/${slug}`, {
// 		method: 'DELETE',
// 	}).then(response => {
// 	  return response.json()
// 	})
//   }

const getReactions = (slug: string) => {
  return fetch(`/.netlify/functions/reactions/${slug}`, {
    method: 'GET',
  }).then((response) => {
    return response.json();
  });
};

export default {
  // initReactions: create,
  // incrementReaction: incrementReaction,
  // decrementReaction: decrementReaction,
  getReactions: getReactions,
};
