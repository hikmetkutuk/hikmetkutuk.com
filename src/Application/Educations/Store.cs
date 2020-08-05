using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Educations
{
    public class Store
    {
        public class Command : IRequest
        {
            public int id { get; set; }
            public string department { get; set; }
            public string school { get; set; }
            public DateTime? graduation_date { get; set; }
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
                var last_id = _context.Educations.OrderByDescending(education => education.id).First();
                var latestId = last_id.id;

                var education = new Education
                {
                    id = latestId + 1,
                    department = request.department,
                    school = request.school,
                    graduation_date = request.graduation_date

                };

                _context.Educations.Add(education);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}