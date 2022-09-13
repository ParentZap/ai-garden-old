import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-[512px] mx-auto my-10 p-10 bg-white rounded-lg">
      <Link href="/sd">
        <a className="py-3 block text-center bg-black text-white rounded-md mt-10">
          Stable Diffusion Inpainting
        </a>
      </Link>
    </div>
  );
}
