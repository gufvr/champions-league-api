import { Request, Response } from "express";
import * as service  from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
  const HttpResponse = await service.getClubService();
  res.status(HttpResponse.statusCode).json(HttpResponse.body);
}