import React, {useEffect} from "react"

export default function AdminLogin() {
    const [textToken, setTextToken] = React.useState('')
    const [bad, setBad] = React.useState(false)

    useEffect(() => {
        if (window.location.hash === '#bad') {
            document.cookie = `token=; path=/; max-age=0; samesite=strict; secure`
            setBad(true)
        }
    }, [])

    const testAndSetToken = () => {
        document.cookie = `token=${textToken}; path=/; max-age=31536000; samesite=strict; secure`
        window.location.href = '/admin/custompage'
    }

    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="ml-4 mt-4 text-3xl font-bold">Enter token to continue</h1>
                <input type="password" value={textToken} onChange={(e) => setTextToken(e.target.value)}
                       className="bg-gray-800 border-2 border-gray-300 rounded-lg px-2 py-1 ml-2 mt-2"/>
                <button onClick={testAndSetToken}
                        className="bg-gray-800 hover:bg-gray-500 active:bg-gray-700 px-2 py-1 rounded-lg ml-2 mt-2">Continue
                </button>
            </div>
            {
                bad && (
                    <div className="flex flex-col items-center bg-red-500 rounded-lg">
                        <h1 className="ml-4 mt-4 text-3xl font-bold">Incorrect token</h1>
                        <p className="ml-4 mt-4 text-lg">Please try again</p>
                    </div>
                )
            }
        </main>
    )
}