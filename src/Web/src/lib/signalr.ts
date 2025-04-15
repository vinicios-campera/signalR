import * as signalR from "@microsoft/signalr";

let connection: signalR.HubConnection | null = null;

export const startConnection = async () => {
  connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5250/senha")
    .withAutomaticReconnect()
    .build();

  try {
    await connection.start();
    console.log("Conectado ao SignalR!");
  } catch (err) {
    console.error("Erro ao conectar ao SignalR:", err);
  }

  return connection;
};

export const getConnection = () => connection;
