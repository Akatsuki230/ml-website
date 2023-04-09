import Watermark from "@/components/Watermark";
import Link from "next/link";

export default function RedirectNotFound() {
    return (
        <>
            <div className="text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p>This redirect is not existant.</p>
                <Link href="/" className="underline text-blue-600 text-2xl">Go to the home page.</Link>
            </div>
            <Watermark />
        </>
    )
}