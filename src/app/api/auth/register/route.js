import prisma from "@/utils/connect";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();

    // Check if the email is already in use
    const existingUser = await prisma.User.findUnique({
      where: { email },
    });
    if (existingUser) {
      return new Response(
        JSON.stringify({
          user: null,
          message: "Email address is already in use.",
        }),
        { status: 409 } // Conflict
      );
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    // Create the user
    const user = await prisma.User.create({
      data: {
        name,
        email,
        password: hash,
      },
    });

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Internal server error." }), {
      status: 500,
    });
  }
};
