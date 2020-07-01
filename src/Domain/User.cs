using System;

namespace Domain
{
    public class User
    {
        public Guid id { get; set; }
        public string name { get; set; }
        public string job { get; set; }
        public DateTime birthdate { get; set; }
        public string location { get; set; }
        public string email { get; set; }
        public string bio { get; set; }
    }
}
