'use client'

import File from './file';
import Submit from './submit';

export default function UploadForm() {
  return (
    <>
      <File id={'followers'} label={'Followers'}/>
      <File id={'following'} label={'Following'}/>
      <Submit />
    </>
  );
}
