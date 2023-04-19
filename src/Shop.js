import React from 'react';
import { useState } from 'react';
function Shop(){
    const [name,SetName]=useState("");
    const [price,SetPrice]=useState();
    const [array,Setarray]=useState([]);
  const [total,SetTotal]=useState(0);
        function added(){
        Setarray([...array,{name:name,price:price}]);
        SetTotal((total)=>total+parseInt(price));
        SetName("");
        SetPrice("");
    
    }
  
    return(
        <>
           <div className='block'>
            <input className='name' type='text' 
            placeholder='Enter Item'
             onChange={e=>{SetName(e.target.value)}} 
            value={name}/>
            <input className='price' type='number' 
            placeholder='Enter Price'
             onChange={e=>{SetPrice(e.target.value)}}
             value={price}/>
             <button className='add' onClick={added}>Add</button>  
           </div>
           {/* <div>
        {
            array.map((todo,id)=>{
                return <div id="todo" key={id}>
                 <table>
                    <tr>
                        <th>{todo.name}</th>
                         <th>{todo.price}</th>
                    </tr>
                    <tr>
                       
                    </tr>
                 </table>
                     
                 
                   
                    </div>
            })
        }
       </div> */}
       <div className='table'>
        <table>
            <tr>
                <th>Name</th>
                <th>price</th>
            </tr>
            {
                array.map((todo,id)=>{
                    // if(parseInt(todo.price)<1){
                    //     return alert("please enter correct price")
                    // }
                    return <tr key={id}>
                        <th>{todo.name}</th>
                        <th>{todo.price}</th>
                        </tr>       
            })           
}
<tr>
    <th>Total</th>
    <th>{total}</th>
</tr>
        </table>
       </div>
        </>
    )
}
export default Shop;