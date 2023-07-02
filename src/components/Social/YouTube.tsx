import Link from "next/link";

export default function YouTube() {
    return (
        <div className="rounded-md text-white w-max px-2 inline-block">
            <Link href={"https://youtube.com/@mldkyt"} className="flex flex-row flex-nowrap">
                <div className="bg-gray-800 pl-2 pr-1 rounded-l-md">YouTube</div>
                <div className="bg-red-600 pl-1 pr-1">mldkyt</div>
                <div className="bg-gray-800 rounded-r-md pl-1 pr-2 whitespace-nowrap">556 subscribers</div>
            </Link>
        </div>
    );
}