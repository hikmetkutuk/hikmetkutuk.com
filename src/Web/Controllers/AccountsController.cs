using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Accounts;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public AccountsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Account>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Store(Store.Command command)
        {
            return await _mediator.Send(command);
        }
    }
}