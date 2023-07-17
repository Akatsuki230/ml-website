import Link from "next/link";

export default function TikTok() {
    return (
        <div className="rounded-md text-white w-max px-2 inline-block">
            <Link href={"https://www.tiktok.com/@mldkyt"} className="flex flex-row flex-nowrap">
                <div className="bg-gray-800 pl-2 pr-1 rounded-l-md">TikTok</div>
                <div className="bg-gradient-to-r from-cyan-300 to-black pl-1 pr-1">mldkyt</div>
                <div className="bg-gradient-to-r from-black to-red-500 rounded-r-md pl-1 pr-2 whitespace-nowrap">2 followers</div>
            </Link>
        </div>
    );
}