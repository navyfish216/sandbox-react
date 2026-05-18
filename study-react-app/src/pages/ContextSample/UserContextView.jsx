import Parent from "../../components/ContextSample/Parent";
import UserContext from "../../components/ContextSample/UserContext";

function UserContextView () {
  // propsで渡すデータ
  const data = {
    name: "太郎",
    age: 20,
    hobby: "サッカー"
  }

  return (
    <div>
      <UserContext.Provider value={data}>
        <h1>Context APIの例</h1>
        <Parent />
      </UserContext.Provider>
    </div>
  );
}
export default UserContextView;
