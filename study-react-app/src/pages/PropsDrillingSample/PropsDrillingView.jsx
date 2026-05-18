import Parent from "../../components/PropsDrillingSample/Parent";

function PropsDrillingView () {
  // propsで渡すデータ
  const data = {
    name: "太郎",
    age: 20,
    hobby: "サッカー"
  }

  return (
    <div>
      <h1>プロップスドリリングの例</h1>
      <Parent user={data} />
    </div>
  );
}
export default PropsDrillingView;
