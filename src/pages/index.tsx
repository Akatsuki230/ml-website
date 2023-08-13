import Head from 'next/head'

const Home = () => {
    return (
        <div>
            <Head>
                <title>mldkyt's website</title>
                <meta name="title" content="mldkyt's website"/>
                <meta name="description" content="Welcome to mldkyt's website!"/>
                <meta name="author" content="mldkyt"/>
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
                        crossOrigin="anonymous"></script>
            </Head>
            <h1 className='text-4xl mx-2 my-4 text-center'>Welcome to mldkyt's website!</h1>
            <div className='container'>
                <h2 className='text-2xl mx-2 font-bold'>About me</h2>
                <div className='mx-1 text-lg'>
                    Your shitposting, coding, crossdressing paladin Astolfo.
                </div>
                <div className='mx-1 flex flex-row flex-wrap'>mldkyt is a YouTuber, TikToker and was a MSC modder.</div>
                <div className='mx-1'>mldkyt has experience in C#, C++, C, Python, Java, Kotlin, JavaScript, TypeScript,
                    HTML, CSS and more.
                </div>
                <div className='mx-1'>You can join my <a href='https://discord.gg/JgFNmSwYME'
                                                         className='text-blue-400'>Discord</a> server, although it's
                    dead. You can also subscribe on <a href='https://youtube.com/@mldkyt'
                                                       className='text-blue-400'>YouTube</a> and follow on <a
                        href='https://tiktok.com/u/mldkyt'>TikTok</a>.
                </div>

                <h2 className='m-2 ml-2 text-2xl font-bold'>Explore: </h2>
                <div className='flex'>
                    <div
                        className='ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-[#111] rounded-md relative'>
                        <p className='text-xl font-bold'>Projects</p>
                        <p>This is a list of my projects</p>
                        <a href='/projects'
                           className='p-2 px-4 mr-2 bg-blue-700 rounded-xl bottom-2 absolute left-1/2 -translate-x-1/2'>Explore</a>
                    </div>

                    <div
                        className='ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-[#111] rounded-md relative'>
                        <p className='text-xl font-bold'>Socials</p>
                        <p>A list of my social links</p>
                        <a href='/socials'
                           className='p-2 px-4 mr-2 bg-blue-700 rounded-xl bottom-2 absolute left-1/2 -translate-x-1/2'>Explore</a>
                    </div>

                    <div
                        className='ml-8 text-center w-40 h-48 bg-gradient-to-b from-[#3C0041] to-[#111] rounded-md relative'>
                        <p className='text-xl font-bold'>Pronouns</p>
                        <p>These are my pronouns</p>
                        <a href='/pron'
                           className='p-2 px-4 mr-2 bg-blue-700 rounded-xl bottom-2 absolute left-1/2 -translate-x-1/2'>View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
