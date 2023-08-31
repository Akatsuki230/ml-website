import {useLoaderData} from "@remix-run/react";
import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import { redirect} from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const loader: LoaderFunction = async ({ params, request }) => {
  if (!params.id)
    return redirect('/admin/custompages', 302)

  const cookies = request.headers.get('Cookie') ?? ''
  if (!cookies.includes(`token=${process.env.ADMIN_PASSWORD}`)) {
    return redirect('/admin/login', 302)
  }

  const data = await (await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`)).json()
  data.id = params.id
  return {
    customPage: data,
    textBg: `#${data.themeTextBgColor.substring(3)}`,
    textBgOpacity: parseInt(data.themeTextBgColor.substring(1, 3), 16),
  }
}

export const action: ActionFunction = async ({ params, request }) => {
  const body = await request.formData();
  if (!body.has('id') || !body.has('label') || !body.has('type') || !body.has('bgType') || !body.has('bgColour') || !body.has('textColour') || !body.has('textBgColour') || !body.has('textBgOpacity'))
    return redirect(`/admin/custompages/${params.id}/properties`, 302)
  const themeType: string = body.get('bgType')!.toString()
  let themeBgColor: string
  if (themeType == 'colour') {
    themeBgColor = body.get('bgColour')!.toString()
  }
  else {
    themeBgColor = body.get('bgImage')!.toString()
  }

  const original = await (await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`)).json()

  await fetch(`${process.env.FIREBASE_URL}/redirects/${params.id}.json`, {
    method: 'DELETE'
  })

  let textBgOpacityStr = Number(body.get('textBgOpacity')!.toString()).toString(16)
  if (textBgOpacityStr.length == 1)
    textBgOpacityStr = '0' + textBgOpacityStr

  await fetch(`${process.env.FIREBASE_URL}/redirects/${body.get('id')!.toString()}.json`, {
    method: 'PUT',
    body: JSON.stringify({
      label: body.get('label')!.toString(),
      type: body.get('type')!.toString(),
      url: body.get('url')!.toString(),
      themeType: themeType,
      themeTextBgColor: `#${textBgOpacityStr}${body.get('textBgColour')!.toString().substring(1)}`,
      themeTextColor: body.get('textColour')!.toString(),
      themeBgValue: themeBgColor,
      views: original.views
    })
  })
  return redirect(`/admin/custompages/${body.get('id')!.toString()}/properties`, 302)
}

export default function AdminCustompagesIdProperties() {
  const data = useLoaderData()
  return (
    <>
      <h1 className='text-3xl m-2'>Properties of {data.customPage.id}</h1>
      <form action={`/admin/custompages/${data.customPage.id}/properties`} method='post'>
        <h2 className='text-2xl m-2'>General settings</h2>
        <label className='m-1' htmlFor='id'>ID</label>
        <input className='bg-black' type='text' name='id' id='id' defaultValue={data.customPage.id} />
        <br/>
        <label className='m-1' htmlFor='label'>Label</label>
        <input className='bg-black' type='text' name='label' id='label' defaultValue={data.customPage.label} />
        <br/>
        <label className='m-1' htmlFor='url'>URL</label>
        <input className='bg-black' type='url' name='url' id='url' defaultValue={data.customPage.url} />
        <br/>
        <label className='m-1' htmlFor='type'>Type</label>
        <select className='bg-black' name='type' id='type' defaultValue={data.customPage.type}>
          <option value='redirect'>Redirect</option>
          <option value='image'>Image</option>
          <option value='file'>File</option>
        </select>
        <h2 className='text-2xl m-2'>Theme settings</h2>
        <label className='m-1' htmlFor='bgType'>Background Type</label>
        <select name='bgType' id='bgType' className='bg-black' defaultValue={data.customPage.themeType}>
          <option value='colour'>Colour</option>
          <option value='imageStretch'>Image</option>
        </select>
        <br/>
        {data.customPage.themeType == 'colour' && (
          <>
            <label className='m-1' htmlFor='bgColour'>Background Colour</label>
            <input className='bg-black' type='color' name='bgColour' id='bgColour' defaultValue={data.customPage.themeBgValue} />
          </>
        )}
        {data.customPage.themeType == 'imageStretch' && (
          <>
            <label className='m-1' htmlFor='bgImage'>Background Image</label>
            <input className='bg-black' type='url' name='bgImage' id='bgImage' defaultValue={data.customPage.themeBgValue} />
          </>
        )}
        <br/>
        <label className='m-1' htmlFor='textColour'>Text Colour</label>
        <input className='bg-black' type='color' name='textColour' id='textColour' defaultValue={data.customPage.themeTextColor} />
        <br/>
        <label className='m-1' htmlFor='textBgColour'>Text Background Colour</label>
        <input className='bg-black' type='color' name='textBgColour' id='textBgColour' defaultValue={data.textBg} />
        <br/>
        <label className='m-1' htmlFor='textBgOpacity'>Text Background Opacity</label>
        <input className='bg-black' type='range' name='textBgOpacity' id='textBgOpacity' min='0' max='255' defaultValue={data.textBgOpacity} />
        <br/>
        <button className='bg-blue-600 p-1 m-2 rounded-md'>Save</button>
      </form>
      <button className='bg-blue-600 p-1 m-2 rounded-md' onClick={() => location.href = '/admin/custompages'}>Return</button>
      <Navbar sel='' />
    </>
  )
}