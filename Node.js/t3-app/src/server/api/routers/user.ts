import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    console.log("input", input);
    return ctx.db.user.findFirst({
      where: {
        id: input,
      },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany();
  }),
});
