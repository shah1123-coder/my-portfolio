"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeMedia, setActiveMedia] = useState<StaticImageData | string>(
    product.thumbnail
  );
  const [isVideo, setIsVideo] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime > 13.75 * 60 + 45) { // 13:45
        video.currentTime = 7.83 * 60 + 20; // 7:50
      }
    };

    const handlePlay = () => {
      video.currentTime = 7.83 * 60 + 20; // Start at 7:50
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
    };
  }, [activeMedia]);

  const handleThumbnailClick = (media: StaticImageData | string) => {
    setActiveMedia(media);
    setIsVideo(typeof media === 'string' && media.endsWith('.mp4'));
  };

  return (
    <div className="py-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={product.slug}
        className="relative"
      >
        {mounted && (isVideo || (typeof activeMedia === 'string' && activeMedia.endsWith('.mp4'))) ? (
          <video 
            src={activeMedia as string} 
            controls 
            autoPlay 
            muted 
            loop
            width="1000"
            height="1000"
            className="w-full h-auto rounded-md object-contain"
          />
        ) : (
          <>
            <Image
              src={activeMedia}
              alt="Project media"
              height={1000}
              width={1000}
              className="w-full h-auto rounded-md object-contain"
            />
            <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
          </>
        )}
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap">
        {product.images.map((media, idx) => (
          <button
            onClick={() => handleThumbnailClick(media)}
            key={`media-thumbnail-${idx}`}
            className={`relative overflow-hidden rounded-md border-2 ${activeMedia === media ? 'border-blue-500' : 'border-transparent'}`}
          >
            {mounted && typeof media === 'string' && media.endsWith('.mp4') ? (
              <video 
                ref={videoRef}
                src={media} 
                className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
                muted
                loop
                playsInline
                onLoadedMetadata={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.currentTime = 7.83 * 60 + 20; // Start at 7:50
                }}
              />
            ) : (
              <Image
                src={media}
                alt="Media thumbnail"
                height="1000"
                width="1000"
                className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
              />
            )}
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <Heading className="font-black mb-2 pb-1"> {product.title}</Heading>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className="max-w-xl mt-4">{product.description}</Paragraph>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">
        {product?.content}
      </div>

      <a
        href={product.href}
        target="__blank"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
      >
        Live Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
    </div>
  );
};