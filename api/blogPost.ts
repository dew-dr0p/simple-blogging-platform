import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from './initialiseFirebase'

const handler = async (req: VercelRequest, res: VercelResponse) => {
  try {
    // Get a reference to your Firebase Realtime Database
    const db = admin.database();
    const postsRef = db.ref('posts'); // Database path for posts
    const categoriesRef = db.ref('categories') // Database path for categories

    const postId = (req.query.id as string); // Get the post ID from the query parameter

    if (req.method === 'GET') {
      // Retrieve data from Realtime Database
      console.log('getting...', req.method)
      if (postId && postId !== '') {
        // Fetch a specific post
        // const postRef = db.ref('posts/' + postId)

        postsRef.child(postId).once('value', (snapshot) => {
          const data = snapshot.val()
          if (data === null) {
            return res.status(400).json({ error: 'Invalid Id' })
          }
          return res.status(200).json(data)
        }, (errorObject) => {
          console.log('The read failed: ' + errorObject.name)
          return res.status(400).json({ error: 'The read failed' })
        })
      } else {
        // Fetch all posts
        postsRef.once('value', (snapshot) => {
          const data = snapshot.val();
          // console.log(data)
          return res.status(200).json(data);
        }, (errorObject) => {
          console.log('The read failed: ' + errorObject.name);
          return res.status(400).json({ error: 'The read failed' })
        });
      }
    } else if (req.method === 'POST') {
      // Add data to Realtime Database
      console.log('posting...', req.method)
      const { title, content, photo_url, alt_text, categories, } = req.body
      if (!title || (!content && (!photo_url && !categories))) {
        return res.status(400).json({ error: 'Fill in required fields' });
      }

      // Generate a new key using push()
      const snapshot = postsRef.push();

      // Get the generated key
      const generatedKey = snapshot.key;

      // Create the data object with the key
      const newPost = {
        id: generatedKey, // Included the generated key in the newPost object
        title: title,
        content: content,
        photo_url: photo_url,
        photo_alt_text: alt_text,
        categories: categories,
        created_at: Date.now(),
        updated_at: Date.now()
      };

      // const newCategories = categories

      // Push the data to the database
      snapshot.set(newPost, (error) => {
        if (error) {
          return res.status(500).json({ error: 'Failed to add data' });
        } else {
          // categoriesRef.push(newCategories, (err) => {
          //   if (err) {
          //     return res.status(501).json({ error: 'Failed to add category' })
          //   }
          // })
          return res.status(201).json({ message: 'Post created successfully', data: newPost });
        }
      });

      // res.status(200).json({ message: 'Post created successfully', postId: snapshot.key, data: req.body });
    } else if (req.method === 'PUT') {
      // Update data in Realtime Database
      console.log('putting...', req.method)
      // const { id, name, email } = req.body;
      // if (!id || (!name && !email)) {
      //   return res.status(400).json({ error: 'Invalid request data' });
      // }
      const { id, title, content, photo_url, alt_text, categories, created_at } = req.body
      if (!id || (!title && (!content && (!photo_url && !categories)))) {
        return res.status(400).json({ error: 'Invalid Request data' });
      }

      const updatedPost = {
        id: id,
        title: title,
        content: content,
        photo_url: photo_url,
        photo_alt_text: alt_text,
        categories: categories,
        created_at: created_at,
        updated_at: Date.now()
      };

      postsRef.child(id).update(updatedPost, (error) => {
        if (error) {
          return res.status(500).json({ error: 'Failed to update data' });
        } else {
          return res.status(200).json({ message: 'Post updated successfully' });
        }
      });
    } else if (req.method === 'DELETE') {
      // Delete data from Realtime Database
      console.log('deleting...', req.method)
      if (!postId) {
        return res.status(400).json({ error: 'Invalid request data' });
      }

      postsRef.child(postId).remove((error) => {
        if (error) {
          return res.status(500).json({ error: 'Failed to delete data' });
        } else {
          return res.status(200).json({ message: 'Data deleted successfully' });
        }
      });
    } else {
      return res.status(405).end();
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export default handler;
