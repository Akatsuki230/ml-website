import NavBar from "@/components/NavBar";
import { Button, Container, MenuItem, Select, Snackbar, Typography } from "@mui/material";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
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

function selectFormatAndRender(format: string, time: Dayjs) {
    switch (format) {
        case 't':
            return time.format('h:MM A');
        case 'T':
            return time.format('h:MM:SS A');
        case 'd':
            return time.format('DD/MM/YYYY');
        case 'D':
            return time.format('DD MMMM YYYY');
        case 'f':
            return time.format('DD MMMM YYYY h:MM A');
        case 'F':
            return time.format('dddd, MMMM, DD, YYYY h:MM A');
        case 'R':
            return relative(time);
        default:
            return time.format('h:MM A');
    }
}

export default function DiscordTimestampGenerator() {
    const [time, setTime] = useState(dayjs());
    const [format, setFormat] = useState('t');
    const [copiedSnackbar, setCopiedSnackbar] = useState(false);

    function trySetTime(x: Dayjs | null) {
        if (x) setTime(x);
    }

    function copy() {
        navigator.clipboard.writeText(`<t:${time.unix()}:${format}>`);
        setCopiedSnackbar(true);
    }

    return (
        <>
            <Head>
                <title>mldkyt's website</title>
            </Head>
            <NavBar selected="home" />
            <Container>
                <Typography variant="h3" className="p-2 px-4">Discord Timestamp Generator</Typography>
                <Typography variant="h5" className="px-8">Start by entering your date: </Typography>
                <div className="px-10">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDateTimePicker format="DD/MM/YYYY HH:MM" value={time} onChange={(x) => trySetTime(x)} />
                    </LocalizationProvider>
                </div>

                <Typography variant="h5" className="px-8">Settings: </Typography>
                <div className="px-10">
                    <Typography>Format: </Typography>
                    <Select value={format} onChange={(x) => setFormat(x.target.value)}>
                        <MenuItem value="t">{time.format('h:MM A')}</MenuItem>
                        <MenuItem value="T">{time.format('h:MM:SS A')}</MenuItem>
                        <MenuItem value="d">{time.format('DD/MM/YYYY')}</MenuItem>
                        <MenuItem value="D">{time.format('DD MMMM YYYY')}</MenuItem>
                        <MenuItem value="f">{time.format('DD MMMM YYYY h:MM A')}</MenuItem>
                        <MenuItem value="F">{time.format('dddd, MMMM, DD, YYYY h:MM A')}</MenuItem>
                        <MenuItem value="R">{relative(time)}</MenuItem>
                    </Select>
                </div>

                <Typography variant="h5" className="px-8">Output: </Typography>
                <Typography className="px-10 text-md">Preview: {selectFormatAndRender(format, time)}</Typography>
                <Typography className="px-10 text-md">
                    Code: <code className="bg-gray-700 text-white p-1 px-2 rounded-lg">{'<'}t:{time.unix()}:{format}{'>'}</code>
                </Typography>
                <br />
                <div className="mx-10">
                    <Button variant="contained" onClick={copy}>Copy</Button>
                </div>
            </Container>
            <Snackbar open={copiedSnackbar} autoHideDuration={1000} onClose={() => setCopiedSnackbar(false)} message="Copied to clipboard!" />
            <Watermark />
        </>
    )
}