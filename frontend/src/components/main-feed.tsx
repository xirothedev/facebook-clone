import CreatePost from "./main/create-post";
import PostItem from "./main/post-item";
import StoriesList from "./main/stories-list";

export default function MainFeed() {
  return (
    <section className="flex-1 max-w-[600px] mx-auto pt-16 px-2">
      <CreatePost />
      <StoriesList />
      <PostItem />
      <PostItem />
      <PostItem />
    </section>
  );
}