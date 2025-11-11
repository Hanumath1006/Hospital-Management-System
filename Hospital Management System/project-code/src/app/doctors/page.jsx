'use client';
import { useState, useEffect } from 'react';

export default function DoctorsPage(){
  const [doctors,setDoctors]=useState([]);
  const [name,setName]=useState('');
  useEffect(()=>{ fetch('/api/doctors').then(r=>r.json()).then(setDoctors); },[]);
  async function add(e){ e.preventDefault(); const res=await fetch('/api/doctors',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name})}); const data=await res.json(); setDoctors([...doctors,data]); setName(''); }
  return (<div style={{padding:20}}><h1>Doctors</h1><form onSubmit={add}><input value={name} onChange={e=>setName(e.target.value)} placeholder='Name' /><button>Add</button></form><ul>{doctors.map(p=><li key={p.id}>{p.id} - {p.name}</li>)}</ul></div>);
}
