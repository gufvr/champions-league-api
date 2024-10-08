import { Request, Response } from "express";
import * as service from "../services/players-service";
import { noContent } from "../utils/http-helper";

export const getPlayer = async (req: Request, res: Response) => {
  const HttpResponse = await service.getPlayerService();
  res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const HttpResponse = await service.getPlayerByIdService(id);
  res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const HttpResponse = await service.createPlayerService(bodyValue);

  if (HttpResponse) {
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
  }
};
export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const HttpResponse = await service.deletePlayerService(id);

  res.status(HttpResponse.statusCode).json(HttpResponse.body);
};
