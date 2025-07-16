import React, { useState, useEffect } from "react";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableCell,
} from "flowbite-react";
import axios from "axios";

export const Enquiry = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id:""
  });

  const [envc, setEnvc] = useState([]); // Changed from {} to []

  // Handle input change
  const getvalue = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const saven = async (e) => {
    e.preventDefault();
    if(formData._id){
      axios
        .put(
          `http://localhost:3000/api/website/enquiry/update/${formData._id}`,
          formData
        )
        .then((res) => {
          console.log(res.data);
          setFormdata({ name: "", email: "", phone: "", message: "", _id: "" });
          getenq(); // Refresh list after submit
        });

    }
    else{
    try {
      const res = await axios.post(
        "http://localhost:3000/api/website/enquiry/insert",
        formData
      );
      console.log(res.data);
      setFormdata({ name: "", email: "", phone: "", message: "" });
      getenq(); // Refresh list after submit
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting enquiry");
    }
  };
}
  // Fetch enquiries
  const getenq = () => {
    axios
      .get("http://localhost:3000/api/website/enquiry/view")
      .then((res) => res.data)
      .then((finaldata) => {
        if (finaldata.status) {
          setEnvc(finaldata.message);
        } else {
          alert(finaldata.message);
        }
      });
  };

  useEffect(() => {
    getenq();
  }, []);

  const delete1=(DELID)=>{
    axios.delete(`http://localhost:3000/api/website/enquiry/delete/${DELID}`).then((res)=>{
      console.log(res.data);
      getenq();
    
  })
};
let editrow=(EDID)=>{
  axios.get(`http://localhost:3000/api/website/enquiry/single/${EDID}`).then((res)=>{
    console.log(res.data);
    setFormdata(res.data);

    
  })

}
  return (
    <div className="w-full min-h-screen px-4 py-6">
      <h1 className="text-center text-[40px] font-bold mb-6">User Enquiry</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-[30%_70%] gap-6">
        {/* Left: Enquiry Form */}
        <div className="bg-blue-100 p-6 rounded-md">
          <h2 className="text-lg font-bold mb-4">Enquiry Form</h2>
          <form onSubmit={saven}>
            <div className="mb-4">
              <Label htmlFor="name">Your Name</Label>
              <TextInput
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={getvalue}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Your Email</Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={getvalue}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={getvalue}
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={getvalue}
                placeholder="Message..."
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 text-white">
              {formData._id ? "Update Enquiry" : "Submit Enquiry"}
            </Button>
          </form>
        </div>

        {/* Right: Enquiry List Table */}
        <div>
          <h2 className="text-center text-[30px] font-bold mb-4">
            Enquiry List
          </h2>
          <div className="overflow-x-auto bg-white rounded-md shadow-md">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Srno</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>
                  <TableHeadCell>Phone</TableHeadCell>
                  <TableHeadCell>Message</TableHeadCell>
                  <TableHeadCell>Edit</TableHeadCell>
                  <TableHeadCell>Delete</TableHeadCell>
                </TableRow>
              </TableHead>

              <TableBody className="divide-y">
                {envc.length > 0 ? (
                  envc.map((item, index) => (
                    <TableRow
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>{item.message}</TableCell>
                      <TableCell>
                        <Button
                          size="xs"
                          color="warning"
                          onClick={() => editrow(item._id)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          size="xs"
                          color="failure"
                          onClick={() => delete1(item._id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell colSpan={7} className="text-center">
                      No Data Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
