"use client";

import { gql, useQuery } from "@apollo/client";
import BlogCard from "@/components/layout/blogcard";
import { FaRegNewspaper } from "react-icons/fa6";

// Define the GraphQL query for fetching the blogs
const GET_ARTICLES = gql`
  query User($pageSize: Int!, $page: Int!) {
    user(username: "harshtarg") {
      id
      username
      name
      profilePicture
      posts(pageSize: $pageSize, page: $page) {
        nodes {
          id
          title
          slug
          coverImage {
            url
          }
          subtitle
          content {
            html
            text
          }
        }
        pageInfo {
          nextPage
          previousPage
          hasNextPage
          hasPreviousPage
        }
        totalDocuments
      }
    }
  }
`;

interface Post {
  coverImage: {
    url: string;
  };
  content: {
    html: string;
    text: string;
  };
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
}

interface BlogData {
  user: {
    posts: {
      nodes: Post[];
    };
  };
}

export default function Page() {
  const { loading, error, data } = useQuery<BlogData>(GET_ARTICLES, {
    variables: { pageSize: 5, page: 1 },
  });

  if (loading) return <p className="text-white mx-auto">Loading...</p>;
  if (error) return <p className="text-white mx-auto">Error: {error.message}</p>;

  const posts = data?.user.posts.nodes || [];

  return (
    <main className="blog__section" id="blog-section">
      <div className="blog__header">
        <h2>Newsletter</h2>
      </div>
  
      <div className="blog__posts__wrapper">
        {posts.map((blog) => (
            <BlogCard
              title={blog.title}
              text={blog.content.text}
              blogId={blog.id}
              blogImg={blog.coverImage.url}
            />
        ))}
      </div>
    </main>
  );
  }
