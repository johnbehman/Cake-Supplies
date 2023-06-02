using Cake_Supplies.Controllers;
using Cake_Supplies.Models;
using Cake_Supplies.Utils.cs;
using Microsoft.Data.SqlClient;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Runtime.Intrinsics.X86;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Cake_Supplies.Repository
{
    public class OrderByAdminRepository : BaseRepository, IOrderByAdminRepository
    {


        public OrderByAdminRepository(IConfiguration configuration) : base(configuration)
        {
        }


        public List<OrderByAdmin> GetAllOrdersByAdmin()
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [id]
                                      ,[customerId]
                                      ,[pickUpDate]
                                      ,[name]
                                      ,[address]
                                      ,[phone]
                                      ,[email]
                                  FROM [dbo].[Order]";


                    var reader = cmd.ExecuteReader();
                    var orderAdmins = new List<OrderByAdmin>();
                    while (reader.Read())
                    {
                        var ordersAdmin = new OrderByAdmin()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            CustomerId = DbUtils.GetInt(reader, "customerId"),
                            PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
                            Name = DbUtils.GetString(reader, "name"),
                            Address = DbUtils.GetString(reader, "address"),
                            Phone = DbUtils.GetInt(reader, "phone"),
                            Email = DbUtils.GetString(reader, "Email")


                        };
                        //var test = user;
                        orderAdmins.Add(ordersAdmin);
                    }
                    conn.Close();
                    return orderAdmins;
                }
            }
        }

        //public List<Order> FetchOrderByCustomer()
        //{
        //    return FetchOrderByCustomer(orderByCustomers);
        //}



        //=======================================================

  //      public List<Order> FetchOrderByCustomer()
  //      {
  //          using (var conn = Connection)
  //          {
  //              conn.Open();

  //              using (var cmd = conn.CreateCommand())
  //              {
  //                  cmd.CommandText = @"[Order].[id] AS OrderId
  //    ,[Order].[customerId] 
  //    ,[Order].[pickUpDate] 
  //    ,[Order].[name] 
  //    ,[Order].[address] 
  //    ,[Order].[phone] 
  //    ,[Order].[email] 
	 // ,[OrderItems].[id] As OrderItemsId
  //    ,[OrderItems].[orderId]
  //    ,[OrderItems].[itemId]
  //    ,[OrderItems].[quantity]
	 // ,[Items].[id] As ItemsId
  //    ,[Items].[imageUrl]
  //    ,[Items].[name]
  //    ,[Items].[description]
  //    ,[Items].[Category]
  //FROM [Db_Cake-Supplies].[dbo].[Order]
  // LEFT JOIN [OrderItems] ON [Order].id = [OrderItems].orderId
  // LEFT JOIN [Items] ON [OrderItems].id = [Items].Id";


  //                  var reader = cmd.ExecuteReader();
  //                  var orderByCustomers = new List<FetchOrderByCustomer>();
  //                  while (reader.Read())
  //                  {
  //                      var orderByCustomer = new FetchOrderByCustomer()
  //                      {
  //                          Id = DbUtils.GetInt(reader, "Id"),
  //                          CustomerId = DbUtils.GetInt(reader, "customerId"),
  //                          PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
  //                          Name = DbUtils.GetString(reader, "name"),
  //                          Address = DbUtils.GetString(reader, "address"),
  //                          Phone = DbUtils.GetInt(reader, "phone"),
  //                          Email = DbUtils.GetString(reader, "Email")


  //                      };
  //                      //var test = user;
  //                      orderByCustomers.Add(orderByCustomer);
  //                  }
  //                  conn.Close();
  //                  return orderByCustomer;
  //              }
  //          }
  //      }


        //============================================================
        //     SELECT[Users].[id]
        //     AS UserId
        //           ,[Users].[name] 
        //   ,[Users].[email] 
        //   ,[Users].[IsStaff] 
        //   ,[Order].[id]
        //     AS OrderId
        //   ,[Order].[customerId] 
        //   ,[Order].[pickUpDate] 
        //   ,[Order].[name] 
        //   ,[Order].[address] 
        //   ,[Order].[phone] 
        //   ,[Order].[email] 
        //,[OrderItems].[Id]
        //     AS OrderItemsId
        //   ,[OrderItems].[OrderId] 
        //   ,[OrderItems].[itemId]  
        //   ,[OrderItems].[quantity] 
        //,[Items].[id]
        //     AS ItemsId
        //   ,[Items].[imageUrl] 
        //   ,[Items].[name] 
        //   ,[Items].[Category]
        //     FROM[dbo].[Users]

        //     INNER JOIN[Order] ON[Users].Id = [Order].CustomerId
        //    INNER JOIN[OrderItems] ON[Order].Id = [OrderItems].OrderId
        //     INNER JOIN[Items] ON[OrderItems].itemId = [Items].Id
        //    WHERE[Users].Id = 1


        ////===============================================================


        public OrderByAdmin GetById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT  [id]
                                                ,[customerId]
                                                ,[pickUpDate]
                                                ,[name]
                                                ,[address]
                                                ,[phone]
                                                ,[email]
                                      FROM [dbo].[Order]
                                       WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", Id);
                    SqlDataReader reader = cmd.ExecuteReader();
                    OrderByAdmin order = null;
                    if (reader.Read())
                    {
                        if (order == null)
                        {
                            order = new OrderByAdmin()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                CustomerId = DbUtils.GetInt(reader, "customerId"),
                                PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
                                Name = DbUtils.GetString(reader, "name"),
                                Address = DbUtils.GetString(reader, "address"),
                                Phone = DbUtils.GetInt(reader, "phone "),
                                Email = DbUtils.GetString(reader, "Email")
                            };





                        };
                    }
                    reader.Close();
                    return order;
                }
            }
        }

        //=====================================================================
        public void Insert(OrderByAdmin order)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO [dbo].[Order]
                                                   ([customerId]
                                                   ,[pickUpDate]
                                                   ,[name]
                                                   ,[address]
                                                   ,[phone]
                                                   ,[email])
                                             VALUES
                                                   (@customerId
                                                   ,@pickUpDate
                                                   ,@name
                                                   ,@address
                                                   ,@phone
                                                   ,@email)";
                    DbUtils.AddParameter(cmd, "@customerId", order.CustomerId);
                    DbUtils.AddParameter(cmd, "@pickUpDat", order.PickUpDate);
                    DbUtils.AddParameter(cmd, "@name", order.Name);
                    DbUtils.AddParameter(cmd, "@address", order.Address);
                    DbUtils.AddParameter(cmd, "@phone", order.Phone);
                    DbUtils.AddParameter(cmd, "@email", order.Email);

                    var id = (int)cmd.ExecuteScalar();

                    id = order.Id;
                }
            }
        }

        //=================================================


        public void Update(int id, OrderByAdmin order)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE [dbo].[Order]
                                           SET [customerId] = @customerId
                                              ,[pickUpDate] = @pickUpDat
                                              ,[name]       = @name
                                              ,[address]    = @address
                                              ,[phone]      = @phone
                                              ,[email]      = @email
                                              WHERE Id      = @id";



                    DbUtils.AddParameter(cmd, "@customerId", order.CustomerId);
                    DbUtils.AddParameter(cmd, "@pickUpDat", order.PickUpDate);
                    DbUtils.AddParameter(cmd, "@name", order.Name);
                    DbUtils.AddParameter(cmd, "@address", order.Address);
                    DbUtils.AddParameter(cmd, "@phone", order.Phone);
                    DbUtils.AddParameter(cmd, "@email", order.Email);

                    cmd.ExecuteNonQuery();

                }
                conn.Close();
            }
        }

        //=====================================================

        public void Delete(int id)
        {
            //using (SqlConnection conn = Connection)

            using (var conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM [Order] WHERE Id = @id";
                    //cmd.Parameters.AddWithValue("@id", id);
                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
                conn.Close();
            }
        }

    }
}
