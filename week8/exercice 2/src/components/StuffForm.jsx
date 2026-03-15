import { useState } from "react";

export default function StuffForm({onAdd}) {
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const submit = (e)=> {
    e.preventDefault();
    console.log(`A new object named ${name}, price ${price}$ will be added to the list`)
      onAdd({name, price:Number(price)});
}
  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={(e)=>setName(e.target.value)} />

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={(e)=>setPrice(e.target.value)} />

      <button onClick={submit}>Add Stuff</button>
    </form>
  );
}
