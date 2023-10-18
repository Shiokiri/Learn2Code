import { createTRPCRouter } from "@/server/api/trpc";
import { exampleRouter } from "./routers/example";
import { courseRouter } from "./routers/course";
import { executorRouter } from "./routers/executor";
import { lecturerRouter } from "./routers/lecturer";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  course: courseRouter,
  executor: executorRouter,
  lecturer: lecturerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
