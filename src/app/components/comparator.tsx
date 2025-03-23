"use client";
import { useState } from "react";

import { saveData } from "../action";
import UploadForm from "./upload-form";
import ComparatorResult from "./comparator-result";
import { Profile } from "../service/Snitch";

export default function Comparator() {
  const [notFollowingBack, setNotFollowingBack] = useState<Profile[]>([]);
  async function formAction(formData: FormData) {
    const { notFollowingBack, error } = await saveData(formData);
    if (notFollowingBack && error) {
      console.log("erro");
    } else {
      setNotFollowingBack(notFollowingBack);
    }
  }

  return (
    <>
      <ComparatorResult result={notFollowingBack} />
      <form action={formAction}>
        <UploadForm />
      </form>
    </>
  );
}
