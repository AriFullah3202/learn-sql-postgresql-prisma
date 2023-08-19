import { PrismaClient, Profile, User } from "@prisma/client";
const prisma = new PrismaClient();

const InsertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExit = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });
  if (isExit) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }
  const result = await prisma.profile.create({
    data,
  });
  return result;
};

const getUsers = async () => {
  // const result = await prisma.user.findMany({
  // select: {
  //   email: true,
  // },
  // include: {
  //   profile: true,
  // },

  // });
  const result = await prisma.$queryRaw`SELECT * FROM users`;
  return result;
};
const getSingleUsers = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
  return result;
};

export const userService = {
  InsertIntoDB,
  getUsers,
  insertOrUpdateProfile,
  getSingleUsers,
};
