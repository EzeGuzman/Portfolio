import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'i0jzkqwt',
  dataset: 'production',
  apiVersion: '2022-11-10',
  useCdn: true,
  token:
    'sks1aVopGhxC6LBtPEdLq7Vt9Q8l4fCgNKa3pYlNrhWMsldEmeeP42f26NIGlAhmmvg6FNSuNsC8SPXhlTjeZrircdZibhiscYQ1b1VtYQT84DjjGAPDkFLqWsZQgI18EETltDZsUNPCzVs47tulEsLRnXQExSi9clzidoAUEYP01Jo1iITD',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
