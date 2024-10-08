import { response } from "express";
import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await PlayerRepository.insertPlayer(player);
    response = await HttpResponse.created();
  } else {
    response = HttpResponse.badRequest();
  }
  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  await PlayerRepository.deletePlayer(id);

  response = HttpResponse.ok({ message: "Deleted" });

  return response;
};
