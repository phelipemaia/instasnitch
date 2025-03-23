'use client'

import { Profile } from '../service/Snitch';

export default function ComparatorResult({ result }: { result: Profile[] }) {
  return (
    <ul>
      {result.map(element => {
        return (<li key={element.name}>
          {element.name}
          </li>)
      })}
    </ul>
  );
}
