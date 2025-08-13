import prisma from "@/server/prisma";

export async function getUserRepository(id: string) {
    console.log("repository test")
    return prisma.user.findFirst({
        where: { id }
    });
}