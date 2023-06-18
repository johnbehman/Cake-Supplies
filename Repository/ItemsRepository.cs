using Cake_Supplies.Controllers;
using Cake_Supplies.Models;
using Cake_Supplies.Utils.cs;
using Microsoft.Data.SqlClient;
using System.Xml.Linq;


namespace Cake_Supplies.Repository
{
    public class ItemsRepository : BaseRepository, IItemsRepository
    {
        public ItemsRepository(IConfiguration configuration) : base(configuration)
        {
        }


        //===============================================
        public Items SearchItemsByName(string Name)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT [id] AS ItemsId
                                      ,[imageUrl]
                                      ,[name]
                                      ,[description]
                                      ,[category]
                                  FROM [dbo].[Items]
                                  where Items.name = @name";
                    // where Items.name = @name";


                    DbUtils.AddParameter(cmd, "@name", Name);
                    var reader = cmd.ExecuteReader();
                    Items items = null;
                    while (reader.Read())
                    {
                        if (items == null)
                        {
                            items = new Items()
                            {
                                Id = DbUtils.GetInt(reader, "ItemsId"),

                                Name = DbUtils.GetString(reader, "name"),
                                Description = DbUtils.GetString(reader, "description"),
                                ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                                Category = DbUtils.GetString(reader, "category"),
                            };
                        }
                    }
                    reader.Close();
                    return items;

                }
            }
        }
        //======================================================================
        public List<Items> GetAllItemsByColoring()
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT   [id]
                                                    ,[imageUrl]
                                                    ,[name]
                                                    ,[description]
                                                    ,[Category]
                                                    FROM [dbo].[items]

                                                   WHERE [Category] = @Coloring";

                    cmd.Parameters.AddWithValue("@Coloring", "Coloring");
                    var reader = cmd.ExecuteReader();
                    var item = new List<Items>();
                    while (reader.Read())
                    {
                        var items = new Items()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                            Name = DbUtils.GetString(reader, "name"),
                            Description = DbUtils.GetString(reader, "description"),
                            Category = DbUtils.GetString(reader, "category")

                        };
                        //var test = user;
                        item.Add(items);
                    }
                    conn.Close();
                    return item;
                }
            }
        }


        //===============================================================
        public List<Items> GetAllItemsByDecoratingTools()
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT       [id]
                                                    ,[imageUrl]
                                                    ,[name]
                                                    ,[description]
                                                    ,[Category]
                                                    FROM [dbo].[items]
                                                   WHERE [Category] = @DecoratingTools";

                    cmd.Parameters.AddWithValue("@decoratingTools", "decoratingTools");

                    var reader = cmd.ExecuteReader();
                    var item = new List<Items>();
                    while (reader.Read())
                    {
                        var items = new Items()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                            Name = DbUtils.GetString(reader, "name"),
                            Description = DbUtils.GetString(reader, "description"),
                            Category = DbUtils.GetString(reader, "category"),

                        };
                        //var test = item;
                        item.Add(items);
                    }
                    conn.Close();
                    return item;
                }
            }
        }
        //===============================================================
        public List<Items> GetAllItemsByBakingSupplies()
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT   [id]
                                                    ,[imageUrl]
                                                    ,[name]
                                                    ,[description]
                                                    ,[Category]
                                                    FROM [dbo].[items]
                                                   WHERE Category = @bakingSupplies";
                    cmd.Parameters.AddWithValue("@bakingSupplies", "bakingSupplies");

                    var reader = cmd.ExecuteReader();
                    var item = new List<Items>();
                    while (reader.Read())
                    {
                        var items = new Items()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                            Name = DbUtils.GetString(reader, "name"),
                            Description = DbUtils.GetString(reader, "description"),
                            Category = DbUtils.GetString(reader, "category"),

                        };
                        //var test = item;
                        item.Add(items);
                    }
                    conn.Close();
                    return item;
                }
            }
        }
        //===============================================================
        public List<Items> GetAllItemsByEdibles()
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT   [id]
                                                    ,[imageUrl]
                                                    ,[name]
                                                    ,[description]
                                                    ,[Category]
                                                    FROM [dbo].[items]
                                                   WHERE Category = 'Edibles'";
                    cmd.Parameters.AddWithValue("@edibles", "edibles");

                    var reader = cmd.ExecuteReader();
                    var item = new List<Items>();
                    while (reader.Read())
                    {
                        var items = new Items()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ImageUrl = DbUtils.GetString(reader, "imageUrl"),
                            Name = DbUtils.GetString(reader, "name"),
                            Description = DbUtils.GetString(reader, "description"),
                            Category = DbUtils.GetString(reader, "category"),

                        };
                        //var test = item;
                        item.Add(items);
                    }
                    conn.Close();
                    return item;
                }
            }
        }
        //===============================================================
        public Items GetById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT   [id]
                                                ,[imageUrl]
                                                ,[name]
                                                ,[description]
                                                ,[category]
                                                FROM [dbo].[items]
                                                WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", Id);
                    SqlDataReader reader = cmd.ExecuteReader();
                    Items item = null;
                    if (reader.Read())
                    {
                        item = new Items()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Description = DbUtils.GetString(reader, "Description"),
                            Category = DbUtils.GetString(reader, "Category")

                        };
                    }
                    reader.Close();
                    return item;
                }
            }
        }

        ////=====================================================================
        public void InsertItem(Items item)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {

                    cmd.CommandText = @"INSERT INTO [dbo].[Items]
                            ([imageUrl]
                            ,[name]
                            ,[description]
                            ,[category])
                    OUTPUT INSERTED.Id
                        VALUES
                            (@imageUrl
                            ,@name
                            ,@description
                            ,@category)";


                    // DbUtils.AddParameter(cmd, "@Id", item.Id);
                    DbUtils.AddParameter(cmd, "@imageUrl", item.ImageUrl);
                    DbUtils.AddParameter(cmd, "@name", item.Name);
                    DbUtils.AddParameter(cmd, "@description", item.Description);
                    DbUtils.AddParameter(cmd, "@category", item.Category);

                    var id = (int)cmd.ExecuteScalar();

                    id = item.Id;
                }
            }
        }

        ////=================================================


        public void Update(int id, Items item)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE [dbo].[Items]
                                                SET 
                                                 [imageUrl]    = @imageUrl
                                                ,[name]        = @name
                                                ,[description] = @description
                                                ,[category]    = @category
                                                WHERE Id = @id";



                    //DbUtils.AddParameter(cmd, "@Id", item.Id);
                    DbUtils.AddParameter(cmd, "@imageUrl", item.ImageUrl);
                    DbUtils.AddParameter(cmd, "@name", item.Name);
                    DbUtils.AddParameter(cmd, "@description", item.Description);
                    DbUtils.AddParameter(cmd, "@category", item.Category);

                    cmd.ExecuteNonQuery();

                }
                conn.Close();
            }
        }

        ////=====================================================

        public void Delete(int id)
        {
            //using (SqlConnection conn = Connection)

            using (var conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM [Items] WHERE Id = @id";
                    //cmd.Parameters.AddWithValue("@id", id);
                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
                conn.Close();
            }
        }



    }
}
