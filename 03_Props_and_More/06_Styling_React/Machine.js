class Machine extends React.Component {
    render() {
        let s1 = this.props.s1;
        let s2 = this.props.s2;
        let s3 = this.props.s3;
        const winner = s1 === s2 && s2 === s3;
        // ALT OPTION
        // const {s1, s2, s3} = this.props;
        const styles = {fontSize: "50px", backgroundColor:"purple"}

      return (
        <div className="Machine">
          <label htmlFor="textInput"/>
          <h1>Slot Machines!</h1>
          <p style={{fontSize: "50px", backgroundColor:"purple"}}>{s1} {s2} {s3} </p>
          {/* {s1 === s2 && s2 === s3 ? <p>You win!</p> : <p>You lose!</p>} */}
          {/* NOTE Class names MUST BE USING ' ' NOT " " */}
          <p className={winner ? 'Machine-Win' : 'Machine-Lose'}>{ winner ? 'You win': 'You lose'}</p>
        </div>
      )
    }
  }
  