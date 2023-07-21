export default function Stats({items}){
    if(!items.length) return <p>No items 😍</p>
    const numItems=items.length
    const numPacked= items.filter((item)=>item.packed).length
    const percentage= Math.round((numPacked/numItems)*100)
    return(
      <>
      <em>
        {percentage===100? 'You got everything to  go ':
       <footer className="stats">
        you have {numItems} items on your list ad you are already packed {numPacked} which is {percentage}%
       </footer>
       }
       </em>
      </>
    )
  
  }
  