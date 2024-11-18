"use client";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";
import Image from "next/image";
import { query } from "../../lib/hashnode";
// import ChangeImg from "@/assets/images/services/change-service.jpg";
// import Post from "./[pageSlug]/page";

interface PostParams {
  params: { postSlug: string };
}

interface Post {
  author: {
    name: string;
    profilePicture: string;
    socialMediaLinks: {
      twitter: string;
    };
  };
  content: {
    html: string;
  };
  coverImage: {
    url: string;
  };
  id: string;
  publishedAt: string;
  title: string;
}

export async function getServerSideProps({ params }: PostParams) {
  const { postSlug } = params;
  
  const response = await query({
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
    //   host: "<Your Hashnode Host (ex: site.hashnode.dev)>",
      id: postSlug,
    },
  });

  const { post } = response.data;

  return {
    props: {
      post: post as Post,
    },
  };
}

export default function BlogPost({ post }: { post: Post }) {
  useGSAP(() => {
    const header = new SplitType(".change__service__page__header", {
      types: "chars",
    });
    const textsLines = gsap.utils.toArray(
      ".change__service__content"
    ) as HTMLElement[];

    gsap.from(".change__service__image > img", {
      width: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".change__service__page",
        start: "100px bottom",
        // end: "+=100",
        toggleActions: "play none none none",
      },
    });

    header?.chars?.forEach((word) => {
      gsap.fromTo(
        word,
        {
          y: "100",
          rotate: "30deg",
          autoAlpha: 0,
        },
        {
          y: "0",
          rotate: "0deg",
          autoAlpha: 1,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".change__service__page",
            start: "top bottom",
            // end: "+=100",
            toggleActions: "play none none none",
          },
        }
      );
    });

    textsLines?.forEach((line) => {
      gsap.fromTo(
        line,
        {
          y: "100",
          skewY: "5",
          autoAlpha: 0,
        },
        {
          y: "0",
          skewY: "0",
          autoAlpha: 1,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: line,
            start: "top bottom",
            // end: "+=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [".change__service__page"]);
  if (!post) return <div>Post not found</div>;

  return (
    <main className="change__service__page">
        
      <figure className="change__service__image">
        <Image
          src={post.coverImage.url}
          alt="change"
          placeholder="blur"
          width={1440}
          height={400}
        />
      </figure>
      <h2 className="change__service__page__header ">{post.title}</h2>
      <div className="change__service__content">
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </div>
    </main>
  );
}
