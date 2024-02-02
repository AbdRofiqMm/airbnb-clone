"use client";
import React, { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterType, registerSchema } from "@/validations/authSchema";

export default function SignupModal() {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data: RegisterType) => console.log(data);

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li
          className="hover:bg-gray-200 p-2 cursor-pointer rounded-md"
          onClick={() => setOpen(true)}
        >
          Sing up
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex justify-between items-center">
              <span>Sign Up</span>
              <X
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:bg-brand rounded-full p-1"
              />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
              <div className="mt-5">
                <Label htmlFor="name">Name</Label>
                <Input
                  placeholder="Enter your email"
                  id="name"
                  {...register("name")}
                />
                <span className="text-red-400">{errors?.name?.message}</span>
              </div>
              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  placeholder="Enter your email"
                  id="email"
                  {...register("email")}
                />
                <span className="text-red-400">{errors?.email?.message}</span>
              </div>
              <div className="mt-5">
                <Label htmlFor="password">Password</Label>
                <Input
                  placeholder="Enter your password"
                  id="password"
                  {...register("password")}
                />
                <span className="text-red-400">{errors?.password?.message}</span>
              </div>
              <div className="mt-5">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  placeholder="Confirm your password"
                  id="cpassword"
                  {...register("password_confirmation")}
                />
                <span className="text-red-400">{errors?.password_confirmation?.message}</span>
              </div>
              <div className="mt-5">
                <Button className="bg-brand w-full">Continue</Button>
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
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
