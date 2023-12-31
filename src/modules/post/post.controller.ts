import { Request, Response } from "express";
import { PostService } from "./post.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "post create  successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getPosts = async (req: Request, res: Response) => {
  const options = req.query;
  console.log(options);

  try {
    const result = await PostService.getPosts(options);
    res.send({
      success: true,
      message: "all post get successfully",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};
const updatePostById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  try {
    const result = await PostService.updtePostById(id, data);
    res.send({
      success: true,
      message: "all post get successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const deletePostById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const result = await PostService.deletePostById(id);
    res.send({
      success: true,
      message: "delete post successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const aggregateLearn = async (req: Request, res: Response) => {
  try {
    const result = await PostService.aggregateLearn();
    res.send({
      success: true,
      message: "delete post successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  insertIntoDB,
  getPosts,
  updatePostById,
  deletePostById,
};
