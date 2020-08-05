using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Accounts
{
    public class Store
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
                var last_id = _context.Accounts.OrderByDescending(account => account.id).First();
                var latestId = last_id.id;

                var account = new Account
                {
                    id = latestId + 1,
                    name = request.name,
                    link = request.link
                };

                _context.Accounts.Add(account);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}