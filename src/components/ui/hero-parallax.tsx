"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { cn } from "@/lib/utils";

export const HeroParallax = ({
  products,
  isLowPowerMode,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  isLowPowerMode?: boolean;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);

  return (
    <div className="pt-10 pb-16 md:pb-24 overflow-hidden relative flex flex-col w-full">
      <Header />
      <div className="mt-12 sm:mt-16 w-full space-y-6 sm:space-y-8 overflow-hidden">
        <div className="flex flex-row space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar px-4 sm:px-6 md:px-8">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              key={product.title}
              isLowPowerMode={isLowPowerMode}
            />
          ))}
        </div>
        <div className="flex flex-row space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar px-4 sm:px-6 md:px-8">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              key={product.title}
              isLowPowerMode={isLowPowerMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  const t = useTranslations('projectHeader');
  return (
    <div className="max-w-7xl relative mx-auto pt-24 md:pt-36 px-4 sm:px-6 md:px-8 w-full text-center md:text-left">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground dark:text-white">
        {t('title')}
      </h1>
      <p
        className="max-w-2xl text-base md:text-xl mt-6 text-muted-foreground dark:text-neutral-300 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t.raw('subtitle') }}
      />
    </div>
  );
};

export const ProductCard = ({
  product,
  isLowPowerMode,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  isLowPowerMode?: boolean;
}) => {
  return (
    <div
      key={product.title}
      className={cn(
        "group/product relative shrink-0 rounded-2xl overflow-hidden border border-border/40 bg-card shadow-sm hover:shadow-xl transition-all duration-300",
        isLowPowerMode
          ? "h-44 w-[12rem] sm:h-52 sm:w-[16rem]"
          : "h-48 w-[14rem] sm:h-56 sm:w-[18rem] md:h-64 md:w-[22rem]"
      )}
    >
      <a
        href={product.link}
        className="block w-full h-full relative"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-105"
          alt={product.title}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black/60 transition-opacity duration-300 pointer-events-none" />
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-medium text-sm sm:text-base transition-opacity duration-300">
          {product.title}
        </h2>
      </a>
    </div>
  );
};
