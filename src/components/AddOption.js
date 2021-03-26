import React,{useState}  from 'react';

function AddOption(props) {
    
    const [error,setError] = useState('');

    const handleAddOption=(event)=>{
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = props.handleAddOption(option);

        setError(error);

        if(!error){
            event.target.elements.option.value = '';
        }
    }
        return(
            <div>
                {error && <p className='error'>{error}</p>}
                <br/>
                <form onSubmit={handleAddOption}>
                    <input className='addText' type='text' name='option'/>&nbsp;&nbsp;&nbsp;
                    <button className='addOption'>Add Option</button>
                </form>
            </div>
        )
    }

export default AddOption;