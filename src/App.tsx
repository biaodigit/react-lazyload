import React from 'react'

interface PropsType {
    // text:string
}

class App extends React.Component<PropsType, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <h1>react lazyload！</h1>
                {/*<p>{this.props.text}</p>*/}
            </React.Fragment>
        )
    }
}

export default App
