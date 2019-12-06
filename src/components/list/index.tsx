import * as React from 'react'
import './index.scss'

const List: React.FC = () => {
    return (
        <ul>
            <li>
                <img src={require('./empty.png')}/>
            </li>
        </ul>
    )
}

export default List;
