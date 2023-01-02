import BreadCrumbs from "components/featureComponents/BreadCrumbs";
import Container from "components/layoutComponents/Container";
import { BlogContentSection } from "components/layoutComponents/Sections";
import FullWidthSection from "components/layoutComponents/Sections/FullWidthSection";
import DefaultLayout from "layouts/DefaultLayout";
import { ReactNode } from "react";

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
      <FullWidthSection img={bgImg} height="470px" />
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
