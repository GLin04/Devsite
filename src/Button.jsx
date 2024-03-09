
function Button() {

    let count = 0;
    const handleClick2 = (name) => {
        if (count < 5) {
            console.log(`${name} Button clicked ${count} time${count > 1 ? 's' : ''}`);
        } else {
            console.log(`${name} alright bud you have clicked me ${count} time${count > 1 ? 's' : ''}`);
        }
    count++;
    }

  return <button onClick={() => handleClick2("superman")}>Click me</button>;

}

export default Button;