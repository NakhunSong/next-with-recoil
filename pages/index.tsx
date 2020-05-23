import React, { FC } from 'react';
import Link from 'next/link';

export default function Home()  {
  return (
    <div>
      <div className="title">
        <span>
          Next.js with Recoil
        </span>
      </div>
      <Link href="/todo"><a>To Todo</a></Link>
    </div>
  );
}