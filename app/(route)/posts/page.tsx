import getPosts from "@/actions/get-posts";
import Container from "@/components/ui/container";



const PostPage = async () => {

  const posts = await getPosts();

    return (
        <Container>
            <div>
                {posts.map((post) => (
                  <h4 key={post.id}>{post.name}</h4>
                ))}
            </div>
        </Container>
    )
}

export default PostPage;