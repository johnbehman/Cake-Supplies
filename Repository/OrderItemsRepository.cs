using Cake_Supplies.Controllers;
using Cake_Supplies.Models;
using Cake_Supplies.Utils.cs;
using Microsoft.Data.SqlClient;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Cake_Supplies.Repository
{
    public class OrderItemsRepository : BaseRepository, IOrderItemsRepository
    {

        public OrderItemsRepository(IConfiguration configuration) : base(configuration)
        {
        }






        //===========================================================


        public void AddOrderCustomer(AddOrder newOrder)
        //public void AddUser(User User)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [dbo].[Order]
                                                                                                 
                                                   ([customerId]

                                                   ,[pickUpDate]
                                                   ,[name ]
                                                   ,[address]
                                                   ,[phone]
                                                   ,[email])
                                             OUTPUT INSERTED.Id As Orid
                                             VALUES
                                                   (
                                                   @customerId
                                                        ,@pickUpDate
                                                        ,@name
                                                          ,@address
                                                           ,@phone
                                                            ,@email) ";                                                                                                           
                    //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
                    // DbUtils.AddParameter(cmd, "@id", NewOrder.Id);
                    DbUtils.AddParameter(cmd, "@customerId", newOrder.CustomerId);
                    DbUtils.AddParameter(cmd, "@pickUpDate", newOrder.PickUpDate);
                    DbUtils.AddParameter(cmd, "@name", newOrder.Name);
                    DbUtils.AddParameter(cmd, "@address", newOrder.Address);
                    DbUtils.AddParameter(cmd, "@Phone", newOrder.Phone);
                    DbUtils.AddParameter(cmd, "@email", newOrder.Email);
                    //NewOrder.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                    var id = (int)cmd.ExecuteScalar();//needs output inserted.id
                    cmd.CommandText = "";

                    cmd.CommandText = @"INSERT INTO [dbo].[OrderItems]
                                           (
                                           [OrderId]
                                           ,[ItemId]
                                           ,[Quantity])
                                     VALUES
                                           (
                                           @orderId
                                           ,@itemId
                                           ,@quantity )";

                    //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
                    // DbUtils.AddParameter(cmd, "@id", NewOrder.Id);



                    DbUtils.AddParameter(cmd, "@orderId", id);

                    DbUtils.AddParameter(cmd, "@itemId", newOrder.OrderItems.ItemId);

                    DbUtils.AddParameter(cmd, "@quantity", newOrder.OrderItems.Quantity);

                    //NewOrder.Id = (int)cmd.ExecuteScalar();//needs output in
                    //var OId = (int)cmd.ExecuteScalar();//needs output in
                   cmd.ExecuteScalar();//needs output in






                }
            }
        }
        //===================================================================
        public void AddOrderItems(AddOrderFromCustomer newOrder)
        //public void AddUser(User User)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [dbo].[ItemsOrder]
           ([Id]
           ,[OrderId]
           ,[ItemId]
           ,[Quantity])
     VALUES
           (
           ,@orderId
           ,@itemId
           ,@quantity )";

                    //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
                    // DbUtils.AddParameter(cmd, "@id", NewOrder.Id);



                    DbUtils.AddParameter(cmd, "@orderId", newOrder.OrderId);

                    DbUtils.AddParameter(cmd, "@itemId", newOrder.ItemId);

                    DbUtils.AddParameter(cmd, "@quantity", newOrder.Quantity);
                    
                    //NewOrder.Id = (int)cmd.ExecuteScalar();//needs output inserted.id
                }
            }
        }



    }
}