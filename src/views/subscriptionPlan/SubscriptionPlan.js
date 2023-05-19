import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddPlan from "./AddPlan";
import useSubscriptionPlansQuery from "../../store/subscriptionsplans/useSubPlanQuery";
import EditPlan from "./EditPlan";

const tableth = [ "Name",   "Country", "Description", "Status", "Action"];

function SubscriptionPlan() {
  const [addplan, setAddPlan] = useState(false);

  const handleAddClose = () => setAddPlan(false);
  const handleAddShow = () => setAddPlan(true);

  const [editplan, setEditPlan] = useState(false);

  const handleEditClose = () => setEditPlan(false);
  const handleEditShow = (id) => {
    setEditPlan(true);
  setSubId(id)
  }

  const [subid,setSubId] = useState(null)
  const [deletedata,setDeleteData] = useState(null)

  const [search, setSearch] = useState("");
  const [limit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  let query = {
    limit: limit,
    offset: currentPage * limit,
    search: search,
  };

  const {
    data: subscriptionPlansData,
    isLoading,
    isFetching,
  } = useSubscriptionPlansQuery.Plans_list(query);



  const { mutateAsync: deletePlan, isSuccess } =
  useSubscriptionPlansQuery.DeletePlan();


 

  // subscriptionPlansData?.data?.results?.map((item) => {
  //   console.log(item);
  // });



  // let planArray = []

  // planArray.push(subscriptionPlansData?.data?.results)
  // console.log(planArray[0].name)

  return (
    <div>
      <div className="justify-content-end align-items-end d-flex">
        <Button variant="primary " onClick={handleAddShow}>
          Add Plan
        </Button>
      </div>

      <Table responsive="sm" className="mt-3" striped bordered>
        <thead>
          <tr style={{ backgroundColor: "#DCDCDC" }}>
            {tableth.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subscriptionPlansData?.data?.results?.map((item) => (
            <>
              <tr>
                <td>{item?.name}</td>
                <td>{item?.country}</td>
                <td>{item?.description}</td>
                <td>{item?.is_active ? "active" : "Inactive"}</td>

                <td>
                  <Button
                    variant="primary "
                    className="m-1"
                    onClick={()=>handleEditShow(item?.id)}
                  >
                    Edit
                  </Button>
                  <Button variant="primary" onClick={()=>deletePlan(item?.id)}>Delete</Button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
      <EditPlan  id={subid} show={editplan} handleClose={handleEditClose} />
      <AddPlan show={addplan} handleClose={handleAddClose} />
    </div>
  );
}

export default SubscriptionPlan;
