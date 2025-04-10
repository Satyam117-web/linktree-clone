 
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = params.handle?.trim().toLowerCase(); // normalize

  const client = await clientPromise;
  const db = client.db("Bittree");
  const collection = db.collection("links");

  // Make sure the handle is matched in lowercase
  const item = await collection.findOne({ handle });
  console.log(item)

  if (!item) {
    console.log("Handle not found:", handle); // debugging
    return notFound();
  }

  return (
    <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
      <div className="photo flex flex-col items-center justify-center">
        <img
          className="rounded-full w-[150px] h-fit object-cover"
          src={item.pic || "/default.jpg"}
          alt=""
        />
        <span className="font-bold text-xl">@{item.handle}</span>
        <p className="text-white text-md mt-2">{item.desc}</p>
        <div className="links mt-6">
          {item.links.map((linkItem, index) => (
            <div
              key={index}
              className="flex justify-center bg-slate-200 px-2 py-4 shadow-lg rounded-lg min-w-96 my-3"
            >
              <Link
                href={
                  linkItem.link.startsWith("http")
                    ? linkItem.link
                    : `https://${linkItem.link}`
                }
                target="_blank"
              >
                {linkItem.linktext}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
