import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const courseRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.course.findFirst({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.course.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        time: z.string(),
        place: z.string(),
        price: z.number(),
        income: z.number(),
        lecturerId: z.string(),
        executorId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.course.create({
        data: input,
      });
    }),

  updateById: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        time: z.string(),
        place: z.string(),
        price: z.number(),
        income: z.number(),
        lecturerId: z.string(),
        executorId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.course.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    }),

  deleteById: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.course.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
