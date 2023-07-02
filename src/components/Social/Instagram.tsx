import Link from "next/link";

export default function Instagram() {
    return (
        <div className="rounded-md text-white w-max px-2 inline-block">
            <Link href={"https://instagram.com/mldkyt"} className="flex flex-row flex-nowrap">
                <div className="bg-gray-800 pl-2 pr-1 rounded-l-md">Instagram</div>
                <div className="bg-gradient-to-r from-yellow-600 to-red-600 pl-1 pr-1">mldkyt</div>
                <div className="bg-gradient-to-r from-red-600 to-purple-700 rounded-r-md pl-1 pr-2 whitespace-nowrap">31 followers</div>
            </Link>
        </div>
    );
}