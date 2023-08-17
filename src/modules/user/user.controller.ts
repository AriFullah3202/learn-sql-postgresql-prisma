import { Request, Response } from "express";
import { userService } from "./user.service";

const InsertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.InsertIntoDB(req.body);
    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "profile created or update successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers();
    res.send({
      success: true,
      message: "user get successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUsers(parseInt(req.params.id));
    res.send({
      success: true,
      message: "single user get successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  InsertIntoDB,
  insertOrUpdateProfile,
  getUsers,
  getSingleUsers,
};
