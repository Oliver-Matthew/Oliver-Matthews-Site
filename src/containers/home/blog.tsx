"use client";

import { gql, useQuery } from "@apollo/client";
import BlogCard from "@/components/layout/blogcard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

interface BlogData {
  user: {
    posts: {
      nodes: Post[];
    };
  };
}

export default function Blog() {
  const { loading, error, data } = useQuery<BlogData>(GET_ARTICLES, {
    variables: { pageSize: 5, page: 1 },
  });

  if (loading) return <p className="text-white mx-auto">Loading...</p>;
  if (error) return <p className="text-white mx-auto">Error: {error.message}</p>;

  const posts = data?.user.posts.nodes || [];

  return (
    <section className="blog__section" id="blog-section">
      <h2 className="blog__header">Blog</h2>

      <div className="blog__posts__wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}  
          breakpoints={{
            320: { 
              slidesPerView: 1, 
              spaceBetween: 10,  
            },
            480: { 
              slidesPerView: 1,  
              spaceBetween: 15, 
            },
            640: { 
              slidesPerView: 2,  
              spaceBetween: 20,
            },
            768: { 
              slidesPerView: 2,  
              spaceBetween: 25, 
            },
            1024: { 
              slidesPerView: 3,  
              spaceBetween: 30,  
            },
            1280: { 
              slidesPerView: 3,  
              spaceBetween: 40,  
            },
            1600: { 
              slidesPerView: 4,  
              spaceBetween: 40,  
            },
          }}
          
          
          
        >
          {posts.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="blog__posts__wrapper">
                <BlogCard
                  title={blog.title}
                  text={blog.content.text}
                  blogId={blog.id}
                  blogImg={blog.coverImage.url}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
