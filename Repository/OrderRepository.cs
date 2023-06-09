﻿using Cake_Supplies.Controllers;
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
  //      //=================================================================
  //      public OrderItemsById GetOrderItemsByOrderId(int OrderId)
  //      {
  //          using (var conn = Connection)
  //          {
  //              conn.Open();
  //              using (var cmd = conn.CreateCommand())
  //              {
  //                  cmd.CommandText = @"SELECT [id]
  //    ,[orderId]
  //    ,[itemId]
  //    ,[quantity]
  //FROM [dbo].[OrderItems]
  //                                              WHERE OrderId = @orderId";
  //                  cmd.Parameters.AddWithValue("@orderId", OrderId);
  //                  SqlDataReader reader = cmd.ExecuteReader();
  //                  OrderItemsById orderItemsById = null;
  //                  if (reader.Read())
  //                  {
  //                      orderItemsById = new OrderItemsById()
  //                      {
  //                          Id = DbUtils.GetInt(reader, "id"),
  //                          OrderId = DbUtils.GetInt(reader, "orderId"),
  //                          ItemId = DbUtils.GetInt(reader, "itemId"),
  //                          Quantity = DbUtils.GetInt(reader, "quantity")

  //                      };
  //                  }
  //                  reader.Close();
  //                  return orderItemsById;
  //              }
  //          }
  //      }



                       


        //=======================OrderById============================
        public DetailCustomerOrder GetAllOrderByOrderId(int orderId)
        {


            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT                      
u.[id] AS UserId
,u.[Name]as CustomerName
,u.[email]
,u.[address]
,u.[phone]

,o.id AS OrderId

, o.[pickUpDate]
,oi.[Id]As OrderItemId
,oi.[itemId]
,oi.[quantity]
,i.[imageUrl]
,i.[Category]
,i.[name]AS ItemName


FROM [Users] u 
join [Order] o
on o.CustomerId = u.Id
join [OrderItems] oi 
on oi.OrderId = o.id
join [Items] i on oi.itemId = i.id
WHERE oi.orderId = @orderId";

                    DbUtils.AddParameter(cmd, "@orderId", orderId);

                    var reader = cmd.ExecuteReader();
                    var orderById = new DetailCustomerOrder();

                   // List<DetailCustomerOrder> detailCustomerOrder = new List<DetailCustomerOrder>();
                    while (reader.Read())
                    {
                         orderById = new DetailCustomerOrder()
                        {
                            OrderId = DbUtils.GetInt(reader, "OrderId"),
                            PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
                            CustomerName = DbUtils.GetString(reader, "customerName"),
                            Address = DbUtils.GetString(reader, "address"),
                            Phone = DbUtils.GetString(reader, "phone"),
                            Email = DbUtils.GetString(reader, "email"),
                            ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                            ItemName = DbUtils.GetString(reader, "ItemName"),
                            Category = DbUtils.GetString(reader, "category"),
                            Quantity = DbUtils.GetInt(reader, "quantity"),


                        };
                        //detailCustomerOrder.Add(customer);


                    }
                    //var test = detailCustomerOrder;
                    return orderById;

                    conn.Close();
                }
            }
            return null;
        }
        //=======================================================

        public List<DetailCustomerOrder> GetAllOrderById(int customerId)
        {


            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT                      
u.[id] AS UserId
,u.[Name]as CustomerName
,u.[email]
,u.[address]
,u.[phone]

,o.id AS OrderId

, o.[pickUpDate]
,oi.[Id]As OrderItemId
,oi.[itemId]
,oi.[quantity]
,i.[imageUrl]
,i.[Category]
,i.[name]AS ItemName


FROM [Users] u 
join [Order] o
on o.CustomerId = u.Id
join [OrderItems] oi 
on oi.OrderId = o.id
join [Items] i on oi.itemId = i.id
WHERE o.customerId =@customerId";

                    DbUtils.AddParameter(cmd, "@customerId", customerId);

                    var reader = cmd.ExecuteReader();
                    List<DetailCustomerOrder> detailCustomerOrder = new List<DetailCustomerOrder>();
                    while (reader.Read())
                    {
                        var customer = new DetailCustomerOrder()
                        {
                            OrderId = DbUtils.GetInt(reader, "OrderId"),
                            PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
                            CustomerName = DbUtils.GetString(reader, "customerName"),
                            Address = DbUtils.GetString(reader, "address"),
                            Phone = DbUtils.GetString(reader, "phone"),
                            Email = DbUtils.GetString(reader, "email"),
                            ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                            ItemName = DbUtils.GetString(reader, "ItemName"),
                            Category = DbUtils.GetString(reader, "category"),
                            Quantity = DbUtils.GetInt(reader, "quantity"),


                        };
                        detailCustomerOrder.Add(customer);


                    }
                    var test = detailCustomerOrder;
                    return detailCustomerOrder;

                    conn.Close();
                }
            }
            return null;
        }
        //=======================================================

        //        public List<DetailCustomerOrder> AllOrderByAdmin
        //        {
        //            get
        //            {


        //                using (var conn = Connection)
        //                {
        //                    conn.Open();

        //                    using (var cmd = conn.CreateCommand())
        //                    {
        //                        cmd.CommandText = @"SELECT                      
        //u.[id] AS UserId
        //,u.[Name]as CustomerName
        //,u.[email]
        //,u.[address]
        //,u.[phone]

        //,o.id AS OrderId

        //, o.[pickUpDate]
        //,oi.[Id]As OrderItemId
        //,oi.[itemId]
        //,oi.[quantity]
        //,i.[imageUrl]
        //,i.[Category]
        //,i.[name]AS ItemName


        //FROM [Users] u 
        //join [Order] o
        //on o.CustomerId = u.Id
        //join [OrderItems] oi 
        //on oi.OrderId = o.id
        //join [Items] i on oi.itemId = i.id
        //";



        //                        var reader = cmd.ExecuteReader();
        //                        List<DetailCustomerOrder> detailCustomerOrder = new List<DetailCustomerOrder>();
        //                        while (reader.Read())
        //                        {
        //                            var customer = new DetailCustomerOrder()
        //                            {
        //                                OrderId = DbUtils.GetInt(reader, "OrderId"),
        //                                PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
        //                                CustomerName = DbUtils.GetString(reader, "customerName"),
        //                                Address = DbUtils.GetString(reader, "address"),
        //                                Phone = DbUtils.GetString(reader, "phone"),
        //                                Email = DbUtils.GetString(reader, "email"),
        //                                ImageUrl = DbUtils.GetString(reader, "imageUrl"),
        //                                ItemName = DbUtils.GetString(reader, "ItemName"),
        //                                Category = DbUtils.GetString(reader, "category"),
        //                                Quantity = DbUtils.GetInt(reader, "quantity"),


        //                            };
        //                            detailCustomerOrder.Add(customer);


        //                        }
        //                        var test = detailCustomerOrder;
        //                        return detailCustomerOrder;

        //                        conn.Close();
        //                    }
        //                }
        //                return null;
        //            }
        //        }

        //==========================================================
        public List<DetailCustomerOrder> GETAllOrdersByAdmin()
        
                { 


                        using (var conn = Connection)
                        {
                            conn.Open();

                            using (var cmd = conn.CreateCommand())
                            {
                                cmd.CommandText = @"SELECT                      
u.[id] AS UserId
,u.[Name]as CustomerName
,u.[email]
,u.[address]
,u.[phone]

,o.id AS OrderId

, o.[pickUpDate]
,oi.[Id]As OrderItemId
,oi.[itemId]
,oi.[quantity]
,i.[imageUrl]
,i.[Category]
,i.[name]AS ItemName


FROM [Users] u 
join [Order] o
on o.CustomerId = u.Id
join [OrderItems] oi 
on oi.OrderId = o.id
join [Items] i on oi.itemId = i.id
        ";

                                var reader = cmd.ExecuteReader();
                                List<DetailCustomerOrder> detailOrderByAdmin = new List<DetailCustomerOrder>();
                                while (reader.Read())
                                {
                                    var customerAd = new DetailCustomerOrder()

                                    {



                                        OrderId = DbUtils.GetInt(reader, "OrderId"),
                                        PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
                                        CustomerName = DbUtils.GetString(reader, "customerName"),
                                        Address = DbUtils.GetString(reader, "address"),
                                        Phone = DbUtils.GetString(reader, "phone"),
                                        Email = DbUtils.GetString(reader, "email"),
                                        ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                                        ItemName = DbUtils.GetString(reader, "ItemName"),
                                        Category = DbUtils.GetString(reader, "category"),
                                        Quantity = DbUtils.GetInt(reader, "quantity"),
                                        //OrderId = DbUtils.GetInt(reader, "OrderId"),
                                        //CustomerId = DbUtils.GetInt(reader, "customerId"),
                                        //PickUpDate = DbUtils.GetDateTime(reader, "pickUpDate"),
                                        //CustomerName = DbUtils.GetString(reader, "customerName"),
                                        //Address = DbUtils.GetString(reader, "address"),
                                        //Phone = DbUtils.GetString(reader, "phone"),
                                        //Email = DbUtils.GetString(reader, "email"),
                                    };
                                    detailOrderByAdmin.Add(customerAd);


                                }
                                var test = detailOrderByAdmin;
                                return detailOrderByAdmin;
                                conn.Close();
                            }
                        }
                        return null;
                    }
                
            
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

    

}

