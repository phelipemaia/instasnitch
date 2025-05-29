import React from 'react';
import Grid from '@mui/material/Grid';

import Comparator from "./components/comparator";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Grid container spacing={2} direction="column">
      <div className={styles.page}>
        <main className={styles.main}>
          <Comparator />
        </main>
      </div>
    </Grid>
  );
}
