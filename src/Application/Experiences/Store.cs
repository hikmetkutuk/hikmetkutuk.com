using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Experiences
{
    public class Store
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
                var last_id = _context.Experiences.OrderByDescending(experience => experience.id).First();
                var latestId = last_id.id;

                var experience = new Experience
                {
                    id = latestId + 1,
                    company = request.company,
                    start_date = request.start_date,
                    end_date = request.end_date

                };

                _context.Experiences.Add(experience);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}