using Api.Hubs;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SenhaController(ILogger<SenhaController> logger, SenhaHub senhaHub) : ControllerBase
    {
        [HttpPost("{guiche}")]
        public async Task Post([FromRoute] string guiche)
        {
            logger.LogInformation("Guiche: {Guiche}", guiche);
            await senhaHub.ChamarSenha(guiche);
        }
    }
}