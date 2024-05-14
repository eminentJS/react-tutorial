import { Fragment, useState } from 'react';

function ListGroup() {
  let items = ['New York', 'San francisco', 'Tokyo', 'London', 'Paris'];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
