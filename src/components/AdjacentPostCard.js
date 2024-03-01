import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// (tailwind를 사용할 때)
// group-hover로 CSS 효과를 줄 수 있다.
// - group 으로 지정된 영역을 hover하면
// - group-hover 부분에 group-hover로 정의한 효과가 나타난다.

const ICON_CLASS =
  "text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl";
export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}) {
  return (
    <Link href={`/posts/${path}`} className="relative w-full bg-black max-h-56">
      <Image
        className="w-full opacity-40"
        src={`/img/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around items-center text-white px-8">
        {type === "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
