import { FormEvent, useState, useEffect } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
import { resourceProps } from './components/Resource/Resource'


function App() {

const [resources, setResources] = useState<resourceProps[]>(()=>{
 try{ const savedResources = localStorage.getItem("resources");
  return savedResources ? JSON.parse(savedResources) : 
  [
  {name:'megacredit', amount:0, production:0},
  {name:'steel', amount:0, production:0}
  ]}
catch(error){
  console.error(error)
  return [
    { name: 'megacredit', amount: 0, production: 0 },
    { name: 'steel', amount: 0, production: 0 }
  ];
}
 })


const handleIncrement = (increment:number,index:number,field:'amount'|'production')=>{
  setResources((prevResources)=>{
    const updatedResourrce=[...prevResources];
    updatedResourrce[index]={
      ...updatedResourrce[index],
      [field]:updatedResourrce[index][field]+increment
    }
    return updatedResourrce
  })
}


const handleSubmit = (e:FormEvent)=>{
  e.preventDefault();
  setResources(prevRes=>
    (prevRes.map(resource=>(
    {...resource, amount:resource.amount+resource.production}
  ))))

}

useEffect(()=>{
  localStorage.setItem("resources",JSON.stringify(resources))
},[resources])

  return (
    <form  onSubmit={handleSubmit} className="container">
      <PlayerName></PlayerName>
      {resources.map((resource,index)=>(
              <Resource 
              key={resource.name}
              name={resource.name}
              amount={resource.amount}
              production={resource.production}
              onChange={(increment:number)=>handleIncrement(increment,index,'amount')}
              productionchange={(increment:number)=>handleIncrement(increment,index,'production')}
              ></Resource>
      ))}
     
      <button type='submit' className='nextRound'>Next round</button>
    </form>
  )
}

export default App
