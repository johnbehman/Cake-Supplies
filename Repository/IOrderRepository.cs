using Cake_Supplies.Models;
using Microsoft.Data.SqlClient;

namespace Cake_Supplies.Repository
{
    public interface IOrderRepository
    {
        //void AddOrderCustomer(AddOrder addOrder);
    
        //void Delete(int id);
        //List<SortOrder> FetchOrderByCustomer(int CustomerId);
        //List<Order> FetchOrderByCustomer(int CustomerId);
        List<CustomerOrder> GetAllOrderById(int customerId);
        List<CustomerOrder> GetAllOrdersByAdmin();
        //Items SearchItemsById(int itemsId);
        //Order SearchCustomerOrderById(int customerId);
        //Order SearchCustomerOrderById(int customerId);
        // List<OrderByAdmin> GetAllOrdersByAdmin();
        //OrderByAdmin GetById(int Id);
        //void Insert(OrderByAdmin order);
        //void Update(int id, OrderByAdmin order);
    }
}