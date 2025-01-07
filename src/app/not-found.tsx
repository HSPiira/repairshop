import Image from "next/image";

export const metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 justify-center items-center flex flex-col gap-4">
        <h2>Page Not Found</h2>
        <Image
          src="/images/404.jpg"
          className="m-0 rounded-xl"
          width={400}
          height={400}
          alt="404"
        />
      </div>
    </div>
  );
}
