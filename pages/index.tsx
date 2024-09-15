import dynamic from "next/dynamic";

const Blog = dynamic(() => import("@/features/blog"), {
  ssr: false,
});

export default function BlogPage() {
  return <Blog />;
}
