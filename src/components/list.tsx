import { observer } from 'mobx-react-lite'
import { Store } from '../store'
import '../styles/list.css';

const MyList = () => {

    const list = Store.backend.items
    // const price = Store.backend.price
    let id = 1
    return (
        <div className="my-container">
            {list.map(list => (
                <div className="list-item">{id++}. {list}</div>
            ))}
        </div>
    )
}

export default observer(MyList);