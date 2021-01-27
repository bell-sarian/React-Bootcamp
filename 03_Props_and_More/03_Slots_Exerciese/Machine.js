class Machine extends React.Component {
    render() {
        let s1 = this.props.s1;
        let s2 = this.props.s2;
        let s3 = this.props.s3;
        // ALT OPTION
        // const {s1, s2, s3} = this.props;

      return (
        <div>
          <h1>Slot Machines!</h1>
          <h2>{s1} {s2} {s3} </h2>
          {s1 === s2 && s2 === s3 ? <p>You win!</p> : <p>You lose!</p>}
        </div>
      )
    }
  }
  