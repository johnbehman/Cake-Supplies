using System.Net;
using System.Numerics;
using System.Xml.Linq;

namespace Cake_Supplies.Models
{
    public class CustomerOrder
    {

        public int Id { get; set; }
        public int CustomerId { get; set; }
        public DateTime PickUpDate { get; set; }
        public string? CustomerName { get; set; }
        public string? Address { get; set; }
        public string Phone { get; set; }
        public string? Email { get; set; }
        public string ImageUrl { get; set; }
        public int Quantity { get; set; }
        public string Name { get; set; }
        public AllOrder OrderItems { get; set; }

    }

    public class AllOrder
    {

         public int Id { get; set; }
        public int OrderId { get; set; }
        public int ItemId { get; set; }
        public int Quantity { get; set; }
        // public List<Items> Items { get; set; }


    }
}
  