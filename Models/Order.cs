namespace Cake_Supplies.Models
{
    public class OrderByAdmin
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public DateTime PickUpDate { get; set; } 
        public string? Name { get; set; }
        public string? Address { get; set; }
        public int Phone { get; set; }
        public string? Email { get; set; }
        
    }

    public class FetchOrderByCustomer
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public DateTime PickUpDate { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public int Phone { get; set; }
        public string? Email { get; set; }

    }
}

