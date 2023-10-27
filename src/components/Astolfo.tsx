
export default function Astolfo() {
    const openSocial = () => {
        location.href = '/social'
    }

    return (
        <div onClick={openSocial} className="fixed bottom-0 right-0">
            <img src="/cuteboy.png" />
        </div>
    )
}