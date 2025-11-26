export interface PostMetadata {
  id: string;
  cover: string;
  title: string;
  tags: string[];
  description: string;
  date: string;
  slug: string;
}

export interface Post {
  metadata: PostMetadata;
  markdown: string | { parent: string } | any;
  slug: string;
  cover?: string;
  title: string;
  tags: string[];
  description: string;
  date: string;
}

export interface PostCardProps {
  post: Post;
  index?: number;
}