class Friend extends React.Component {
    render() {
        const {name, hobbies} = this.props;
        // ALT Place LoCaTiOn
        // const lis = hobbies.map(h => <li>{h}</li>)
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {/* WOULD PLACE LoCaTiOn HERE */}
                    {hobbies.map(h => <li>{h}</li>)} 
                </ul>
            </div>
        )
    }
}