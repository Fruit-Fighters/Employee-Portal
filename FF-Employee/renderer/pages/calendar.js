import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useRouter } from 'next/router';

export default function events({ user }) {
  console.log({ user })
  return (
    <div>
      <h1>FF Deliverables Timeline</h1>
        <iframe src="https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/63afd8ff-78d7-45f5-a7c4-14dcf48841d1/cid-2880E001C119ED84/index.html" width={1000} height={500} ></iframe>
      </div>
  )
}