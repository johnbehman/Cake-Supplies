using System.Net;
using System.Numerics;
using System.Xml.Linq;

namespace Cake_Supplies.Models
{
    public class CustomerOrder
    {
        public int OrderId { get; set; }
        public DateTime PickUpDate { get; set; }
        //public int OrderId { get; set; }
        //public int CustomerId { get; set; }
        //public DateTime PickUpDate { get; set; }
        //public string? CustomerName { get; set; }
        //public string? Address { get; set; }
        //public string? Phone { get; set; }
        //public string? Email { get; set; }
        ////public string? ImageUrl { get; set; }
        ////public int? Quantity { get; set; }
        ////public string? ItemName { get; set; }
        //public List<Order> Orders { get; set; }

        // public int OrderId { get; set; }
        public int CustomerId { get; set; }
        //public DateTime PickUpDate { get; set; }
        public string? CustomerName { get; set; }
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
        //public string? ImageUrl { get; set; }
        //public int? Quantity { get; set; }
        //public string? ItemName { get; set; }
        //public List<Orders>? Orders { get; set; }
    }
}
