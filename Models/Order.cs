namespace Cake_Supplies.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public DateTime PickUpDate { get; set; } 
        public string? Name { get; set; }
        public string? Address { get; set; }
        public string Phone { get; set; }
        public string? Email { get; set; }
    }
}

