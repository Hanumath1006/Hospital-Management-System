'use client';
import { useState, useEffect } from 'react';

export default function PatientsPage(){
  const [patients,setPatients]=useState([]);
  const [name,setName]=useState('');
  useEffect(()=>{ fetch('/api/patients').then(r=>r.json()).then(setPatients); },[]);
  async function add(e){ e.preventDefault(); const res=await fetch('/api/patients',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name})}); const data=await res.json(); setPatients([...patients,data]); setName(''); }
  return (<div style={{padding:20}}><h1>Patients</h1><form onSubmit={add}><input value={name} onChange={e=>setName(e.target.value)} placeholder='Name' /><button>Add</button></form><ul>{patients.map(p=><li key={p.id}>{p.id} - {p.name}</li>)}</ul></div>);
}

