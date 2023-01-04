import BreadCrumbs from "components/featureComponents/BreadCrumbs";
import Container from "components/layoutComponents/Container";
import { BlogContentSection } from "components/layoutComponents/Sections";
import FullWidthSection from "components/layoutComponents/Sections/FullWidthSection";
import DefaultLayout from "layouts/DefaultLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { AiOutlineArrowLeft as BackIcon } from "react-icons/ai";

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
  const router = useRouter();
  const backLink = router.asPath.split("/").slice(0, -1).join("/");

  return (
    <DefaultLayout>
      <FullWidthSection img={bgImg} height="470px" />
      <Container>
        <div style={{ padding: "1rem 0 2rem" }}>
          <BreadCrumbs />
        </div>

        <Link href={backLink}>
          <BackIcon size={30} cursor="pointer" opacity={0.7} />
        </Link>

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
