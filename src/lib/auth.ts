import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "ceedadev" },
        password: { label: "Password", type: "password" },
      },
      // @ts-expect-error
      authorize: async () => {
        return {
          id: 1,
          name: "Ceedadev",
          email: "ceedadev@gmail.com",
        };
      },
    }),
  ], // rest of your authConfig
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthOptions;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
