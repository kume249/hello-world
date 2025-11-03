// app/page.tsx
export default function Page() {
  return (
    <main>
      <h2>作成したいアプリの仕様</h2>
      <ol>
        <li>
          <strong>単語登録</strong><br />
          ターゲット1900の単語を登録できる
        </li>
        <li>
          <strong>英文の登録</strong><br />
          読んだ英文や受けた試験の英文を登録できる
        </li>
        <li>
          <strong>単語抽出</strong><br />
          登録した英文から単語を自動的に抽出して単語帳に追加
        </li>
        <li>
          <strong>全文検索</strong><br />
          単語帳の単語から、読んだ英文や受けた試験の長文を検索できる
        </li>
        <li>
          <strong>単語の確認</strong><br />
          登録済みの英文や試験問題の文が、単語帳の単語を含むか確認できる
        </li>
        <li>
          <strong>新規問題作成</strong><br />
          単語帳の単語または登録済み英文をもとに、新しい英文を生成（ChatGPT 利用）<br />
          生成した英文を試験問題として登録
        </li>
        <li>
          <strong>正誤判定（読解）</strong><br />
          登録済みの試験問題の英文を読み、ChatGPT で日本語訳の正誤を判定
        </li>
        <li>
          <strong>正誤判定（発展）</strong><br />
          上記の英文を音声で読み上げて、日本語訳の正誤を ChatGPT で判定
        </li>
      </ol>
    </main>
  )
}
