import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";


export default function FormChannel({setItems}){

    const [post,setPost]=useState("")
    const [channel,setChannel]=useState("")
  
    function handleClick(e){
      e.preventDefault()
      setChannel(e.target.value)
    }
  
  
  
    function handleSubmit(e){
      e.preventDefault();
      //console.log(e)
      if(!post)return;
  
      const newitem={post,channel}
      //console.log(newitem)
      setItems(newitem)
      
      setPost("")
      setChannel("");
     
  
   }
  
    //console.log(post,channel)
  
  
  
    return(
      <div>
  
  <Form  onSubmit={handleSubmit}>
  
  {/* <Button value="facebook" onClick={handleClick} variant="success" type="submit">
         Facebook
        </Button>
  
  
        <Button  value="twitter" onClick={handleClick} variant="success" type="submit">
        twitter
        </Button> */}
  
        <Form.Group className="mb-3" controlId="formBasiText">
          <Form.Label>What do you want to Post </Form.Label>
          <Form.Control  onChange={(e)=>setPost(e.target.value)} value={post}  as="textarea" rows={3} placeholder="Enter your idea" />
          <Form.Text className="text-muted">
          a brief description of what the post is like.
          </Form.Text>
        </Form.Group>


  
        <Form.Group className="mb-3" controlId="formSelectChannel">
          <Form.Label>Select the channel</Form.Label>
  
          <Form.Select value={channel}
        onChange={(e)=>setChannel(e.target.value)}
          aria-label="Default select example">
      
        <option value="twitter">Twitter</option>
         <option value="facebook">Facebook</option>
          <option value="insta">Instagram</option>
          <option value="tick">TiktoK</option>
          </Form.Select>
             
        </Form.Group>
        <Button variant="primary" type="submit">
          Generate Post 
        </Button>
      </Form>
  
     
      
  
      
  
      </div>
    )
  }
  
  