class App extends React.Component {
    render() {
      return (
        <div>
          {/* Pass in attributes called PROPS (properties) */}
          <Hello 
            to='Ringo' 
            from='Paul' 
            bangs={10}
            img="https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png"
          />

        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  