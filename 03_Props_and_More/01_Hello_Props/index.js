class App extends React.Component {
    render() {
      return (
        <div>
          {/* Pass in attributes called PROPS (properties) */}
          <Hello to='Ringo' from='Paul'  />
          <Hello to='Richie' from='Bell' />
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  