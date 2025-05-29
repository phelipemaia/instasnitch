"use client";

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

import { Profile } from "../service/Snitch";

const PAGE_SIZE = 10;

const pagination = (page: number) => {
  const index = page - 1;
  return {
    page,
    index,
    offset: page * PAGE_SIZE,
    range: [index * PAGE_SIZE, index * PAGE_SIZE + PAGE_SIZE],
  }
}

export default function ComparatorResult({ result }: { result: Profile[] }) {
  const [pageContent, setPageContent] = useState<Profile[]>([]);

  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    const paginationData = pagination(page);
    setPageContent(result.slice(paginationData.range[0], paginationData.range[1]));
  }

  useEffect(() => {
    setPageContent(result.slice(0, PAGE_SIZE));
  }, [result]);

  return (
    <Grid>
      <ul>
        {pageContent.map((element) => {
          return (
            <li key={element.name}>
              <a href={element.href}>{element.name}</a>
            </li>
          );
        })}
      </ul>
      <Pagination count={10} defaultPage={1} onChange={handleChange} />
    </Grid>
  );
}
