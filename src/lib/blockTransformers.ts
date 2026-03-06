import { toImageProp, toImagesProp } from './sanity';

export function transformHeroBlock(block: any) {
  return {
    link: block.link,
    links: block.links,
    image: toImageProp(block.image, 1200),
    list: block.list,
    item: block.item
      ? {
          ...block.item,
          images: toImagesProp(block.item.images, 100),
        }
      : undefined,
  };
}

export function transformFeaturesBlock(block: any) {
  return {
    links: block.links,
    items: block.items?.map((item: any) => ({
      ...item,
      image: toImageProp(item.image, 600),
    })),
  };
}

export function transformServicesBlock(block: any) {
  return {
    links: block.links,
    items: block.items?.map((item: any) => ({
      ...item,
      image: toImageProp(item.image, 600),
    })),
  };
}

export function transformReviewsBlock(block: any) {
  return {
    links: block.links,
    items: block.items?.map((item: any) => ({
      ...item,
      image: toImageProp(item.image, 100),
      item: item.item
        ? {
            ...item.item,
            image: toImageProp(item.item.image, 100),
          }
        : undefined,
    })),
  };
}

export function transformCtaBlock(block: any) {
  return {
    links: block.links,
    image: toImageProp(block.image, 1200),
    item: block.item
      ? {
          ...block.item,
          images: toImagesProp(block.item.images, 100),
        }
      : undefined,
  };
}

export function transformContentBlock(block: any) {
  return {
    links: block.links,
    list: block.list,
    image: toImageProp(block.image, 800),
    images: toImagesProp(block.images, 800),
  };
}

export function transformLogosBlock(block: any) {
  return {
    logos: block.logos?.map((logo: any) => ({
      ...logo,
      src: toImageProp(logo.image, 200)?.src ?? '',
      alt: logo.image?.alt ?? logo.text ?? '',
    })),
  };
}

export function transformArticlesBlock(block: any) {
  return {
    links: block.links,
    items: block.items?.map((item: any) => ({
      ...item,
      image: toImageProp(item.image, 600),
      item: item.item
        ? {
            ...item.item,
            image: toImageProp(item.item.image, 100),
          }
        : undefined,
    })),
  };
}

export function transformPricingsBlock(block: any) {
  return {
    links: block.links,
    items: block.items,
  };
}

export function transformFaqsBlock(block: any) {
  return {
    links: block.links,
    items: block.items,
  };
}

export function transformContactBlock(block: any) {
  return {
    links: block.links,
    items: block.items,
  };
}

export function transformBannerBlock(block: any) {
  return {
    icon: block.icon,
    title: block.title,
    description: block.description,
  };
}

const transformerMap: Record<string, (block: any) => any> = {
  heroBlock: transformHeroBlock,
  featuresBlock: transformFeaturesBlock,
  servicesBlock: transformServicesBlock,
  faqsBlock: transformFaqsBlock,
  reviewsBlock: transformReviewsBlock,
  ctaBlock: transformCtaBlock,
  pricingsBlock: transformPricingsBlock,
  contactBlock: transformContactBlock,
  contentBlock: transformContentBlock,
  logosBlock: transformLogosBlock,
  articlesBlock: transformArticlesBlock,
  bannerBlock: transformBannerBlock,
};

export function transformBlock(block: any): any {
  const transformer = transformerMap[block._type];
  return transformer ? transformer(block) : {};
}
