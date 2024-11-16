import { cache } from "react";
import { prisma } from "@/lib/prisma";

// Fetch all users (exclude the password)
export const getUsersData = cache(async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      title: true,
      name: true,
      email: true,
      createdAt: true,
    }
  });
});

export const getUsersCount = cache(async () => {
  return prisma.user.count();
});

export const getFemaleUsersCount = cache(async () => {
  return prisma.user.count({
    where: { sex: "Female" }
  });
});

export const getMaleUsersCount = cache(async () => {
  const result = await prisma.user.count({
    where: { sex: "Male" } 
  });
  return result;
});
