import {useState} from "react"

const App = () =>{
    const [items, setItems] = useState(['One', 'Two', 'Three']);
    return <div>
        <div className="list">
            {items.map((item:string)=><Item itemName={item} />)}
        </div>
    </div>
}
type ItemProps = {
    itemName: string
}
const Item = (props:ItemProps) =>{
    return <div>
        {props.itemName}
    </div>
}

export default App
