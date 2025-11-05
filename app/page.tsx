"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button
        onClick={() => signIn("google", { prompt: "login" })}
      >
        Googleでログイン（毎回パスワード入力）
      </button>
    );
  }

  return (
    <div>
      <h1>Hello {session.user?.name}</h1>
      <p>これがログイン後に表示されるページです。</p>
      <button onClick={() => signOut()}>ログアウト</button>
    </div>
  );
}
