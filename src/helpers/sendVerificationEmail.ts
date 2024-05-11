import { resend } from "@/lib/resend";
import VerifiactionEmail from "../../email/verificationEmail";
import { apiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<apiResponse> {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mystry message verification code",
      react: VerifiactionEmail({ username, otp: verifyCode }),
    });
    return { sucess: true, message: "verifiion email send successfully " };
  } catch (error) {
    return { sucess: false, message: "failed to send  verification email " };
  }
}
