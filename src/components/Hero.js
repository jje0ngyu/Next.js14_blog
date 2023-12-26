import Image from "next/image";
import ProfileImage from "../../public/img/cat03.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={ProfileImage}
        alt="Picture of the author"
        width={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-3">{"Hi, I'm YuJeong"}</h2>
      <h3 className="text-xl">{"Backend Engineer"}</h3>
      <p className="text-sm mb-2">{"풀스택 엔지니어가 되고 싶은, 유정"}</p>
      <Link href="/contact" className="rounded-full bg-amber-400 px-4 py-1 font-bold">
        {"Contact Me"}
      </Link>
    </section>
  );
}
