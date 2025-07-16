let express = require('express');
let app = express();
let cors = require('cors');
let mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
const enquiryRouter = require('./App/routes/web/enquiryRouter');
app.use(express.json());
app.use('/api/website/enquiry',enquiryRouter);

mongoose.connect(process.env.DBURL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Not Connected to DB");
    console.log(err);
  });
