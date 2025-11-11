'use client';
import { useState, useEffect } from 'react';

export default function AppointmentsPage(){
  const [apps,setApps]=useState([]);
  const [doctors,setDoctors]=useState([]);
  const [patientId,setPatientId]=useState('');
  const [doctorId,setDoctorId]=useState('');
  const [startsAt,setStartsAt]=useState('');
  const [endsAt,setEndsAt]=useState('');

  useEffect(()=>{ fetch('/api/appointments').then(r=>r.json()).then(setApps); fetch('/api/doctors').then(r=>r.json()).then(setDoctors); },[]);

  async function book(e){
    e.preventDefault();
    const res=await fetch('/api/appointments',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({patientId:parseInt(patientId), doctorId:parseInt(doctorId), startsAt, endsAt})});
    const data=await res.json();
    if(res.ok){ setApps([...apps,data]); alert('Booked'); } else { alert(JSON.stringify(data)); }
  }

  return (<div style={{padding:20}}>
    <h1>Appointments</h1>
    <form onSubmit={book}>
      <div><label>Patient ID <input value={patientId} onChange={e=>setPatientId(e.target.value)} /></label></div>
      <div><label>Doctor <select value={doctorId} onChange={e=>setDoctorId(e.target.value)}><option value=''>Select</option>{doctors.map(d=><option key={d.id} value={d.id}>{d.name}</option>)}</select></label></div>
      <div><label>Starts At <input value={startsAt} onChange={e=>setStartsAt(e.target.value)} placeholder='YYYY-MM-DDTHH:MM:SSZ' /></label></div>
      <div><label>Ends At <input value={endsAt} onChange={e=>setEndsAt(e.target.value)} placeholder='YYYY-MM-DDTHH:MM:SSZ' /></label></div>
      <button type='submit'>Book</button>
    </form>
    <h2>Existing</h2>
    <ul>{apps.map(a=><li key={a.id}>{a.id} - patient {a.patientId} doctor {a.doctorId} {a.startsAt} to {a.endsAt} status {a.status}</li>)}</ul>
  </div>);
}

