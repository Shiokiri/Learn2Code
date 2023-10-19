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
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.session?.user?.id === undefined)
        throw new Error("User is not logged in");
      return ctx.db.executor.create({
        data: {
          ...input,
          userId: ctx.session?.user?.id,
        },
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
    .mutation(async ({ ctx, input }) => {
      return ctx.db.executor.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    }),

  deleteById: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.executor.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
