const Enquiry1 = require("../../models/enquiry.models");

const enquiryInsert = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const enquiry = new Enquiry1({
      name,
      email,
      phone,
      message,
    });

    await enquiry.save();

    res.status(201).json({ status: 1, message: "Enquiry saved successfully" });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Error while saving enquiry",
      error: err.message,
    });
  }
};
const enquiryview= async(req,res)=>{
const view=await Enquiry1.find();
res.status(200).json({status:1,message:view})
}

const deleteenquiry= async(req,res)=>{
    const DELID=req.params.id;
     const enquiry = await Enquiry1.findByIdAndDelete({_id:DELID});
  res.status(200).json({status:1,message:enquiry})
}

const enquirysinglerow = async (req, res) => {
  try {
    let EDIT = req.params.id;
    const enquiry = await Enquiry1.findOne({ _id: EDIT });

    if (!enquiry) {
      return res.status(404).json({
        status: 0,
        message: "Enquiry not found",
      });
    }

    res.status(200).json(enquiry); // ✅ flattened response
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Error fetching enquiry",
      error: err.message,
    });
  }
};


let updaterow=async(req,res)=>{
  const enquiryid=req.params.id;
  const { name, email, phone, message } = req.body;
  let update={
      name,
      email,
      phone,
      message,
    }
  const enquiry=await Enquiry1.updateOne({_id:enquiryid},update);
 res.send({status:1,message:enquiry,enquiry})
  console.log(update);
}
module.exports = {
  enquiryInsert,
  enquiryview,
  deleteenquiry,
  enquirysinglerow,
  updaterow,
};

