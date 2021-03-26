import React,{useState}  from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';

function IndecisionApp(props) {

    const [options,setOptions] = useState([]);
    
    const handleDeleteOptions=()=>{
        setOptions([]);    
    }
    const handleDeleteOption=(optionToRemove)=>{
        setOptions(options.filter
            (option => optionToRemove !== option)
        );
    }
    const handleAddOption=(option)=>{
        if(!option){
            return 'Enter valid value to add item';
        }
        else if(options.indexOf(option)>-1){
            return 'This option already exits.'
        }
        else{
            setOptions(
                options.concat(option)
            )
        }
    }
    const handlePick=()=>{
        const pick = Math.floor(Math.random()*options.length);
        const option = options[pick];
        alert(option);
    }
       const subtitle = 'Put your life in hands of a computer !'
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={options.length > 0} handlePick={handlePick}/>
                <Options options={options} handleDeleteOptions={handleDeleteOptions} handleDeleteOption={handleDeleteOption} />
                <AddOption handleAddOption={handleAddOption}/>
            </div>
        )
    }

export default IndecisionApp;