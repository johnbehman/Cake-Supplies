using Cake_Supplies.Repository;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        builder.Services.AddTransient<IUsersRepository, UsersRepository>();
        builder.Services.AddTransient<IItemsRepository, ItemsRepository>();
        builder.Services.AddTransient<IOrderByAdminRepository, OrderByAdminRepository>();
        builder.Services.AddTransient<IOrderItemsRepository, OrderItemsRepository>();
        //builder.Services.AddTransient<ILoginRepository, LoginRepository>();


        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();
        // ------------------- 
        app.UseCors(policy => policy.AllowAnyHeader()
                                    .AllowAnyMethod()
                                    .SetIsOriginAllowed(origin => true)
                                    .AllowCredentials());

        //-----------------------------

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}