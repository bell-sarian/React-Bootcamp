class JSXDemo extends React.Component {
    render() {
        return(
            <div>
                <h1>My JSX Image</h1>
                {/* embed JavaScript in the JSX */}
                <h1> My number is: {2 * 8.4 } </h1> 
                <img src="https://images.unsplash.com/photo-1611665016348-a91002f5f2bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))