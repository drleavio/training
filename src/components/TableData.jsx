import React, { useState } from 'react'

const TableData = () => {
    const data=[
        {
            name:"Rahul",
            age:24,
            gender:"Male",
            rollno:12,
            classNames:11
        },
        {
            name:"Vikash",
            age:19,
            gender:"Male",
            rollno:9,
            classNames:11
        },
        {
            name:"Sumit",
            age:22,
            gender:"Male",
            rollno:10,
            classNames:11
        },
        {
            name:"Aman",
            age:23,
            gender:"Male",
            rollno:13,
            classNames:11
        }
    ]
    const [option,setOption]=useState('name');
    const [value,setValue]=useState('');
    const [search,setSearch]=useState([])
    const [show,setShow]=useState(false);
    const handlechange=(e)=>{
    setValue(e.target.value)
       data.map((val)=>{
        if(option==='name' && val.name.toLocaleLowerCase().includes(value)){
            console.log(val);
           setSearch(val)
        }if(option==='rollno' && val.rollno.toString().includes(value)){
            console.log(val);
            setSearch(val)
        }
       }) 
       console.log(search); 
    }
    const handleblur=(field)=>{
        if(field!=='name' && field!=='rollno') setShow(!show)
    }
  return (
    <div >
        <button onClick={()=>setShow(true)} className='p-2 rounded bg-primary'>filters</button>
        {
            show?
        <div className='d-flex p-2 w-100 align-items-center justify-content-between rounded' style={{gap:"10px", backgroundColor:"lightcyan"}}>
        <div className='w-100 rounded' onBlur={handleblur('name')}>
            <select className='w-100' style={{padding:"6px", borderRadius:"8px"}} name="" id="" onChange={(e)=>setOption(e.target.value)}>
                <option value="name">Name</option>
                <option value="rollno">Rollno</option>
            </select>
        </div>
        <div className='w-100 rounded' onBlur={handleblur('rollno')}>
            <input className='w-100' style={{padding:"4px", borderRadius:"8px"}} type="text" onChange={handlechange}/>
        </div>
        <button onClick={()=>setShow(!show)} className='bg-primary' style={{padding:"8px", borderRadius:"50%", cursor:"pointer"}}>X</button>
    </div>:null
}
<table class="table">
  <thead>
   
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Roll no</th>
      <th scope='col'>Class</th>
    </tr>
  </thead>
  <tbody>
 {    
        !value?
        data.map((val,ind)=>{
            return <tr key={ind}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td>{val.rollno}</td>
                <td>{val.classNames}</td>
            </tr>
        }):
             <tr>
            <td>{search.name}</td>
            <td>{search.age}</td>
            <td>{search.gender}</td>
            <td>{search.rollno}</td>
            <td>{search.classNames}</td>
        </tr>
        

    
}    
  </tbody>
</table>
</div>
  )
}

export default TableData