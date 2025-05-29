"use client";

import React from 'react';
import Grid from '@mui/material/Grid';

import File from "./file";
import Submit from "./submit";

export default function UploadForm() {
  return (
    <Grid container spacing={3}>
      <Grid display="flex">
        <File id={"followers"} label={"Followers"} />
      </Grid>
      <Grid display="flex">
        <File id={"following"} label={"Following"} />
      </Grid>
      <Grid display="flex">
        <Submit label='Check'/>
      </Grid>
    </Grid>
  );
}
