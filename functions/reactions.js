/* Not working right */
import faunadb from 'faunadb';
import { getPostUrlSlug } from './utils/getPostUrl';
const q = faunadb.query;

export async function handler(event, context) {
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });
  const postSlug = getPostUrlSlug(event.path);
  console.log(`Function 'reactions' invoked. Read url: ${postSlug}`);

  try {
    let reaction = {
      postSlug: postSlug,
      heart: 0,
      star: 0,
      thumbsUp: 0,
    };
    client
      .query(
        q.If(
          q.Exists(q.Ref(`classes/reactions/${postSlug}`)),
          q.Get(q.Ref(`classes/reactions/${postSlug}`)),
          q.Create(q.Ref(`classes/reactions/${postSlug}`), reaction)
        )
      )
      .then((response) => {
        console.log('success', response);
        return {
          statusCode: 200,
          body: JSON.stringify(response),
        };
      })
      .catch((error) => {
        console.log('error', error);
        return {
          statusCode: 400,
          body: JSON.stringify(error),
        };
      });
  } catch (err) {
    console.error(err);
  }
}
