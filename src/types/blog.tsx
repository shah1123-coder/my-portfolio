export type Blog = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  tags?: string[];
  externalUrl?: string;
  // rest
  [key: string]: any;
};
