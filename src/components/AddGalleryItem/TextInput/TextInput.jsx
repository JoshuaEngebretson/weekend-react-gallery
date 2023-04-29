function TextInput(props) {
  // console.log(props);
  return (
    <div className="side">
      <label htmlFor={props.name}>{props.name}</label><br></br>
      <input
        type='text'
        placeholder={props.placeholder}
        value={props.item}
        className={props.Required}
        onChange={(evt) => {props.setItem(evt.target.value)}}
      />
    </div>
  )
}

export default TextInput;