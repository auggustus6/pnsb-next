import DefaultLayout from "layouts/DefaultLayout";
import { ReactNode } from "react";
import BreadCrumbs from "components/BreadCrumbs";
import Container from "components/Container";
import { BlogContentSection } from "components/Sections";
import BackGroundSection from "components/Sections/FullWidthSection";

type BlogLayoutProps = {
  children?: ReactNode;
  bgImg?: string;
  postTitle?: string;
  postContent?: string;
  publishedAt?: string;
  videoUrl?: string;
};

const BlogLayout = ({
  children,
  bgImg = "",
  postTitle = "",
  postContent = "",
  publishedAt = "",
  videoUrl,
}: BlogLayoutProps) => {
  return (
    <DefaultLayout>
      <BackGroundSection img={bgImg} height="470px" />
      <Container>
        <div style={{ padding: "1rem 0 2rem" }}>
          <BreadCrumbs />
        </div>
        <BlogContentSection
          title={postTitle}
          dangerousHtml={postContent}
          publishedAt={publishedAt}
          videoUrl={videoUrl}
        />
        {children}
      </Container>
    </DefaultLayout>
  );
};

export default BlogLayout;
