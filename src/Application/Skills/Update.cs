using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Skills
{
    public class Update
    {
        public class Command : IRequest
        {
            public int id { get; set; }
            public string name { get; set; }
            public string percentage { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var skill = await _context.Skills.FindAsync(request.id);

                if (skill == null)
                    throw new Exception("Could not find user");

                skill.name = request.name ?? skill.name;
                skill.percentage = request.percentage ?? skill.percentage;


                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}