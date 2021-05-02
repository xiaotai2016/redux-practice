import React, {useState} from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([])
  const handleInput = (e)=>{
    setInputValue (e.target.value); 
  }
  const handListChange = ()=>{
    setList([...list,inputValue])
    setInputValue('')
  }
  const handDelete= (index)=>{
    var newlist = list;
    newlist.splice(index,1)
    setList([...newlist])
  }
  return (
    <div>
    <input value={inputValue} onChange= {handleInput} />
    <button onClick={handListChange}>Submit</button>
    <ul>
      {
        list.map((item, index)=> (<li key={item} onClick={()=>{handDelete(index)}}>{item}</li>))
      }
    </ul>
    </div>
  );



}

export default App;
