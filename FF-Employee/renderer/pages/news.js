import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useRouter } from 'next/router';

export default function events({ user }) {
  console.log({ user })
  return (
    <div>
      <h1>FF News</h1>
        <h3>ISB Fruit Fighters has been founded with positions as follows: </h3> 
        <p>Matthew Chen, CEO</p>
        <p>Lucas Wang, COO</p>
        <p>Aashir Patel, Co-COO</p>
        <p>Ravinder Olivier Dadiala, CTO</p>
        <p>Milos Dmitrovic, Tech Lead</p>
      <footer>
        <a href="/protected">Home</a>
      </footer>
    </div>
  )
}