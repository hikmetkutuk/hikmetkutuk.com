using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Accounts
{
    public class Update
    {
        public class Command : IRequest
        {
            public int id { get; set; }
            public string name { get; set; }
            public string link { get; set; }
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
                var account = await _context.Accounts.FindAsync(request.id);

                if (account == null)
                    throw new Exception("Could not find user");

                account.name = request.name ?? account.name;
                account.link = request.link ?? account.link;

                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}