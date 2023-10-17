import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const executorRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.executor.findFirst({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.executor.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        status: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.executor.create({
        data: input,
      });
    }),

  updateById: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        status: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.executor.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    }),

  deleteById: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.executor.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
