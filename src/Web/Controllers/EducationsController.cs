using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Educations;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EducationsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public EducationsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Education>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Store(Store.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Update(int id, Update.Command command)
        {
            command.id = id;
            return await _mediator.Send(command);
        }
    }
}