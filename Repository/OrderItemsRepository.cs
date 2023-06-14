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

        //===================================================================
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

                                                   ,[pickUpDate])
                                                  
                                             OUTPUT INSERTED.Id As Orid
                                             VALUES
                                                   (
                                                   @customerId
                                                        ,@pickUpDate)
                                                         ";
                    //DbUtils.AddParameter(cmd, "@UserId", patient.UserId);
                    // DbUtils.AddParameter(cmd, "@id", NewOrder.Id);
                    DbUtils.AddParameter(cmd, "@customerId", newOrder.CustomerId);
                    DbUtils.AddParameter(cmd, "@pickUpDate", newOrder.PickUpDate);
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
        //============================================================




        public void EditOrderItems(OrderItems orderItems)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE[dbo].[OrderItems]
                                    SET
                                  [itemId] = @itemId 
                                  ,[quantity] = @quantity
                             WHERE [orderId] = @Id
                            ";
                    DbUtils.AddParameter(cmd, "@itemId", orderItems.ItemId);
                    DbUtils.AddParameter(cmd, "@quantity", orderItems.Quantity);

                    DbUtils.AddParameter(cmd, "@Id", orderItems.OrderId);
                    cmd.ExecuteNonQuery();

                }
            }
        }
        //===================================================

        public void DeleteOrderById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM OrderItems WHERE OrderId = @OrderId";
                    DbUtils.AddParameter(cmd, "@OrderId", id);

                    cmd.ExecuteNonQuery();


                    cmd.CommandText = "";


                    cmd.CommandText = "DELETE FROM dbo.[Order] WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();





                }
            }
        }

    }
}