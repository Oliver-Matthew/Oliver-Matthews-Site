import { query } from "../../../lib/hashnode";
import Image from "next/image";

interface PostParams {
  post: {
    title: string;
    content: {
      html: string;
    };
    coverImage: {
      url: string;
    };
  };
}

interface PageProps {
  post: PostParams['post'];
}

export default function BlogPost({ post }: PageProps) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="change__service__page">
      <figure className="change__service__image">
        <Image
          src={post.coverImage.url}
          alt="Post Cover Image"
          width={1440}
          height={400}
          layout="responsive"
          objectFit="cover"
        />
      </figure>

      <h2 className="change__service__page__header">{post.title}</h2>

      <div className="change__service__content__blog">
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </div>
    </main>
  );
}

export async function getServerSideProps({ params }: { params: { blogId: string } }) {
  const blogId = params.blogId;

  // Fetch data from the GraphQL API
  const { data: { post } } = await query({
    query: `
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
    `,
    variables: { id: blogId },
  });

  // Pass the fetched data as props
  return { props: { post } };
}
