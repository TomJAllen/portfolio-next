export type Project = {
    slug: string;
    title: string;
    role: string;
    summary: string;
    image: string;        // e.g. "/images/koko.jpg" (must live in /public/images)
    content?: string;     // long description for detail page
    tags?: string[];
  };
  