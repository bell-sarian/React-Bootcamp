function getNum() {
    return Math.floor(Math.random() * 10 + 1)
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if(num === 7) {
            msg = <h1> YES</h1>
        }
        else{
            msg = "NO"
        }
        return(
            <div>
                <h1> your number is {num} </h1>
                <p>{msg}</p>

                {/* Turnary */}
                <p>{num === 7 ? 'Congrats!' : 'You are unlucky :( '}</p>
                {
                    num === 7 
                    ? <img src="https://media4.giphy.com/media/fsQbx1hX7hPBBpIM5b/giphy.gif" /> 
                    : null
                }
                {
                    num === 7 &&
                    <img src="https://media4.giphy.com/media/fsQbx1hX7hPBBpIM5b/giphy.gif" /> 
                }
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))