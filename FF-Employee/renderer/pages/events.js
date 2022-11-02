import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useRouter } from 'next/router';

export default function events({ user }) {
  console.log({ user })
  return (
    <div>
      <h1>Fruit Fighters Events</h1>
      <div>
        <a href="/home">Home</a>
      </div>
    </div>
  )
}