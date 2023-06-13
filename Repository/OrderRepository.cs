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
	                                              ,oi.quantity
	                                              ,i.imageUrl
	                                              ,i.[name] AS ItemName
												  ,u.[name] AS customerName
                                                     ,u.[phone]
                                                     ,u.[email]
                                                     ,u.[address]
                                              FROM [dbo].[Order] o
											  join [dbo].Users u
											  on u.id = o.customerId
                                              LEFT JOIN [OrderItems] oi
                                              ON [oi].orderId = [o].id
                                              LEFT JOIN [Items] i
                                              ON [oi].ItemId= [i].Id
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
                            ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                            ItemName = DbUtils.GetString(reader, "ItemName"),
                            Quantity = DbUtils.GetNullableInt(reader, "quantity")
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
       //===========================================================


        //public void AddOrderCustomer(AddOrder NewOrder)
        ////public void AddUser(User User)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"INSERT INTO [dbo].[Order]
        //                                           (
        //                                           ,[CustomerId]
        //                                           ,[PickUpDate]
        //                                           ,[Name ]
        //                                           ,[Address]
        //                                           ,[Phone]
        //                                           ,[Email])
        //                                     OUTPUT INSERTED.Id As Order
        //                                     VALUES
        //                                           (,@customerId
        //                                            ,@picUpDate
        //                                            ,@name
        //                                            ,@Address
        //                                            ,@phone
        //                                            ,@email) ";
                                                                                                                                  
        //            //DbUtils.AddParameter(cmd, "@OrderId", .UserId);
        //            // DbUtils.AddParameter(cmd, "@id", NewOrder.Id);
            
        //            DbUtils.AddParameter(cmd, "@customerId", NewOrder.CustomerId);
        //            DbUtils.AddParameter(cmd, "@picUpDate", NewOrder.PickUpDate);
        //            DbUtils.AddParameter(cmd, "@name", NewOrder.Name);
        //            DbUtils.AddParameter(cmd, "@Address", NewOrder.Address);
        //            DbUtils.AddParameter(cmd, "@Phone", NewOrder.Phone);
        //            DbUtils.AddParameter(cmd, "@email", NewOrder.Email);
        //            //NewOrder.id = (int)cmd.ExecuteScalar();//needs output inserted.id
        //            var id = (int)cmd.ExecuteScalar();//needs output inserted.id

        //        }
        //    }
        //}

                
                    //==========================================================
                    public List<CustomerOrder> GetAllOrdersByAdmin()
                    {


                        using (var conn = Connection)
                        {
                            conn.Open();

                            using (var cmd = conn.CreateCommand())
                            {
                                cmd.CommandText = @"SELECT 


[Order].[id]  AS OrderId


           ,[Order].[customerId] 
           ,[Order].[pickUpDate] 
           ,[Order].[name] AS customerName
           ,[Order].[address] 
           ,[Order].[phone] 
           ,[Order].[email] 
		
        ,[OrderItems].[Id]
        AS OrderItemsId
           ,[OrderItems].[OrderId] 
           ,[OrderItems].[itemId]  
           ,[OrderItems].[quantity] 

	 FROM [Order]


		 ";

                    var reader = cmd.ExecuteReader();
                                List<CustomerOrder> customerOrders = new List<CustomerOrder>();
                                while (reader.Read())
                                {
                                    var customer = new CustomerOrder()
                                    {
                                        //Id = DbUtils.GetInt(reader, "Id"),
                                        CustomerId = DbUtils.GetInt(reader, "customerId"),
                                        PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
                                        CustomerName = DbUtils.GetString(reader, "customerName"),
                                        Address = DbUtils.GetString(reader, "address"),
                                        Phone = DbUtils.GetString(reader, "phone"),
                                        Email = DbUtils.GetString(reader, "Email"),
                                    };



                                    customerOrders.Add(customer);

                                    //var test = user;

                                    return customerOrders;
                                }
                                conn.Close();
                            }
                        }
                        return null;
                    }
                    //===============================================================


                }
            }

