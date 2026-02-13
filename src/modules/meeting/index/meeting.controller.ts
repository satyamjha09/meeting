
import { Request,Response,NextFunction } from "express";
import { MeetingService } from "../service/meeting.service";

export class MeetingController{

 static create = async(req:Request,res:Response,next:NextFunction)=>{
  try{ res.json(await MeetingService.create(req.body)); }
  catch(e){ next(e); }
 };

 static list = async(req:Request,res:Response,next:NextFunction)=>{
  try{ res.json(await MeetingService.list(req.query)); }
  catch(e){ next(e); }
 };

 static get = async(req:Request,res:Response,next:NextFunction)=>{
  try{ res.json(await MeetingService.get(Number(req.params.id))); }
  catch(e){ next(e); }
 };

 static update = async(req:Request,res:Response,next:NextFunction)=>{
  try{ res.json(await MeetingService.update(Number(req.params.id),req.body)); }
  catch(e){ next(e); }
 };

 static delete = async(req:Request,res:Response,next:NextFunction)=>{
  try{ await MeetingService.delete(Number(req.params.id)); res.json({message:"Deleted"}); }
  catch(e){ next(e); }
 };

}
