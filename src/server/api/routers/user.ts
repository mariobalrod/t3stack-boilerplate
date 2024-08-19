import { z } from "zod";
import { hash } from "bcrypt";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "El nombre es requerido"),
        email: z.string().email("Email inválido"),
        password: z
          .string()
          .min(6, "La contraseña debe tener al menos 6 caracteres"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await hash(input.password, 10);

      return ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashedPassword,
        },
      });
    }),
});
