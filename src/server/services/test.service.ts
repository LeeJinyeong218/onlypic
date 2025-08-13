import { getUserRepository } from "../repositories/test.repository";

export async function getUserService(id: string) {
    console.log("service test")
    const user = await getUserRepository(id);
    if (!user) throw new Error("User not found");
    return { ...user, report: user.report.toString()};
}