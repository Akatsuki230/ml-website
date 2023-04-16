import NavBar from "@/components/NavBar";
import Head from "next/head";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import Watermark from "@/components/Watermark";

function relative(time: Dayjs) {
    // show relative time like "5 minutes ago" or "in 3 days"
    const diff = dayjs().diff(time, 'second');
    if (diff < -58060800) return 'in ' + Math.floor(-diff / 29030400) + ' years';
    if (diff < -29030400) return 'in a year';
    if (diff < -29030400) return 'in ' + Math.floor(-diff / 2419200) + ' months';
    if (diff < -4838400) return 'in a month';
    if (diff < -604800) return 'in ' + Math.floor(-diff / 86400) + ' days';
    if (diff < -172800) return 'in a day';
    if (diff < -3600) return 'in ' + Math.floor(-diff / 3600) + ' hours';
    if (diff < -7200) return 'in an hour';
    if (diff < -120) return 'in ' + Math.floor(-diff / 60) + ' minutes';
    if (diff < -60) return 'in a minute';
    if (diff < 5) return 'just now';
    if (diff < 60) return diff + ' seconds ago';
    if (diff < 120) return 'a minute ago';
    if (diff < 3600) return Math.floor(diff / 60) + ' minutes ago';
    if (diff < 7200) return 'an hour ago';
    if (diff < 86400) return Math.floor(diff / 3600) + ' hours ago';
    if (diff < 172800) return 'a day ago';
    if (diff < 604800) return Math.floor(diff / 86400) + ' days ago';
    if (diff < 1209600) return 'a week ago';
    if (diff < 2419200) return Math.floor(diff / 604800) + ' weeks ago';
    if (diff < 4838400) return 'a month ago';
    if (diff < 29030400) return Math.floor(diff / 2419200) + ' months ago';
    if (diff < 58060800) return 'a year ago';
    return Math.floor(diff / 29030400) + ' years ago';
}

function selectFormatAndRender(format: string, time: Dayjs, preview24Format: boolean) {
    switch (format) {
        case 't':
            return time.format(preview24Format ? 'H:mm' : 'h:mm A');
        case 'T':
            return time.format(preview24Format ? 'H:mm:ss' : 'h:mm:ss A');
        case 'd':
            return time.format('DD/MM/YYYY');
        case 'D':
            return time.format('DD MMMM YYYY');
        case 'f':
            return time.format(preview24Format ? 'DD MMMM YYYY H:mm' : 'DD MMMM YYYY h:mm A');
        case 'F':
            return time.format(preview24Format ? 'dddd, MMMM, DD, YYYY, H:mm' : 'dddd, MMMM, DD, YYYY h:mm A');
        case 'R':
            return relative(time);
        default:
            return time.format(preview24Format ? 'H:mm' : 'h:mm A');
    }
}

export default function DiscordTimestampGenerator() {
    const [time, setTime] = useState(dayjs());
    const [format, setFormat] = useState('t');
    const [copiedSnackbar, setCopiedSnackbar] = useState(false);
    const [preview24Format, setPreview24Format] = useState(false);

    function setDate(date: Date) {
        // copy the date, leave the time
        const newTime = time;
        newTime.year(date.getFullYear());
        newTime.month(date.getMonth());
        newTime.date(date.getDate());
        setTime(newTime);
    }

    function setTime1(date: Date) {
        // copy the time, leave the date
        const newTime = time;
        newTime.hour(date.getHours());
        newTime.minute(date.getMinutes());
        setTime(newTime);
    }

    function copy() {
        navigator.clipboard.writeText(`<t:${time.unix()}:${format}>`);
        setCopiedSnackbar(true);
        setTimeout(() => setCopiedSnackbar(false), 1000);
    }

    return (
        <>
            <Head>
                <title>mldkyt's website</title>
                <meta name="title" content="Discord timestamp generator | mldkyt's website" />
                <meta name="description" content="Generates timestamps." />
                <meta name="author" content="mldkyt" />
            </Head>
            <NavBar />
            <br />
            <h1 className="p-2 px-4 text-3xl font-bold">Discord Timestamp Generator</h1>

            <h2 className="px-8 text-xl">Settings: </h2>
            <div className="px-10">
                <label>Date: </label>
                <input type='datetime-local' value={time.format('YYYY-MM-DD[T]HH:mm')} onChange={x => setTime(dayjs(x.currentTarget.value))}
                        className="border-2 border-black rounded-lg drop-shadow-lg p-0.5 px-1" />
                <br />
                <label>Format: </label>
                <select className="border-2 border-black rounded-lg drop-shadow-lg p-0.5 px-1" value={format} onChange={(x) => setFormat(x.target.value)}>
                    <option value="t">{time.format(preview24Format ? 'H:mm' : 'h:mm A')}</option>
                    <option value="T">{time.format(preview24Format ? 'H:mm:ss' : 'h:mm:ss A')}</option>
                    <option value="d">{time.format('DD/MM/YYYY')}</option>
                    <option value="D">{time.format('DD MMMM YYYY')}</option>
                    <option value="f">{time.format(preview24Format ? 'DD MMMM YYYY H:mm' : 'DD MMMM YYYY h:mm A')}</option>
                    <option value="F">{time.format(preview24Format ? 'dddd, MMMM, DD, YYYY, H:mm' : 'dddd, MMMM, DD, YYYY h:mm A')}</option>
                    <option value="R">{relative(time)}</option>
                </select>
                <br />
                <input className="mr-2" type='checkbox' checked={preview24Format} onChange={x => setPreview24Format(x.currentTarget.checked)} />
                <label>Preview is 24-hour</label>
            </div>


            <h2 className="px-8 text-xl">Output: </h2>
            <p className="px-10 text-md">Preview: {selectFormatAndRender(format, time, preview24Format)}</p>
            <p className="px-10 text-md">
                Code: <code className="bg-gray-700 text-white p-1 px-2 rounded-lg">{'<'}t:{time.unix()}:{format}{'>'}</code>
            </p>
            <div className="mx-10 mt-3">
                <button onClick={copy} className="bg-green-500 p-0.5 px-1.5 rounded-lg border-2 border-black">Copy</button>
                {copiedSnackbar ? <span className="ml-2 text-green-500">Copied!</span> : null}
            </div>
            <Watermark />
        </>
    )
}