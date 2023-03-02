
export default function RedirectToCorrectSite() {
    if (typeof window !== 'undefined') {
        window.location = '/project/kekmetspeedo';
    }
    return (
        <>
            <h1>Redirecting to the correct site...</h1>
        </>
    );
}