import Watermark from "@/components/Watermark";
import Link from "next/link";


const NumberConverters = () => {
    return ( 
        <>
            <h1 className="text-3xl m-2 mx-4">Number Converters</h1>
            <div className="flex flex-wrap">
                <Link href="/util/number-convert/base2-to-base10" className="p-2 px-4 border-2 border-white mx-2 ml-4 bg-gray-800 rounded-lg">2 &rarr; 10</Link>
                <Link href="/util/number-convert/base10-to-base2" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">10 &rarr; 2</Link>
                <Link href="/util/number-convert/base10-to-base2" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">10 &rarr; 2</Link>
                <Link href="/util/number-convert/base10-to-base16" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">10 &rarr; 16</Link>
                <Link href="/util/number-convert/base16-to-base10" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">16 &rarr; 10</Link>
                <Link href="/util/number-convert/base2-to-base16" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">2 &rarr; 16</Link>
                <Link href="/util/number-convert/base16-to-base2" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">16 &rarr; 2</Link>
                <Link href="/util/number-convert/base2-to-base8" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">2 &rarr; 8</Link>
                <Link href="/util/number-convert/base8-to-base2" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">8 &rarr; 2</Link>
                <Link href="/util/number-convert/base8-to-base10" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">8 &rarr; 10</Link>
                <Link href="/util/number-convert/base10-to-base8" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">10 &rarr; 8</Link>
                <Link href="/util/number-convert/base16-to-base8" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">16 &rarr; 8</Link>
                <Link href="/util/number-convert/base8-to-base16" className="p-2 px-4 border-2 border-white mx-2 bg-gray-800 rounded-lg">8 &rarr; 16</Link>
            </div>
            <Watermark />
        </>
     );
}
 
export default NumberConverters;