import Option from "../components/Option"

const Options =(props)=> (
    <div>
        <button className='removeBtn' onClick={props.handleDeleteOptions}>Remove All</button>
        <br/><br/>
        {props.options.length ===0 && <p className='error'>Please add an option to proceed.</p>}
        {
            props.options.map((option)=> 
            <Option 
                optionText={option} 
                key={option}
                handleDeleteOption={props.handleDeleteOption}
            />)
        }
    </div>
);

export default Options;