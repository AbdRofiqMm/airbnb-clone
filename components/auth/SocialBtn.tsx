import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "react-toastify";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SocialBtn() {
  const supabase = createClientComponentClient();
  const githubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error(error.message, { theme: "colored" });
    }
  };

  const googleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error(error.message, { theme: "colored" });
    }
  };

  return (
    <div>
      <Button
        variant={"outline"}
        className="w-full"
        onClick={googleLogin}
      >
        <Image
          src="/images/google.png"
          alt="Google"
          className="mr-5"
          width={25}
          height={25}
        />
        Continue with Google
      </Button>
      <Button
        variant={"outline"}
        className="w-full mt-5"
        onClick={githubLogin}
      >
        <Image
          src="/images/github.png"
          alt="Github"
          className="mr-5"
          width={25}
          height={25}
        />
        Continue with GIthub
      </Button>
    </div>
  );
}
