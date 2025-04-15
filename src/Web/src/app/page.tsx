"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getConnection, startConnection } from "@/lib/signalr";

type SenhaInfo = {
  senha: number;
  guiche: string;
  hora: string;
};

export default function Home() {
  const [senhaAtual, setSenhaAtual] = useState<SenhaInfo | null>(null);
  const [guiche, setGuiche] = useState("1");

  useEffect(() => {
    const conectar = async () => {
      const conn = await startConnection();
      conn?.on("SenhaChamada", (info: SenhaInfo) => {
        setSenhaAtual(info);
      });
    };

    conectar();
  }, []);

  const chamarSenha = async () => {
    const conn = getConnection();
    if (conn) {
      try {
        await conn.invoke("ChamarSenha", guiche);
      } catch (err) {
        console.error("Erro ao chamar senha:", err);
      }
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div style={{ padding: 20 }}>
          <h1>Painel de Senhas</h1>

          <div style={{ marginBottom: 20 }}>
            <label>
              Guichê:
              <input
                type="text"
                value={guiche}
                onChange={(e) => setGuiche(e.target.value)}
                style={{ marginLeft: 10, padding: 5 }}
              />
            </label>
            <button
              onClick={chamarSenha}
              style={{ marginLeft: 10, padding: 10 }}
            >
              Chamar Próxima Senha
            </button>
          </div>

          {senhaAtual && (
            <div>
              <p>
                <strong>Senha:</strong> {senhaAtual.senha}
              </p>
              <p>
                <strong>Guichê:</strong> {senhaAtual.guiche}
              </p>
              <p>
                <strong>Horário:</strong> {senhaAtual.hora}
              </p>
            </div>
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
