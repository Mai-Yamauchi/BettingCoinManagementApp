<!-- src/views/LoginPage.vue -->
<template>
  <div>
    <h1>ボードゲーム・テーブルゲーム用電子ベットサポート</h1>
    <input type="button" value="ルーム作成"><br>
    <input type="text" value="ルーム名入力"><br>
    <input type="text" value="ルームコードを入力"><br>
    <input type="button" value="参加"><br>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
