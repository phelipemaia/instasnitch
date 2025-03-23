"use client";

export default function File({ id, label }: { id: string; label: string }) {
  return (
    <div>
      <label>{label}</label>
      <input type="file" id={id} name={id} required accept=".json" />
    </div>
  );
}
