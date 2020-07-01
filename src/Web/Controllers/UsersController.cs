using System;
using System.Threading.Tasks;
using Application.Users;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IMediator _mediator;
        public UsersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Show(Guid id)
        {
            return await _mediator.Send(new Show.Query { id = id });
        }
    }
}