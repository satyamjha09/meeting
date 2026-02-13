
import { Router } from "express";
import { MeetingController } from "../index/meeting.controller";

const r = Router();

r.post("/",MeetingController.create);
r.get("/",MeetingController.list);
r.get("/:id",MeetingController.get);
r.put("/:id",MeetingController.update);
r.delete("/:id",MeetingController.delete);

export default r;
