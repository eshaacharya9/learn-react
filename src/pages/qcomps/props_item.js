function Item({ name, isPacked }) {
  // if (isPacked) {
  //   return <li className="item"><del>{name}</del> </li>;
  // }
  // return <li className="item"> {name} </li>

  // using ternary
  return isPacked? <li className="item"><del>{name}</del></li> : <li className="item">{name}</li>
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={false}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={true}
          name="Socks"
        />
      </ul>
    </section>
  );
}
