using Core.Entities;
using Core.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class OMAContext : DbContext
    {
        public DbSet <Customer> Customers { get; set; }

        public DbSet <Order> Orders { get; set; }

        public DbSet <Address> Addresses { get; set; }


        public OMAContext(DbContextOptions options) : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(

                new Customer
                {
                    Id = 1,
                    Firstname = "James",
                    Lastname = "Bond",
                    ContactNumber = "0440404000",
                    IsDeleted = false,
                    Email = "james@yopmail.com"
                },
                new Customer
                {
                    Id = 2,
                    Firstname = "Chales",
                    Lastname = "Chaplin",
                    ContactNumber = "044123456",
                    IsDeleted = false,
                    Email = "Chales@yopmail.com"
                }

            );


             modelBuilder.Entity<Address>().HasData(

                new Address
                {
                    Id = 1,
                    CustomerId = 1,
                    AddressLine1 = "ST John",
                    AddressLine2 = "Berwick",
                    City = "Melbourne",
                    State = "VIC",
                    Country = "AU"
                },
                new Address
                {
                    Id = 2,
                    CustomerId = 2,
                    AddressLine1 = "ST Peter",
                    AddressLine2 = "Pakenham",
                    City = "Sydney",
                    State = "NSW",
                    Country = "AU"
                }

            );

            modelBuilder.Entity<Order>().HasData(
                new Order
                {
                    Id = 1,
                    CustomerId = 1,
                    OrderDate = new DateTime(2023, 1, 20),
                    Description = "New Item 1",
                    TotalAmount = 500,
                    DepositAmount = 10,
                    IsDelivery = true,
                    Status = Status.Pending,
                    OtherNotes = "new notes 1",
                    IsDeleted = false
                },
                new Order
                {
                    Id = 2,
                    CustomerId = 2,
                    OrderDate = new DateTime(2024, 4, 14),
                    Description = "New Item 2",
                    TotalAmount = 2500,
                    DepositAmount = 910,
                    IsDelivery = false,
                    Status = Status.Draft,
                    OtherNotes = "new notes 2",
                    IsDeleted = false
                }
            );
        }

    }
}