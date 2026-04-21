import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/ui/Header";
import Form from "@/components/ui/Form";

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  );
}
