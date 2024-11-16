import {createSafeActionClient} from "next-safe-action"
import {prisma} from "@/lib/prisma"
export const actionClient = createSafeActionClient().use(async ({next}) => {
    return next({ctx: {prisma}});
});