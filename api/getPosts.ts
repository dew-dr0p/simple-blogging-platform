import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from './initialiseFirebase'

const handler = async (req: VercelRequest, res: VercelResponse) => {
    try {
        // Get a reference to your Firebase Realtime Database
        const db = admin.database();
        const ref = db.ref('posts'); // Replace 'posts' with the desired database path

        // // Create a new post
        // const newPost = {
        //     title: 'New Post Title',
        //     content: 'New Post Content',
        //     created_at: Date.now(),
        // };
    
        // // Push the new post to the database
        // const snapshot = await ref.push(newPost);
    
        // res.status(200).json({ message: 'Post created successfully', postId: snapshot.key });

        // ref.once('value', (snapshot) => {
        //     const data = snapshot.val();
        //     return res.status(200).json(data);
        //   }, (errorObject) => {
        //     console.log('The read failed: ' + errorObject.name);
        //   });

        ref.child('-NgNpW74rEfxJjQzPNOF').remove((error) => {
            if (error) {
              return res.status(500).json({ error: 'Failed to delete data' });
            } else {
              return res.status(200).json({ message: 'Data deleted successfully' });
            }
          });

        // res.status(200).json({message: 'Successful'})

    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default handler;
