import type {ActionFunction} from "@remix-run/node";
import { redirect} from "@remix-run/node";
import Navbar from "~/components/Navbar";

export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  if (!formData.has('id') || !formData.has('label') || !formData.has('url') || !formData.has('type') || !formData.has('bgType') || !formData.has('textColour') || !formData.has('textBgColour') || !formData.has('textBgOpacity'))
    return redirect(`/admin/custompages/create`, 302)
  const bgType = formData.get('bgType')!.toString()
  let bgValue = ''
  if (bgType == 'colour') {
    bgValue = formData.get('bgColour')!.toString()
  }
  else if (bgType == 'imageStretch') {
    bgValue = formData.get('bgImage')!.toString()
  }
  else {
    console.log('Invalid bgType')
    return redirect(`/admin/custompages/create`, 302)
  }

  const dataCheck = await (await fetch(`${process.env.FIREBASE_URL}/redirects/${formData.get('id')!.toString()}.json`)).json()
  if (dataCheck != null) {
    console.log('Already exists')
    return redirect(`/admin/custompages/create`, 302)
  }

  const textBgColour = `#${Number(formData.get('textBgOpacity')!.toString()).toString(16)}${formData.get('textBgColour')!.toString().substring(1)}`

  await fetch(`${process.env.FIREBASE_URL}/redirects/${formData.get('id')!.toString()}.json`, {
    method: 'PUT',
    body: JSON.stringify({
      url: formData.get('url')!.toString(),
      label: formData.get('label')!.toString(),
      views: 0,
      type: formData.get('type')!.toString(),
      themeType: formData.get('bgType')!.toString(),
      themeBgValue: bgValue,
      themeTextColor: formData.get('textColour')!.toString(),
      themeTextBgColor: textBgColour
    })
  })

  return redirect(`/admin/custompages`, 302)
}

export default function AdminCustompages_Create() {
  return <>
    <a href='/admin/custompages'>
      <button className='bg-blue-600 p-1 px-2 m-1 rounded-md'>Back</button>
    </a>
    <form action={`/admin/custompages/create`} method='post'>
      <h2 className='text-2xl m-2'>General settings</h2>
      <label className='m-1' htmlFor='id'>ID</label>
      <input className='bg-black' type='text' name='id' id='id'/>
      <br/>
      <label className='m-1' htmlFor='label'>Label</label>
      <input className='bg-black' type='text' name='label' id='label'/>
      <br/>
      <label className='m-1' htmlFor='url'>URL</label>
      <input className='bg-black' type='text' name='url' id='url'/>
      <br/>
      <label className='m-1' htmlFor='type'>Type</label>
      <select className='bg-black' name='type' id='type'>
        <option value='redirect'>Redirect</option>
        <option value='image'>Image</option>
        <option value='file'>File</option>
      </select>
      <h2 className='text-2xl m-2'>Theme settings</h2>
      <label className='m-1' htmlFor='bgType'>Background Type</label>
      <select name='bgType' id='bgType'>
        <option value='colour'>Colour</option>
        <option value='imageStretch'>Image</option>
      </select>
      <br/>
      <>
        <label className='m-1' htmlFor='bgColour'>Background Colour</label>
        <input className='bg-black' type='color' name='bgColour' id='bgColour'/>
      </>
      <>
        <label className='m-1' htmlFor='bgImage'>Background Image</label>
        <input className='bg-black' type='url' name='bgImage' id='bgImage'/>
      </>
      <br/>
      <label className='m-1' htmlFor='textColour'>Text Colour</label>
      <input className='bg-black' type='color' name='textColour' id='textColour'/>
      <br/>
      <label className='m-1' htmlFor='textBgColour'>Text Background Colour</label>
      <input className='bg-black' type='color' name='textBgColour' id='textBgColour'/>
      <br/>
      <label className='m-1' htmlFor='textBgOpacity'>Text Background Opacity</label>
      <input className='bg-black' type='range' name='textBgOpacity' id='textBgOpacity' min='0' max='255'/>
      <br/>
      <button className='bg-blue-600 p-1 m-2 rounded-md'>Save</button>
    </form>
    <Navbar  sel='' />
  </>
}