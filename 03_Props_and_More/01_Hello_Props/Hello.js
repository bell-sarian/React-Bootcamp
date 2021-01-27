class Hello extends React.Component {
    render() {
      // this.props.from = "blue" // NOT ALLOWED TO CHANGE... is Read only

      const props = this.props;
      return <h1>Hello {props.to} from {props.from}</h1>
    }
  }