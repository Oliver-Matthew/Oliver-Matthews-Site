import { query } from "../../../lib/hashnode";
import Image from "next/image";

// interface Post {
//   author: {
//     name: string;
//     profilePicture: string;
//     socialMediaLinks: {
//       twitter: string;
//     };
//   };
//   content: {
//     html: string;
//   };
//   coverImage: {
//     url: string;
//   };
//   id: string;
//   publishedAt: string;
//   title: string;
// }

interface PostParams {
  params: { blogId: string };
}

export default async function BlogPost({ params }: PostParams) {
  const { blogId } = params;

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
    variables: {
      id: blogId,
    }
  });

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
        />
      </figure>
      <h2 className="change__service__page__header">{post.title}</h2>
      <div className="change__service__content__blog">
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </div>
    </main>
  );
}
