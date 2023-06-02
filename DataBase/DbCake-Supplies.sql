
USE [master]
GO

IF db_id('Db_Cake-Supplies') IS NULL
CREATE DATABASE [Db_Cake-Supplies]

GO
USE [Db_Cake-Supplies]
GO

DROP TABLE IF EXISTS [orderItems]
DROP TABLE IF EXISTS [order]
DROP TABLE IF EXISTS [users]
DROP TABLE IF EXISTS [items]

CREATE TABLE [Users] (
  [id] int PRIMARY KEY IDENTITY NOT NULL ,
  [name] varchar(50),
  [email] varchar(50),
  [isStaff] bit
)
GO

CREATE TABLE [Order] (
  [id] int PRIMARY KEY IDENTITY NOT NULL,
  [customerId] int NOT NULL,
  [pickUpDate] DateTime,
  [name] varchar(50),
  [address] varchar(255),
  [phone] int,
  [email] varchar(255)
)
GO

CREATE TABLE [OrderItems] (
  [id] int PRIMARY KEY IDENTITY NOT NULL,
  [orderId] int NOT NULL,
  [itemId] int NOT NULL,
  [quantity] nvarchar(255)
)
GO

CREATE TABLE [Items] (
  [id] int PRIMARY KEY IDENTITY NOT NULL,
  [imageUrl] varchar(255),
  [name] nvarchar(255),
  [description] nvarchar(600),
  [Category] nvarchar(50)
)
GO

ALTER TABLE [Order] ADD FOREIGN KEY ([customerId]) REFERENCES [Users] ([id])
GO

ALTER TABLE [OrderItems] ADD FOREIGN KEY ([orderId]) REFERENCES [Order] ([id])
GO

ALTER TABLE [OrderItems] ADD FOREIGN KEY ([itemId]) REFERENCES [Items] ([id])
GO

SET IDENTITY_INSERT [Users] ON
INSERT INTO [Users]
            ([Id] 
            ,[Name]
            ,[Email]
            ,[IsStaff])
VALUES
(1,'Demetrius Stein','velit.aliquam@outlook.ca', '0'),
 (2,'Nomlanga Rocha','ullamcorper@icloud.org', '0'),
 (3,'David','uDavid2023@yahoo.com', '0'),
 (4,'Jessamine Montoya','quis.arcu@icloud.com', '0'),
 (5,'Jennifer','Jennifer@yahoo.com', '0'),
 (6,'Beau Stewart','imperdiet@google.org', '0'),
 (7,'Caesar Hun','et@google.com', '0')

SET IDENTITY_INSERT [Users] OFF


SET IDENTITY_INSERT [Order] ON
INSERT INTO [Order]
            ([Id]
            ,[customerId]
            ,[pickUpDate]
            ,[name]
            ,[address]
            ,[phone]
            ,[email])

VALUES
(1,1,'2023-02-17 00:00:00.000','Demetrius Stein','Ap #428-9524 Lacinia Street','-9164','velit.aliquam@outlook.ca'),
 (2,1,'2023-02-17 00:00:00.000','Demetrius Stein','Ap #428-9524 Lacinia Street','-9164','velit.aliquam@outlook.ca'),
 (3,1,'2023-02-17 00:00:00.000','Demetrius Stein','Ap #428-9524 Lacinia Street','-9164','velit.aliquam@outlook.ca'),
 (4,2,'2022-07-23 00:00:00.000','Nomlanga Rocha','711-6995 Sagittis. Avenue','-1488','ullamcorper@icloud.org')


SET IDENTITY_INSERT [Order] OFF












SET IDENTITY_INSERT [Items] ON
INSERT INTO   [Items]
              ([id]
              ,[imageUrl]
              ,[name]
              ,[description]
              ,[Category])
VALUES
(1,'https://cdn.shopify.com/s/files/1/0229/7313/products/IVORY-AM_600x600.jpg?v=1474164023','Ivory Amerimist Air Brush Color','Eliminate water spots, over spraying, and icing breakdowns with AmeriMist™ Air Brush Colors.  These strong and highly concentrated air brush colors are extremely effective, even on the hard to color non-dairy whipped toppings and icings, rolled fondant, gum paste flowers, and buttercream.  Choose from different colors for your decorating needs. Add some color to your creations with AmeriMist™ Air Brush Colors.', 'Coloring'),
 (2,'https://jykcakes.com/wp-content/uploads/2020/11/505.png', 'Copper Amerimist Airbrush Color 4.5 oz.','AmeriMist™ is a super-strength, highly concentrated spray-on air brush food color that is extremely effective—even on hard to color non-dairy whipped toppings and icings. AmeriMist™ air brush colors prevent the need to overspray, eliminating water spots and preventing icing from breaking down. AmeriMist™ is available in the same colors as our Soft Gel Paste™, with the same vibrant tones..','Coloring'),
 (3,'https://jykcakes.com/wp-content/uploads/2020/11/507.png','Lemon Yellow Amerimist Airbrush Color 4.5 oz.', 'AmeriMist™ is a super-strength, highly concentrated spray-on air brush food color that is extremely effective—even on hard to color non-dairy whipped toppings and icings. AmeriMist™ air brush colors prevent the need to overspray, eliminating water spots and preventing icing from breaking down. AmeriMist™ is available in the same colors as our Soft Gel Paste™, with the same vibrant tones.','Coloring'),
 (4,'https://jykcakes.com/wp-content/uploads/2020/11/575-430x430.png','Green Sheen Amerimist Airbrush Color 4.5 oz.', 'AmeriMist™ is a super-strength, highly concentrated spray-on air brush food color that is extremely effective—even on hard to color non-dairy whipped toppings and icings. AmeriMist™ air brush colors prevent the need to overspray, eliminating water spots and preventing icing from breaking down. AmeriMist™ is available in the same colors as our Soft Gel Paste™, with the same vibrant tones.','Coloring'),
 (5,'https://www.cakesupplies4u.com/pub/media/catalog/product/cache/2bb771698639d78bc459d9bb352d1838/g/r/green_sheen_airbrush_color_4.5_oz.jpg','Green Sheen Airbrush Color 4.5 oz', 'AmeriMist Air brush colors are super strength, highly concentrated spray-on air brush food colors that are extremely effective, even on the hard to color non-dairy whipped toppings and icings. Amerimist Airbrush colors eliminate the need to overspray so moisture will not accumulate, water spots will not appear, and the icing will not breakdown.','Coloring'),
 (6,'https://www.cakesupplies4u.com/pub/media/catalog/product/cache/2bb771698639d78bc459d9bb352d1838/l/a/lavender_sheen_4.5.jpg','Lavender Sheen Airbrush Color 4.5 oz', 'AmeriMist Air brush colors are super strength, highly concentrated spray-on air brush food colors that are extremely effective, even on the hard to color non-dairy whipped toppings and icings. Amerimist Airbrush colors eliminate the need to overspray so moisture will not accumulate, water spots will not appear, and the icing will not breakdown.','Coloring'),
 (7,'https://sweetcityusa.com/pub/media/catalog/product/cache/9e04897b54030edd3d682b9d0977178c/d/s/dsc_0024_silver_sheen_airbrush_color_.jpg','Silver Sheen Airbrush Color 4.5oz', 'AmeriMistT air brush colors are super strength, highly concentrated spray-on air brush food colors that are extremely effective,even on the hard to color non-dairy whipped toppings and icings. AmerimistT air brush colors eliminate the need to overspray so moisture will not accumulate, water spots will not appear, and the icing will not breakdown.','Coloring')

SET IDENTITY_INSERT [Items] OFF


SET IDENTITY_INSERT [OrderItems] ON
INSERT INTO [OrderItems]
([Id],[orderId],[itemId],[quantity])
VALUES
(1,1,1,2),
(2,2,2,1),
(3,3,1,1),
(4,2,3,1)

SET IDENTITY_INSERT [OrderItems] OFF