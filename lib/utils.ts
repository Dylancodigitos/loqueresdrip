import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  // Manual formatting to avoid locale-specific hydration mismatches
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
