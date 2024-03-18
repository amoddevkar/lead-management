import React, { useState, useEffect } from "react";
import axios from "axios";
import TableComponent from "./TableComponent"; // Assuming you have the table component in a separate file

const LeadList = () => {
  // const dummyLeads = [
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     mobileNo: "1234567890",
  //     address: "123 Main St",
  //     pinCode: "123456",
  //     city: "Some City",
  //     state: "Some State",
  //     productType: "JioFiber",
  //     preferredDate: "2024-03-16",
  //     preferredTimeSlot: "10:00 AM",
  //   },
  //   {
  //     firstName: "Alice",
  //     lastName: "Smith",
  //     mobileNo: "9876543210",
  //     address: "456 Elm St",
  //     pinCode: "654321",
  //     city: "Another City",
  //     state: "Another State",
  //     productType: "JioPhone",
  //     preferredDate: "2024-03-17",
  //     preferredTimeSlot: "02:00 PM",
  //   },
  //   {
  //     firstName: "Alice",
  //     lastName: "Smith",
  //     mobileNo: "9876543210",
  //     address: "456 Elm St",
  //     pinCode: "654321",
  //     city: "Another City",
  //     state: "Another State",
  //     productType: "JioPhone",
  //     preferredDate: "2024-03-17",
  //     preferredTimeSlot: "02:00 PM",
  //   },
  //   {
  //     firstName: "Alice",
  //     lastName: "Smith",
  //     mobileNo: "9876543210",
  //     address: "456 Elm St",
  //     pinCode: "654321",
  //     city: "Another City",
  //     state: "Another State",
  //     productType: "JioPhone",
  //     preferredDate: "2024-03-17",
  //     preferredTimeSlot: "02:00 PM",
  //   },
  //   {
  //     firstName: "Alice",
  //     lastName: "Smith",
  //     mobileNo: "9876543210",
  //     address: "456 Elm St",
  //     pinCode: "654321",
  //     city: "Another City",
  //     state: "Another State",
  //     productType: "JioPhone",
  //     preferredDate: "2024-03-17",
  //     preferredTimeSlot: "02:00 PM",
  //   },
  //   // Add more dummy lead objects as needed
  // ];
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get(
          "https://lead-management-89mt.onrender.com/leads"
        );
        setLeads(response.data);
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div>
      <h2>Leads List</h2>

      <TableComponent leads={leads} />
    </div>
  );
};

export default LeadList;
