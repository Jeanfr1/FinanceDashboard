using Microsoft.AspNetCore.Identity;

namespace FinanceDashboard.Models
{
    public class User : IdentityUser
    {
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
