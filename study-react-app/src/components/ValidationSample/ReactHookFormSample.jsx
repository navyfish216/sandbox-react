import {useForm} from "react-hook-form";

function ReactHookFormSample () {
  // useFormから必要な関数を取得
  const {
    register, // 入力欄を登録
    handleSubmit, // 送信時の処理をまとめる
    formState: {errors} // エラー情報
  } = useForm();

  const mySubmit = (data) => {
    alert(`送信された内容：${data.name}`);
  }

  return (
    <div>
      <h2>ReactHookFormの例</h2>
      <form onSubmit={handleSubmit(mySubmit)}>
        <input 
          {...register("name", {
            required: "※名前は必須です",
            minLength: {value: 2, message: "※2文字以上で入力してください"},
            pattern: {
              value: /^[^0-9]*$/, // 数字を含まない
              message: "※数字は使用できません"
            },
          })}
          placeholder="名前を入力してください"
        />
        <p style={{color: "red"}}>{errors.name?.message}</p>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}
export default ReactHookFormSample;