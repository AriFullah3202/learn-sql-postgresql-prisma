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
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = { insertIntoDB, getPosts };
