"use client";
import React, { useState } from "react";
import Grid from '@mui/material/Grid';

import { saveData } from "../action";
import UploadForm from "./upload-form";
import ComparatorResult from "./comparator-result";
import { Profile } from "../service/Snitch";

export default function Comparator() {
  const [notFollowingBack, setNotFollowingBack] = useState<Profile[]>([]);
  async function formAction(formData: FormData) {
    const { notFollowingBack, error } = await saveData(formData);
    if (notFollowingBack && error) {
      console.log("erro", error);
    } else {
      setNotFollowingBack(notFollowingBack);
    }
  }

console.log(notFollowingBack)

  return (
    <Grid container spacing={2} direction="column">
      <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
        {notFollowingBack.length > 0 && <ComparatorResult result={notFollowingBack} />}
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
        <form action={formAction}>
          <UploadForm />
        </form>
      </Grid>
    </Grid>
  );
}
