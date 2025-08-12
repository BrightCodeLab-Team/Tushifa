import TransactionForm from "@/components/admin/transactions/TransationForm";
import React from "react";

const NewTransactionPage = () => {
  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="new-patients main_container">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="text-primary">New Transaction</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Transaction Information</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <TransactionForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTransactionPage;
