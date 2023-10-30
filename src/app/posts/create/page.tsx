// app/posts/create/page.tsx
// This is the page used to create or edit a post, it contains the CreatePostPage which handles the logic of creating or editing a post.
import CreatePostPage from "@/components/CreatePostPage"

const page = async () => {
    return (
        <CreatePostPage />
    );
}

export default page;