"use client";

import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import "react-data-table-component-extensions/dist/index.css";
import customStyles from "./DataTableStyle";
import * as XLSX from "xlsx";

const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

function DataTableBase(props) {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  function downloadExcel(data) {
    if (!data || data.length === 0) {
      alert("No data available to export!");
      return;
    }

    const excludeAttributes = [
      "_id",
      "__v",
      "createdAt",
      "updatedAt",
      "pharmacyId",
    ];

    const flattenData = data.map((item) => {
      const flattenedItem = { ...item };

      if (flattenedItem.patient) {
        const { name, address } = flattenedItem.patient;
        flattenedItem.patient_name = name;
        flattenedItem.address = address;
      }

      // Extract prescription details
      if (flattenedItem.prescription_names) {
        if (Array.isArray(flattenedItem.prescription_names)) {
          flattenedItem.prescription_name = flattenedItem.prescription_names
            .map((prescription) => prescription.name)
            .join(", ");
          flattenedItem.amount = flattenedItem.prescription_names
            .map((prescription) => prescription.amount)
            .reduce((total, amount) => total + amount, 0);
        } else if (flattenedItem.prescription_names) {
          const { name, amount } = flattenedItem.prescription_names;
          flattenedItem.prescription_name = name;
          flattenedItem.amount = amount;
        }
      }

      return flattenedItem;
    });

    // Filter headers to exclude specified attributes
    const headers = Object.keys(flattenData[0]).filter(
      (header) => !excludeAttributes.includes(header)
    );

    const worksheetData = [
      headers,
      ...flattenData.map((row) => headers.map((header) => row[header])),
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "patients-list.xlsx");
  }

  const handleFilterChange = (e) => {
    const searchText = e.target.value;
    setFilterText(searchText);

    const filteredItems = props.data.filter((item) =>
      props?.isPrescription
        ? item?.patient?.name &&
          item?.patient?.name.toLowerCase().includes(searchText.toLowerCase())
        : props.isTransaction
        ? item.patient_name &&
          item.patient_name.toLowerCase().includes(searchText.toLowerCase())
        : item.name &&
          item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setData(filteredItems);
    setResetPaginationToggle(!resetPaginationToggle);
  };

  return (
    <section className="all-patients main_container mb-5">
      <div className="pt-4 pb-4 px-4 bg-white ">
        <div className="row">
          <div className="col-2">
            <div
              className="exportBtn"
              onClick={() => downloadExcel(props.data)}
            >
              <span className="fas fa-cloud-download-alt"></span>
              <p>Export list</p>
            </div>
          </div>
          <div className="col-3">{props.filterBtn}</div>{" "}
          <div className="col-3">{props.filterButtonForVisit}</div>{" "}
          <div className="col-3">
            <FilterComponent
              onFilter={(e) => {
                handleFilterChange(e);
              }}
              filterText={filterText}
            />
          </div>
        </div>
        <DataTable
          className="table-responsive mt-3"
          pagination
          data={data}
          columns={props.columns}
          selectableRowsComponent={"checkbox"}
          sortIcon={<i class="fas fa-sort"></i>}
          defaultSortField="id"
          selectableRowsComponentProps={selectProps}
          dense
          customStyles={customStyles}
          paginationResetDefaultPage={resetPaginationToggle}
          highlightOnHover
          selectableRows
          persistTableHead
        />
      </div>
    </section>
  );
}

export default DataTableBase;
