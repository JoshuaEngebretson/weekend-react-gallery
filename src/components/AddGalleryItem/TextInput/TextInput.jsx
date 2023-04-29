function TextInput(props) {
  return (
    <div className="side">
      <label htmlFor={props.name}>{props.name}</label><br></br>
      <input type='text' placeholder={props.placeholder}></input>
    </div>
  )
}

export default TextInput;