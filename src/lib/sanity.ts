import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: 'w6fixec7',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);

/** Convert a Sanity image to {src, alt} for fulldev/ui blocks */
export function toImageProp(
  image?: SanityImageSource & { alt?: string },
  width = 800,
): { src: string; alt: string } | undefined {
  if (!image) return undefined;
  return {
    src: urlFor(image).width(width).format('webp').url(),
    alt: (image as any).alt ?? '',
  };
}

/** Convert an array of Sanity images */
export function toImagesProp(
  images?: (SanityImageSource & { alt?: string })[],
  width = 200,
): { src: string; alt: string }[] | undefined {
  if (!images?.length) return undefined;
  return images.map((img) => toImageProp(img, width)!);
}
