"use client";

import { research } from "@/constants/research";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

export const Research = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {research.map((item: Product, idx: number) => (
        <Link
          href={`/research/${item.slug}`}
          key={`research-${idx}`}
          className="group"
        >
          <div className="relative overflow-hidden rounded-md aspect-video">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-neutral-600 line-clamp-2">
              {item.description}
            </p>
            {item.stack && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.stack.slice(0, 3).map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};