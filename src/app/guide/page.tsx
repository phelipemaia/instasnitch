import React from 'react';
import Grid from '@mui/material/Grid';

import styles from "./page.module.css";

export default function Guide() {
  return (
    <Grid container spacing={2} direction="column">
      <div className={styles.page}>
        <main className={styles.main}>
          How to use Instasnitch:
        </main>
      </div>
    </Grid>
  );
}
