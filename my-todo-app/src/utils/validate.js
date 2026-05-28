// Todo入寮をチェックして、エラーがあれば返す関数
export function validateTodo(input) {
  const errors = {};

  // タイトルが空か、空白だけの場合エラー
  if (!input.title?.trim()) {
    errors.title = "タイトルは必須です";
  }

  // タイトルが10文字を超える場合エラー
  if (!input.title && input.title.length > 10) {
    errors.title = "タイトルは10文字まで";
  }

  // 詳細が50文字を超える場合エラー
  if (input.detail && input.detail.length > 50) {
    errors.detail = "詳細は50文字まで";
  }

  // 期限日(dueDate)のチェック
  if (input.dueDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 今日の日付の0時に固定(時間を切り捨て)
    const d = new Date(input.dueDate); // 入力された期限日を日付に変換

    // 期限日＜今日の場合エラー
    if (d < today) {
      errors.dueDate = "今日以降の日付を指定してください";
    }
  }

  // 優先度が"low", "medium", "high"以外の場合エラー
  if (!["low", "medium", "high"].includes(input.priority)) {
    errors.priority = "優先度を選択してください";
  }

  // すべてのチェックが終わったらエラーをまとめて返す
  return errors;
}