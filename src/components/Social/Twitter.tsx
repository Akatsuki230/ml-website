import Link from "next/link";

export default function Twitter() {
    return (
        <div className="rounded-md text-white w-max px-2 inline-block">
            <Link href={"https://twitter.com/mldkyt"} className="flex flex-row flex-nowrap">
                <div className="bg-gray-800 pl-2 pr-1 rounded-l-md">Twitter</div>
                <div className="bg-blue-500 pl-1 pr-1">mldkyt</div>
                <div className="bg-gray-800 rounded-r-md pl-1 pr-2 whitespace-nowrap">1 follower</div>
            </Link>
        </div>
    );
}