import * as React from 'react'
import LazyLoad from '../lazyload'
import './index.scss'

const imgObj = {
    default: require('./empty.png'),
    src: require('./h20.jpg')
}
const list = Array(18).fill(imgObj);

const List: React.FC = () => {
    return (
        <ul>
            {list.map((item, index) => (
                <li className="item" key={index}>
                    <LazyLoad>
                        <img src={item.default} data-src={item.src} />
                    </LazyLoad>
                </li>
            ))}
        </ul>
    )
}

export default List;
