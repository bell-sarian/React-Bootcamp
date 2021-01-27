class Hello extends React.Component {
    render() {
      // this.props.from = "blue" // NOT ALLOWED TO CHANGE... is Read only
      console.log(this.props)

      let bangs = "!".repeat(this.props.bangs);
      const props = this.props;
      return (
        <div>
          <h1>Hello {props.to} from {props.from}{bangs}</h1>
          <img src={this.props.img} />
          </div>
      )
    }
  }