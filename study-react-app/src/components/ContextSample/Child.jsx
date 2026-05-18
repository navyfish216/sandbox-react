import GrandChild from "./GrandChild";

function Child () {
  return (
    <div style={{ border: "3px solid green", padding: "10px"}}>
      <p>子コンポーネント</p>
      <GrandChild />
    </div>
  );
}
export default Child;
