export interface blogType {
  image: string;
  heading: string;
  subheading: string;
  authorImg: string;
  authorName: string;
  time: string;
  slug?: string;
}

// case studies types
export interface caseStudyType {
  id?: string;
  btnText: string;
  time: string;
  heading: string;
  subheading: string;
  image: string | File;
  goto: string;
}

export interface BlogType {
  authorimg: string;
  authorname: string;
  heading: string;
  image: string;
  slug: string;
  subheading: string;
  time: string;
}
