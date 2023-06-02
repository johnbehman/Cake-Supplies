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
        public void Insert(OrderItems orderItems)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [dbo].[OrderItems]
                                                        ([orderId]
                                                        ,[itemId]
                                                        ,[quantity])
                                                        VALUES
                                                        (@orderId
                                                        ,@itemId
                                                        ,@quantity)";

                    DbUtils.AddParameter(cmd, "@id", orderItems.OrderId);
                    DbUtils.AddParameter(cmd, "@itemId", orderItems.ItemId);
                    DbUtils.AddParameter(cmd, "@quantity", orderItems.Quantity);
                    var Id = (int)cmd.ExecuteScalar();




                }
            }
        }
    }
}
