using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Users
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid id { get; set; }
            public string name { get; set; }
            public string job { get; set; }
            public DateTime? birthdate { get; set; }
            public string location { get; set; }
            public string email { get; set; }
            public string bio { get; set; }
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
                var user = await _context.Users.FindAsync(request.id);

                if (user == null)
                    throw new Exception("Could not find user");

                user.name = request.name ?? user.name;
                user.job = request.job ?? user.job;
                user.birthdate = request.birthdate ?? user.birthdate;
                user.location = request.location ?? user.location;
                user.email = request.email ?? user.email;
                user.bio = request.bio ?? user.bio;

                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}