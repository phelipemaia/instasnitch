"use client";

import React from 'react';
import { useFormStatus } from "react-dom";
import Button from '@mui/material/Button';

export default function Submit({ label }: { label: string } = { label: 'Submit' }) {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending}>{label}</Button>
  );
}
