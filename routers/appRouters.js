import { Router } from "express";
import path from "path";
import { upload } from "../multer.js";
import { formModel } from "../database/models.js";

export const appRouter = new Router();


//GET REQUESTS
appRouter.get("/", (req, res) => {
    res.sendFile(path.resolve("./pages/index.html"))
});

appRouter.get("/create", (req, res) => {
    res.sendFile(path.resolve("./pages/forum.html"))
});

appRouter.get("/search", (req, res) => {
    res.sendFile(path.resolve("./pages/search.html"))
});

//POST REQUESTS
appRouter.post("/save-form", upload.single("photo"), async (req, res) => {
    const { firstname, lastname, email, phone, age } = req.body;
    const avatar = `${firstname}-${phone}${path.extname(req.file.originalname)}`
    const form = await formModel.findOne({ email });
    if (form) {
        res.send("This email already used !")
    } else {
        formModel.create({
            name: firstname,
            surname: lastname,
            age,
            email: email,
            phoneNumber: phone,
            avatar
        }).then(() => {
            res.send("Form saved !")

        });
    }
});

appRouter.post("/find-form", async (req, res) => {
    const { email } = req.body;
    const form = await formModel.findOne({ email });
    if (form) {
        res.send(form);
    } else {
        res.send("Not found any form for this email");
    }
});
