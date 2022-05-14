import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {
            items.map(item => <Item item={item} key={item.id} />)
            }
        </div>
    )
}

export default ItemList;