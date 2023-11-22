import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div className="card bg-base-100 shadow-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative">
      <Link href={post.url} className="absolute inset-0"></Link>
      {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <div className="card-body">
        <h2 className="card-title text-2xl">
            {post.title}
        </h2>
        <time dateTime={post.date} className="text-primary text-xs">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <p>If a dog chews shoes whose shoes does he choose?</p>

      </div>
    </div>
  )
}

export const PostList = () => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="flex flex-col gap-8">
      {posts.map((post, idx) => (
        <>
        <PostCard key={idx} {...post} />
        </>
      ))}
    </div>
  );
}