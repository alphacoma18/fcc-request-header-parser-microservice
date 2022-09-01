import express from "express";
import cors from "cors"
const app = express();
app.use(cors())
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(express.json());
app.get("/api/whoami", (req, res) => {
	const ipaddress = req.ip;
	const language = req.acceptsLanguages()[0];
	const software = req.headers["user-agent"];
	res.json({ ipaddress, language, software });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server Running on PORT ${PORT}`);
});
