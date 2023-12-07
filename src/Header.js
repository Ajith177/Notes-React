import React, { useState } from 'react';

const Header = () => {
    
    const [name, setName] = useState("");
    const [list, setList] = useState([]);

    const [desc, setDesc] =useState("");
    // const [usage,setUsage] =useState([]);

    function oninput(event) {
        setName(event.target.value);
    }



    // function ondone(event){
    //     setDesc(event.target.value);
    // }

    function buttoncheck() {
        console.log(name);
        // console.log(desc);
        setList([...list, name])
        // setUsage([...usage,desc])
        // setDesc("");
        setName("");
    }

    function handleDelete(index,item){
        alert(`DO you want to delete this == ${item}`);
        console.log(item)
        let deletearr=[...list]
        deletearr.splice(index,1);
        setList(deletearr);

    }

    function handleEdit(index,item){ 
    console.log(index,list[index]);
    setName(item);

    }

    function onoutput(){

    }


    return (

        <>
        <div className='complete-all'>
            <div className='complete'>
                <div className='division'> 
                    <h3>NOTES Application</h3>
                    <input type="text" placeholder="Enter the input"  value={name} onChange={oninput} autofocus />
                    <textarea type="textarea" class="textarea" placeholder="Enter the Description" onChange={onoutput} autofocus/>
                    <button type="submit" class="add" onClick={buttoncheck}>ADD</button>
                    {
                        list.map((item,index) => {
                            return (<>
                                <p>{item}</p>
                                <button class="edit" onClick={()=>handleEdit(index,item)}>EDIT</button>
                                <button class="delete" onClick={()=>handleDelete(index,item)}>DELETE</button>
                            </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Header
