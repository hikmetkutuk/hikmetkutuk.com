using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Educations
{
    public class Update
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
                var education = await _context.Educations.FindAsync(request.id);

                if (education == null)
                    throw new Exception("Could not find user");

                education.department = request.department ?? education.department;
                education.school = request.school ?? education.school;
                education.graduation_date = request.graduation_date ?? education.graduation_date;

                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}