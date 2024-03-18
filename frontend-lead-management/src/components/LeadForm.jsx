import React, { useState, useRef } from "react";
import axios from "axios";
import Pincode from "react-pincode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LeadForm = () => {
  const [pincodeData, setPincodeData] = useState("");
  const dateInputRef = useRef(null);
  const notify = () => toast("Lead data added!");
  const notifyDate = () =>
    toast("Past and Current Date selection is  not allowed");
  const [leadData, setLeadData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
    productType: "",

    preferredTimeSlot: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData({ ...leadData, [name]: value });
  };

  const handleDateChange = (e) => {
    let today = new Date();
    let selectedDate = new Date(e.target.value);
    if (today >= selectedDate) {
      notifyDate();
      dateInputRef.current.value = "";
    } else {
      setLeadData({
        ...leadData,
        preferredDate: e.target.value,
      });
    }
  };

  const handlePinChange = (data) => {
    console.log(data);

    setLeadData({
      ...leadData,
      pinCode: data.pincode,
      city: data.city,
      state: data.stateName,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Lead Data:", leadData);
    try {
      const response = await axios.post(
        "https://lead-management-89mt.onrender.com/addLead",
        leadData
      );
      console.log("Lead created:", response.data);
      dateInputRef.current.value = "";
      notify();

      setLeadData({
        firstName: "",
        lastName: "",
        mobileNo: "",
        address: "",
        pinCode: "",
        city: "",
        state: "",
        productType: "",
        preferredDate: "",
        preferredTimeSlot: "",
      });
    } catch (error) {
      console.error("Error creating lead:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">First Name:</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            maxLength={20}
            value={leadData.firstName}
            onChange={handleChange}
            pattern="[a-z A-z]*"
            title="Only alphabets are allowed"
            required
          />
          <div class="form-text">Only alphabets are allowed</div>
        </div>
        <div className="mb-2">
          <label className="form-label">Last Name:</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            maxLength={20}
            value={leadData.lastName}
            onChange={handleChange}
            pattern="[a-z A-z]*"
            title="Only alphabets are allowed"
            required
          />
          <div class="form-text">Only alphabets are allowed</div>
        </div>
        <div className="mb-2">
          <label className="form-label">Mobile No:</label>
          <input
            className="form-control"
            type="tel"
            name="mobileNo"
            maxLength={10}
            value={leadData.mobileNo}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Only numbers are allowed"
            required
          />
          <div class="form-text">Only numbers are allowed</div>
        </div>

        <div className="mb-2">
          <label className="form-label">Address:</label>
          <input
            className="form-control"
            type="text"
            name="address"
            maxLength={50}
            value={leadData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row mb-2">
          <div className="col">
            <Pincode
              showArea={false}
              showState={false}
              showDistrict={false}
              showCity={false}
              getData={handlePinChange}
              pincodeInput={{ width: "inherit", display: "inline" }}
            />
          </div>

          <div className="col">
            <input
              type="text"
              name="city"
              value={leadData.city}
              onChange={handleChange}
              placeholder="City"
              readOnly
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="state"
              value={leadData.state}
              onChange={handleChange}
              placeholder="State"
              readOnly
              required
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="form-label">Type of Product:</label>
          <select
            className="form-select"
            name="productType"
            value={leadData.productType}
            onChange={handleChange}
            required
          >
            <option value="">Select Product Type</option>
            <option value="SIM">SIM</option>
            <option value="JioFiber">JioFiber</option>
            <option value="AirFiber">AirFiber</option>
            <option value="JioPhone">JioPhone</option>
            <option value="JioFi">JioFi</option>
            <option value="JioBook">JioBook</option>
            <option value="JioBharat">JioBharat</option>
          </select>
        </div>
        <div className="row mb-2">
          <div className="col">
            <label className="form-label">Preferred Date:</label>
            <input
              className="form-control"
              type="date"
              name="preferredDate"
              onChange={handleDateChange}
              ref={dateInputRef}
              required
            />
          </div>

          <div className="col">
            <label className="form-label">Preferred Time Slot:</label>
            <input
              className="form-control"
              type="time"
              name="preferredTimeSlot"
              value={leadData.preferredTimeSlot}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LeadForm;
