using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Account> Accounts  { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Experience> Experiences  { get; set; }

        public DbSet<Skill> Skills { get; set; }
    }
}
