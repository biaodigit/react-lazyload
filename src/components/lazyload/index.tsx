import * as React from 'react'

interface PropsType {
   children: React.ReactNode
}

interface StateType {

}

class LazyLoad extends React.Component<PropsType, StateType> {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {

    }

    render() {
        const {children} = this.props
        return (
            <React.Fragment>
               {children}
            </React.Fragment>
        )
    }

    componentWillUnmount() {
       
    }
}

export default LazyLoad