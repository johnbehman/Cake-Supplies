using Microsoft.AspNetCore.Mvc;

namespace Cake_Supplies.Models
{
    public class OrderItems
    {

        //public int Id { get; set; }
        public int OrderId { get; set; }
        public int ItemId { get; set; }
        public int Quantity { get; set; }
        
    }




    public class OrderItemsById
    {

        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ItemId { get; set; }
        public int Quantity { get; set; }

    }

    public class AddOrder
    {
        //public int Id { get; set; } 
     // public int Id { get; set; }
        public int CustomerId { get; set; }
        public DateTime PickUpDate { get; set; }
        //public string Name { get; set; }
        //public string Address { get; set; }
        //public string Phone { get; set; }
        //public string Email { get; set; }
        public AddOrderFromCustomer OrderItems { get; set; }    
        //public List<Items> Items { get; set; }  
    }

    public class ExistingOrder
    {
        public int OrderId { get; set; }
        public int Quantity { get; set; }
    }




    public class AddOrderFromCustomer
    {

       // public int Id { get; set; }
        public int OrderId { get; set; }
        public int ItemId { get; set; }
        public int Quantity { get; set; }
       // public List<Items> Items { get; set; }


    }

}


