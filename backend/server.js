const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;
const server = app.listen(PORT, () => {});

server.on("error", (err) => {
  console.error("Server error:", err);
});

let participantForms = [];
let speakerForms = [];
let sponsorForms = [];


app.post("/submit-form", (req, res) => {
  const formData = req.body;
  const formType = formData.type;
  if (!formType) {
    return res
      .status(400)
      .send({ result: false, message: "Typ formularza jest wymagany" });
  }

  switch (formType) {
    case "participant":
      participantForms.push(formData);
      break;
    case "speaker":
      speakerForms.push(formData);
      break;
    case "sponsor":
      sponsorForms.push(formData);
      break;
    default:
      return res
        .status(400)
        .send({ result: false, message: "nieznany typ formularza" });
  }
  res
    .status(200)
    .send({ result: true, message: "Dane formularza otrzymane poprawnie" });
});

app.get("/submitted-forms", (req, res) => {
  const submittedForms = {
    participants: participantForms,
    speakers: speakerForms,
    sponsors: sponsorForms,
  };
  res.status(200).send({result: true, message: submittedForms});
});
