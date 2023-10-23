import admin from 'firebase-admin';

// Load the service account key path from environment variables
const serviceAccountKey = JSON.parse(process.env.FIREBASE_KEYFILE as string);

// Check if the environment variable is defined
if (serviceAccountKey) {
  // Initialize Firebase Admin SDK with the service account key
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
    databaseURL: 'https://simple-blogging-platform-default-rtdb.firebaseio.com',
  });
  // // Get a reference to your Firebase Realtime Database
  // const db = admin.database();
  // const ref = db.ref('posts'); // Replace 'posts' with the desired database path

} else {
  console.error('Service account key path is not defined in environment variables.');
  // Handle the error or exit gracefully as needed.
}

// // Get a reference to your Firebase Realtime Database
// const db = admin.database();
// const ref = db.ref('posts'); // Replace 'posts' with the desired database path
// ref.once("value", function(snapshot) {
//   console.log(snapshot.val());
// });

// Export the initialized Firebase Admin SDK
export default admin



// const handler = async (req: VercelRequest, res: VercelResponse) => {
//     try {
//       // Initialize Firebase Admin SDK
//       admin.initializeApp({
//         credential: admin.credential.cert(require(serviceAccount)),
//         databaseURL: 'https://simple-blogging-platform-default-rtdb.firebaseio.com', // Replace with your Firebase project URL
//       });
  
//       // Get a reference to your Firebase Realtime Database
//       const db = admin.database();
//       const ref = db.ref('posts'); // Replace 'posts' with the desired database path
  
//       // Create a new post
//       const newPost = {
//         title: 'New Post Title',
//         content: 'New Post Content',
//         created_at: Date.now(),
//       };
  
//       // Push the new post to the database
//       const snapshot = await ref.push(newPost);
  
//       res.status(200).json({ message: 'Post created successfully', postId: snapshot.key });
//     } catch (error) {
//       console.error('Error creating post:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };

//   export default handler;
  