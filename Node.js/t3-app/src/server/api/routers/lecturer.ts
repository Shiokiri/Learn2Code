import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const lecturerRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.lecturer.findFirst({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.lecturer.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        profession: z.string(),
        field: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.lecturer.create({
        data: input,
      });
    }),

  updateById: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        profession: z.string(),
        field: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.lecturer.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    }),

  deleteById: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.lecturer.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
