import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomNum(): number {
  const min = 2000;
  const max = 20000;

  return Math.floor(Math.random() * (max - min ) + min)
}