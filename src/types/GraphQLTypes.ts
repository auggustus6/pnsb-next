type ImageType = {
  url: string;
  alt: string;
}

export type PastoralData = {
  background: ImageType
  title: string;
  content: string;
  gallery?: ImageType[];
  author: string;
  video?: string;
  publishedAt: string;
}