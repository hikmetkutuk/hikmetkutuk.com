using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Experiences
{
    public class Update
    {
        public class Command : IRequest
        {
            public int id { get; set; }
            public string company { get; set; }
            public DateTime? start_date { get; set; }
            public DateTime? end_date { get; set; }
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
                var experience = await _context.Experiences.FindAsync(request.id);

                if (experience == null)
                    throw new Exception("Could not find user");

                experience.company = request.company ?? experience.company;
                experience.start_date = request.start_date ?? experience.start_date;
                experience.end_date = request.end_date ?? experience.end_date;

                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}