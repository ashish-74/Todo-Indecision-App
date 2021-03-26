const Option=(props)=>(
    <div className='container'>            
        {props.optionText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='optionBtn' onClick={(e)=>{
            props.handleDeleteOption(props.optionText);
        }}>
            Remove
        </button>
    </div>
);

export default Option;