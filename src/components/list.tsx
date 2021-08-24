import { observer } from 'mobx-react-lite'
import { Store } from '../store'
import '../styles/list.css';

const MyList = () => {

    const list = Store.backend.items
    // const price = Store.backend.price
    return (
        <div className="my-container">
            {list.map(list => (
                <div className="list-item">{list}</div>
            ))}
        </div>
    )
}

export default observer(MyList);