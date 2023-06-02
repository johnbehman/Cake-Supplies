namespace Cake_Supplies.Models
{
    public class OrderItems
    {

        public int Id { get; set; } 
        public int OrderId { get; set; }    
        public string? ItemId { get; set; } 
        public string? Quantity { get; set; } 
    }
}



//SELECT TOP(1000) [id]
//      ,[orderId]
//      ,[itemId]
//      ,[quantity]
//FROM[Db_Cake - Supplies].[dbo].[OrderItems]