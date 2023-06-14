using Cake_Supplies.Controllers;
using Cake_Supplies.Models;
using Cake_Supplies.Utils.cs;
using Microsoft.Data.SqlClient;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Runtime.Intrinsics.X86;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using StackExchange.Redis;
using System.Collections.Generic;


namespace Cake_Supplies.Repository
{
    public class OrderRepository : BaseRepository, IOrderRepository

    {


        public OrderRepository(IConfiguration configuration) : base(configuration)
        {
        }

        //=======================================================

        public List<CustomerOrder> GetAllOrderById(int customerId)
        {


            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT o.id AS OrderId
                                             , o.[customerId]
                                             , o.[pickUpDate]
                                                    ,u.[phone]
                                                    ,u.[email]
                                                    ,u.[address]
                                                     ,u.[name] as CustomerName
                                            FROM [dbo].[Order] o
										  join [dbo].Users u
								  on u.id = o.customerId

                                              WHERE o.customerId =@customerId";
                    DbUtils.AddParameter(cmd, "@customerId", customerId);

                    var reader = cmd.ExecuteReader();
                    List<CustomerOrder> customerOrders = new List<CustomerOrder>();
                    while (reader.Read())
                    {
                        var customer = new CustomerOrder()
                        {
                            OrderId = DbUtils.GetInt(reader, "OrderId"),
                            CustomerId = DbUtils.GetInt(reader, "customerId"),
                            PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
                            CustomerName = DbUtils.GetString(reader, "customerName"),
                            Address = DbUtils.GetString(reader, "address"),
                            Phone = DbUtils.GetString(reader, "phone"),
                            Email = DbUtils.GetString(reader, "email"),
                        };
                        customerOrders.Add(customer);


                    }
                    var test = customerOrders;
                    return customerOrders;

                    conn.Close();
                }
            }
            return null;
        }

        //==========================================================
        public List<CustomerOrder> GetAllOrdersByAdmin()
        {


            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT o.id AS OrderId
                                             , o.[customerId]
                                             , o.[pickUpDate]
                                                    ,u.[phone]
                                                    ,u.[email]
                                                    ,u.[address]
                                                     ,u.[name] as CustomerName
                                            FROM [dbo].[Order] o
										  join [dbo].Users u
								  on u.id = o.customerId
		 ";

                    var reader = cmd.ExecuteReader();
                    List<CustomerOrder> customerOrders = new List<CustomerOrder>();
                    while (reader.Read())
                    {
                        var customer = new CustomerOrder()
                        {
                            OrderId = DbUtils.GetInt(reader, "OrderId"),
                            CustomerId = DbUtils.GetInt(reader, "customerId"),
                            PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
                            CustomerName = DbUtils.GetString(reader, "customerName"),
                            Address = DbUtils.GetString(reader, "address"),
                            Phone = DbUtils.GetString(reader, "phone"),
                            Email = DbUtils.GetString(reader, "email"),
                        };
                        customerOrders.Add(customer);


                    }
                    var test = customerOrders;
                    return customerOrders;
                    conn.Close();
                }
            }
            return null;
        }
        //=========================GitOrderDetailsByOrderId======================================
        //SELECT
        //                        o.id AS OrderId
        //                       , o.[pickUpDate]

        //                          , oi.quantity

        //                           , i.imageUrl

        //                            , i.[name] AS ItemName

        //                            , i.description
        //                      FROM [dbo].[Order] o
        //                      LEFT JOIN[OrderItems] oi

        //                       ON[oi].orderId = [o].id

        //                       LEFT JOIN [Items] i
        //                       ON [oi].ItemId= [i].Id

        //                        WHERE o.id = 3

        //======================================================================


    }
}

