import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/avatars")
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const { phone, firstname } = req.body;
        cb(null, `${firstname}-${phone}${path.extname(originalname)}`)
    }
});

export const upload = multer({ storage });