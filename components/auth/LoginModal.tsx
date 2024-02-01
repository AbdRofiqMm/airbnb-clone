"use client";
import React, { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

export default function LoginModal() {
  const [open, setOpen] = useState<boolean>(false);
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
            <form action="">
              <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  placeholder="Enter your email"
                  id="email"
                />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="password">Password</Label>
                <Input
                  placeholder="Enter your password"
                  id="password"
                />
                <span className="text-red-400"></span>
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
