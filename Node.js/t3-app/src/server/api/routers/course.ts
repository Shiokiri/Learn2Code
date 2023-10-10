import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const courseRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.course.findMany();
  }),

  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.course.findUnique({
        where: { id: input.id },
      });
    }),
});
