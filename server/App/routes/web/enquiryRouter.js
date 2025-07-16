const express = require('express');
const { enquiryInsert, enquiryview, deleteenquiry,enquirysinglerow,updaterow} = require('../../controllers/web/enquirycontroller'); // ✅ Correctly extract the function

const enquiryRouter = express.Router();

enquiryRouter.post('/insert', enquiryInsert); // ✅ Now this is a function

enquiryRouter.get('/view', enquiryview);
enquiryRouter.delete('/delete/:id',deleteenquiry);
enquiryRouter.get('/single/:id',enquirysinglerow);
enquiryRouter.put('/update/:id',updaterow);
module.exports = enquiryRouter;
