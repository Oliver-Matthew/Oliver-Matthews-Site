import { request } from "graphql-request";

// Define the expected response data type
interface Post {
  id: string;
  slug: string;
  url: string;
  title: string;
  readTimeInMinutes: number;
  publication: {
    links: {
      twitter: string;
      linkedin: string;
    };
  };
  coverImage: {
    url: string;
  };
  content: {
    html: string;
  };
}

interface PostResponse {
  post: Post;
}

export async function fetchBlogPost(blogId: string) {
  const GET_POST = `
    query Post($id: ID!) {
      post(id: $id) {
        id
        slug
        url
        title
        readTimeInMinutes
        publication {
          links {
            twitter
            linkedin
          }
        }
        coverImage {
          url
        }
        content {
          html
        }
      }
    }
  `;

  try {
    // Specify the type of the response data using generics
    const data = await request<PostResponse>("https://api.hashnode.com", GET_POST, {
      id: blogId,
    });
    
    return data.post || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}
