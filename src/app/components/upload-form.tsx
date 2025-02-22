'use client'
import { saveData } from '../action';
import File from './file';
import Submit from './submit';

export default function UploadForm() {
  async function formAction(formData: FormData) {
    await saveData(formData);
    alert("Save success!");
  }
  
  return (
    <form action={formAction}>
      <File id={'followers'} label={'Followers'}/>
      <File id={'following'} label={'Following'}/>
      <Submit />
    </form>
  );
}
