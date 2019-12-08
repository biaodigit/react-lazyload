import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface PropsType {
    children: React.ReactNode
}

interface StateType {
    hasLoadImage: boolean
}

class LazyLoad extends React.Component<PropsType, StateType> {
    private io: any
    constructor(props) {
        super(props)
        this.state = {
            hasLoadImage: false
        }
    }

    private initObserverScrollLoad(entries, node) {
        entries.forEach(item => {
            if (item.intersectionRatio > 0 && !this.state.hasLoadImage) {
                // console.log(node)
                this.loadImage(node)
            }
        })
    }

    public componentDidMount() {
        let node = ReactDOM.findDOMNode(this)
        this.io = new IntersectionObserver((entries) => this.initObserverScrollLoad(entries, node))
        this.io.observe(node)
    }

    private loadImage(node) {
        const src = node.getAttribute('data-src')
        node.setAttribute('src', src)
        this.setState({
            hasLoadImage: true
        })
    }

    public render() {
        const { children } = this.props
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    }

    componentWillUnmount() {
        if (this.io) {
            this.io = null
        }
    }
}

export default LazyLoad