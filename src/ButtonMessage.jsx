
function Button(props) {

    let count = 0;
    
    const handleClick = (e) => e.target.textContent = "I am clided event";

    const handleDoubleClick = (e) => e.target.textContent = "I am double clided event";

    const handleClick2 = (name) => {
        if (count < 5) {
            console.log(`${name} Button clicked ${count} time${count > 1 ? 's' : ''}`);
        } else {
            console.log(`${name} alright bud you have clicked me ${count} time${count > 1 ? 's' : ''}`);
        }
    count++;
    }

    return <button onDoubleClick={(e) => handleDoubleClick(e)} onClick={(e) => handleClick(e)}>Click me event</button>;
//    return <button onClick={() => handleClick2(props.name)}>Click me</button>;

}

export default Button;