import React from 'react'
type ListProps<T>= {
    items: T[]
    onClick: (value: T) => void
}
const List =<T  extends {id:number  } > ({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((items, index)=>{
            return (
            <div key={items.id} onClick={() => onClick(items)} ><button>{items.id}</button></div>
            )
        })}
        </div>
    )
}

export default List