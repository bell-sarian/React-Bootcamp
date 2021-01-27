class App extends React.Component {
    render() {
      let options = ["🍊", "🍌", "🍒"]
      return (
        <div>
          <Machine 
            s1={options[Math.floor(Math.random() * options.length)]}
            s2={options[Math.floor(Math.random() * options.length)]}
            s3 ={options[Math.floor(Math.random() * options.length)]}
          />
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  