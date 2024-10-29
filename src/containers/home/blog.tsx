import React from "react";
import Image from "next/image";
import BlogImage from "@/assets/images/home/hero-img.jpeg";
import LinkButton from "@/components/common/buttons/link-button";

// const postLists = [{ id: 1, title: "Blog Post", image: BlogImage }];

export default function Blog() {
  return (
    <section className="blog__section" id="blog-section">
      <h2 className="blog__header">Blog</h2>
      <div className="blog__posts__wrapper">
        {Array.from({ length: 3 }, (_, index) => {
          return (
            <div className="blog__item" key={index}>
              <figure className="blog__item__image">
                <Image
                  src={BlogImage}
                  alt="post"
                  width={400}
                  height={400}
                  placeholder="blur"
                />
              </figure>
              <div className="blog__text__wrapper">
                <h3>Blog Title</h3>
                <LinkButton href="/" BUTTON_TYPE="GREEN">
                  Read More
                </LinkButton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
