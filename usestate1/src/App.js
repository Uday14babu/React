import React from "react";

const initialList= [
  {
    id:'a',
    firstName:'ram',
    lastName:'prasad',
    year:1993,
  },
  {
    id:'b',
    firstName:'raju',
    lastName:'kumar',
    year:1990,
  },
];

const listReducer= (state, action) => {
  switch(action.type){
    case 'REMOVE_ITEM':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
      default:
        throw new Error();
  }
};

const App = () =>{
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });
  function handleRemove(id){
    dispatchListData({type:'REMOVE_ITEM', id});
  }
  if(!listData.isShowList){
    return null;
  }
  return <List list={listData.list}  onRemove={handleRemove}/>;
};
const List = ({ list, onRemove}) =>(
  <ul>
    {list.map((item)=>(
      <Item key={item.id} item={item} onRemove={onRemove}/>
    ))}
  </ul>
);
const Item =({ item, onRemove})=>(
<li>
  <span>{item.firstName}</span>
  <span>{item.lastName}</span>
  <span>{item.year}</span>
  <button type="button" onClick={()=> onRemove(item.id)}>Remove</button>
</li>
);
export default App;