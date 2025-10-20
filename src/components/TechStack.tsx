import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/nextjs.webp",
      className: "h-12 w-12",
      imgClass: "h-8 w-8"
    },
    {
      title: "Python",
      src: "/images/logos/python.webp",
      className: "h-12 w-12",
      imgClass: "h-8 w-8"
    },
    {
      title: "FastAPI",
      src: "/images/logos/fastapi.webp",
      className: "h-12 w-12",
      imgClass: "h-8 w-8"
    },
    {
      title: "Google Cloud",
      src: "/images/logos/googlecloud.webp",
      className: "h-12 w-12",
      imgClass: "h-10 w-10"
    },
    {
      title: "PostgreSQL",
      src: "/images/logos/postgresql.webp",
      className: "h-12 w-12",
      imgClass: "h-8 w-8"
    },
    {
      title: "PyTorch",
      src: "/images/logos/pytorch.webp",
      className: "h-12 w-12",
      imgClass: "h-8 w-8"
    },
    {
      title: "scikit-learn",
      src: "/images/logos/scikit-learn.webp",
      className: "h-14 w-14",
      imgClass: "h-12 w-12"
    },
    {
      title: "LangChain",
      src: "/images/logos/langchain.webp",
      className: "h-12 w-12",
      imgClass: "h-8 w-8"
    },
    {
      title: "OpenAI",
      src: "/images/logos/openai.webp",
      className: "h-12 w-12",
      imgClass: "h-8 w-8"
    },
    {
      title: "Java",
      src: "/images/logos/java.webp",
      className: "h-12 w-12",
      imgClass: "h-8 w-8"
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.webp",
      className: "h-12 w-12",
      imgClass: "h-8 w-8"
    }
  ];

  return (
    <div className="mt-16">
      <Heading as="h2" className="mb-8">
        Tech Stack
      </Heading>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {stack.map((item) => (
          <div
            key={item.title}
            className={twMerge(
              "flex flex-col items-center gap-2",
              item.className
            )}
          >
            <div className="relative flex items-center justify-center h-12 w-12" title={item.title}>
              <div className={`relative ${item.imgClass || 'h-8 w-8'}`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};