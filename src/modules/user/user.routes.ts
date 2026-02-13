
import { Router } from "express";
import { User } from "./user.model";

const r=Router();

r.post("/", async(req,res)=> res.json(await User.create(req.body)));

r.get("/:id", async(req,res)=>{
 const u= await User.findByPk(req.params.id);
 if(!u) return res.status(404).json({message:"User not found"});
 res.json(u);
});

export default r;
