using Microsoft.AspNetCore.SignalR;

namespace Api.Hubs
{
    public class SenhaHub : Hub
    {
        private static int senhaAtual = 0;

        public async Task ChamarSenha(string guiche)
        {
            senhaAtual++;
            var info = new
            {
                Senha = senhaAtual,
                Guiche = guiche,
                Hora = DateTime.Now.ToString("HH:mm:ss")
            };

            await Clients.All.SendAsync("SenhaChamada", info);
        }
    }
}