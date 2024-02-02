"use client";
import React, { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginType, loginSchema } from "@/validations/authSchema";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (payload: LoginType) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: payload.email,
      password: payload.password,
    });
    if (error) {
      toast.error(error.message, { theme: "colored" });
    } else if (data.user) {
      setLoading(false);
      router.refresh();
      toast.success("Login in successfully", { theme: "colored" });
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li
          className="hover:bg-gray-200 p-2 cursor-pointer rounded-md"
          onClick={() => setOpen(true)}
        >
          Login
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex justify-between items-center">
              <span>Login</span>
              <X
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:bg-brand rounded-full p-1"
              />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
                <div className="mt-5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    placeholder="Enter your email"
                    id="email"
                    type="email"
                    {...register("email")}
                  />
                  <span className="text-red-400">{errors.email?.message}</span>
                </div>
                <div className="mt-5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    placeholder="Enter your password"
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                  <span className="text-red-400">{errors.password?.message}</span>
                </div>
                <div className="mt-5">
                  <Button
                    className="bg-brand w-full"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Continue"}
                  </Button>
                </div>
                <h1 className="text-center my-2">-- OR --</h1>
                <Button
                  variant={"outline"}
                  className="w-full"
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
                >
                  <Image
                    src="/images/github.png"
                    alt="Github"
                    className="mr-5"
                    width={25}
                    height={25}
                  />
                  Continue with Github
                </Button>
              </form>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
