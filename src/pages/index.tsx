import Head from 'next/head'
import React from 'react';

const Home = () => {
    const [showProgrammingList, setShowProgrammingList] = React.useState(false);

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
                <div className='mx-1'>mldkyt has experience in {showProgrammingList ? <span>C#, C++, C, Python, Java, Kotlin, JavaScript, TypeScript,
                    HTML, CSS and more. <span className='text-blue-400 cursor-pointer' onClick={() => setShowProgrammingList(false)}>hide</span></span> : <span className='text-blue-400 cursor-pointer' onClick={() => setShowProgrammingList(true)}>show languages</span>}
                </div>
                <div className='mx-1'>You can join my <a href='https://discord.gg/JgFNmSwYME'
                                                         className='text-blue-400'>Discord</a> server, although it's
                    dead. You can also subscribe on <a href='https://youtube.com/@mldkyt'
                                                       className='text-blue-400'>YouTube</a> and follow on <a
                        href='https://tiktok.com/u/mldkyt'>TikTok</a>.
                </div>
                <h2 className='m-2 ml-2 text-2xl font-bold'>Some of my projects: </h2>

                <div className='ml-4 p-2 bg-[#2B0029] rounded-lg'>
                    <h3 className='ml-2 text-xl'>Requisha</h3>
                    <p className='ml-4'>Requisha is a love bot I made for my friends' public Discord server.</p>
                    <a href='/ryow_dc' className='ml-2 bg-blue-700 hover:bg-blue-600 active:bg-blue-900 px-2 py-1 rounded-lg'>show me it in action pretty please :3</a>
                    <a href='/ryow-companion' className='ml-2 bg-blue-700 hover:bg-blue-600 active:bg-blue-900 px-2 py-1 rounded-lg'>MORE details</a>
                </div>

                <br />
                <a className='ml-2 bg-blue-700 hover:bg-blue-600 active:bg-blue-900 px-2 py-1 rounded-lg' href='/projects'>Open full project list</a>

                <h2 className='m-2 ml-2 text-2xl font-bold'>Don't forget to follow me here: </h2>

                <div className='flex'>
                    <a href='https://youtube.com/@mldkyt' className='px-8 py-4 m-2 bg-gradient-to-b from-[#511] to-[#111] rounded-xl'>YouTube</a>
                    <a href='https://youtube.com/@mldkyt' className='px-8 py-4 m-2 bg-gradient-to-b from-[#155] to-[#111] rounded-xl'>TikTok</a>
                    <a href='https://youtube.com/@mldkyt' className='px-8 py-4 m-2 bg-gradient-to-b from-[#136] to-[#111] rounded-xl'>Discord Server</a>
                </div>

                <h2 className='m-2 ml-2 text-2xl font-bold'>Some cool links: </h2>

                <a className='ml-4 text-blue-500' href='/newestvideo'>Latest video hotlink </a>
                <span className='text-blue-500 cursor-pointer' onClick={() => navigator.clipboard.writeText('https://mldkyt.com/newestvideo')}>(Copy link)</span>
                <br/>
                <a className='ml-4 text-blue-500' href='/neweststream'>Latest stream hotlink </a>
                <span className='text-blue-500 cursor-pointer' onClick={() => navigator.clipboard.writeText('https://mldkyt.com/neweststream')}>(Copy link)</span>

                <h2 className='m-2 ml-2 text-2xl font-bold'>What can you find on this website: </h2>

                <div className='bg-[#2B0029] rounded-lg p-2 ml-4'>
                    <h3 className='ml-2 text-xl font-bold'>Meshsave</h3>
                    <p className='ml-4'>The meshsave is a save for My Summer Car that makes the car look like it's been through world wars.</p>
                    <a href='/meshsave' className='ml-2 bg-blue-600 p-1 px-2 rounded-lg hover:bg-blue-600 active:bg-blue-900'>Go</a>
                </div>
                <div className='bg-[#2B0029] rounded-lg p-2 ml-4 mt-2'>
                    <h3 className='ml-2 text-xl font-bold'>Projects</h3>
                    <p className='ml-4'>This is my project list. Contains some online utilities.</p>
                    <a href='/projects' className='ml-2 bg-blue-600 p-1 px-2 rounded-lg hover:bg-blue-600 active:bg-blue-900'>Go</a>
                </div>
                <div className='bg-[#2B0029] rounded-lg p-2 ml-4 mt-2'>
                    <h3 className='ml-2 text-xl font-bold'>Socials</h3>
                    <p className='ml-4'>This is my social link list. You will find more than what you just saw above.</p>
                    <a href='/social' className='ml-2 bg-blue-600 p-1 px-2 rounded-lg hover:bg-blue-600 active:bg-blue-900'>Go</a>
                </div>
                <div className='bg-[#2B0029] rounded-lg p-2 ml-4 mt-2'>
                    <h3 className='ml-2 text-xl font-bold'>Pronouns</h3>
                    <p className='ml-4'>These are my pronouns. You can use them if you want to, or just use he/him.</p>
                    <a href='/pron' className='ml-2 bg-blue-600 p-1 px-2 rounded-lg hover:bg-blue-600 active:bg-blue-900'>Go</a>
                </div>

                <p className='fixed bottom-2 left-2 italic'>p.s. i am not a webpage designer and i am not native english</p>
            </div>
        </div>
    )
}

export default Home
