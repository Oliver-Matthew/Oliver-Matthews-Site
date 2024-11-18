"use client";

import React from "react";
import Image from "next/image";
import LinkButton from "@/components/common/buttons/link-button";

type BlogCardProps = {
  blogImg: string;
  title: string;
  blogId: string;
  text: string;
};


export default function BlogCard(props: BlogCardProps) {
  const { blogImg, title, blogId, text } = props;
  return (
    <div className="blog__item">
      <figure className="blog__item__image">
        <Image src={blogImg} alt="post" width={400} height={400} />
      </figure>
      <div className="blog__text__wrapper">
        <h3>{title}</h3>
        <p className="line-clamp-3">{text}</p>
        <LinkButton href={`/blog-post/${blogId}`} BUTTON_TYPE="GREEN">
          Read More
        </LinkButton>
      </div>
    </div>
  );
}
