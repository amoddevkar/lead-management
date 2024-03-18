import React, { useEffect, useState } from "react";

const TableComponent = ({ leads }) => {
  const [filter, setFilter] = useState(null);
  const [filteredLeads, setfiltererdLeads] = useState(leads);

  useEffect(() => {
    const filteredLeads =
      filter && Object.keys(filter).length != 0
        ? leads.filter((lead) => {
            let { productType, state, city } = filter;
            if (productType && state && city) {
              return (
                lead.productType === filter.productType &&
                lead.state === filter.state &&
                lead.city === filter.city
              );
            } else if (productType && state) {
              return (
                lead.productType === filter.productType &&
                lead.state === filter.state
              );
            } else if (productType && city) {
              return (
                lead.productType === filter.productType &&
                lead.city === filter.city
              );
            } else if (state && city) {
              return lead.state === filter.state && lead.city === filter.city;
            } else if (productType) {
              return lead.productType === filter.productType;
            } else if (state) {
              return lead.state === filter.state;
            } else if (city) {
              return lead.city === filter.city;
            }
          })
        : leads;
    setfiltererdLeads(filteredLeads);
    console.log(filter);
  }, [filter]);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col">
              <span style={{ display: "inline-block", width: "10px" }}>
                First Name
              </span>
            </th>
            <th className="col">Last Name</th>
            <th className="col">Mobile No</th>
            <th className="col">Address</th>
            <th className="col">Pin Code</th>

            <th className="col">
              <input
                style={{ width: "100px" }}
                type="text"
                name="city"
                onChange={(e) => setFilter({ ...filter, city: e.target.value })}
                //readOnly
                placeholder="City"
                required
              />
            </th>
            <th className="col">
              <input
                style={{ width: "100px" }}
                type="text"
                name="state"
                onChange={(e) =>
                  setFilter({ ...filter, state: e.target.value })
                }
                //readOnly
                placeholder="State"
                required
              />
            </th>
            <th className="col">
              <span>Product Type</span>
              <select
                //className="form-select"
                style={{ width: "20px" }}
                name="productType"
                onChange={(e) =>
                  setFilter({ ...filter, productType: e.target.value })
                }
              >
                <option value="SIM">SIM</option>
                <option value="JioFiber">JioFiber</option>
                <option value="AirFiber">AirFiber</option>
                <option value="JioPhone">JioPhone</option>
                <option value="JioFi">JioFi</option>
                <option value="JioBook">JioBook</option>
                <option value="JioBharat">JioBharat</option>
              </select>
              {/* <span>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => {
                    let s = { ...filter };
                    delete s.productType;
                    setFilter(s);
                  }}
                ></button>
              </span> */}
            </th>
            <th className="col">Preferred Date</th>
            <th className="col">Preferred Time</th>
          </tr>
        </thead>
        <tbody>
          {filter
            ? filteredLeads.map((lead, index) => (
                <tr key={index}>
                  <td>{lead.firstName}</td>
                  <td>{lead.lastName}</td>
                  <td>{lead.mobileNo}</td>
                  <td>{lead.address}</td>
                  <td>{lead.pinCode}</td>
                  <td>{lead.city}</td>
                  <td>{lead.state}</td>
                  <td>{lead.productType}</td>
                  <td>{lead.preferredDate.toString().slice(0, 10)}</td>
                  <td>{lead.preferredTimeSlot}</td>
                </tr>
              ))
            : leads.map((lead, index) => (
                <tr key={index}>
                  <td>{lead.firstName}</td>
                  <td>{lead.lastName}</td>
                  <td>{lead.mobileNo}</td>
                  <td>{lead.address}</td>
                  <td>{lead.pinCode}</td>
                  <td>{lead.city}</td>
                  <td>{lead.state}</td>
                  <td>{lead.productType}</td>
                  <td>{lead.preferredDate.toString().slice(0, 10)}</td>
                  <td>{lead.preferredTimeSlot}</td>
                </tr>
              ))}
          {}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
