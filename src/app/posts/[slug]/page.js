import { getPostData } from "@/service/posts"

export default async function PostPage({params:{slug}}){
  // 1. 전달된 slug에 해당하는 포스트 데이터를 읽어와서
  // 2. 데이터를 마크다운뷰어에 표기하면 됨

  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
    </>
  )
}