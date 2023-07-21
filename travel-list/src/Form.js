import {useState} from "react"

export default function Form({onAddItems}){

    const [description, setdescription]=useState("")
    const [quantity, setQuantity]=useState(1)
    
  
    function handleSubmit(e){
       e.preventDefault();
       //console.log(e)
       if(!description)return;
  
       const newitem={description,quantity,packed:false,id:Date.now()}
       console.log(newitem)
       onAddItems(newitem)
  
       setdescription("")
       setQuantity(1);
      
  
    }
  
    return(
      <>
       <div >
       
  
         <form className="add-form" onSubmit={handleSubmit}>
         <h3> what do you need for your trip </h3>
         <select
          value={quantity}
          onChange={(e)=>setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
           
          ))}
        </select>
        <input  value={description} onChange={(e)=>setdescription(e.target.value)} type="text" placeholder="item...."></input>
        <button>Add</button>
         </form>
  
       </div>
  
     
      </>
    )
  
  }
  