import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from './initialiseFirebase'
import { useStore } from 'zustand';
import usePostStore from '@/store/postStore';

const handler = async (req: VercelRequest, res: VercelResponse) => {
    try {
        // Get a reference to your Firebase Realtime Database
        const db = admin.database();
        const postsRef = db.ref('posts'); // Database path for posts
        const categoriesRef = db.ref('categories') // Database path for categories

        if (req.method === 'GET') {
          // Retrieve data from Realtime Database
          postsRef.once('value', (snapshot) => {
              const data = snapshot.val();
              // console.log(data)
              return res.status(200).json(data);
            }, (errorObject) => {
              console.log('The read failed: ' + errorObject.name);
            });
        } else if (req.method === 'POST') {
          // Add data to Realtime Database
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
              return res.status(201).json({ message: 'Data added successfully', data: newPost });
            }
          });
      
          // res.status(200).json({ message: 'Post created successfully', postId: snapshot.key, data: req.body });
        }
        


        // ref.child('-NgNpW74rEfxJjQzPNOF').remove((error) => {
        //     if (error) {
        //       return res.status(500).json({ error: 'Failed to delete data' });
        //     } else {
        //       return res.status(200).json({ message: 'Data deleted successfully' });
        //     }
        //   });

        // res.status(200).json({message: 'Successful'})

    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default handler;
