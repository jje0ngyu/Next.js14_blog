import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  post: { title, description, date, category, path },
}) {
  return (
    <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
      <Link href={`/post/${path}`}>
        <Image
          className="w-full"
          src={`/img/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-2 py-1 mt-2">{category}</span>
        </div>
      </Link>
    </article>
  );
}
