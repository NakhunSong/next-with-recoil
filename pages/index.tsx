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
      <div>
        <Link href="/todo"><a>To Todo</a></Link>
      </div>
      <div>
        <Link href="/asynchronous"><a>To Asynchronous</a></Link>
      </div>
    </div>
  );
}