// import { cn } from "@/app/lib/utils";

// export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

// export function Avatar({ className, ...props }: AvatarProps) {
//   return (
//     <div
//       className={cn(
//         "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// export interface AvatarImageProps
//   extends React.ImgHTMLAttributes<HTMLImageElement> {}

// export function AvatarImage({ className, ...props }: AvatarImageProps) {
//   return (
//     <img className={cn("aspect-square h-full w-full", className)} {...props} />
//   );
// }

// export interface AvatarFallbackProps
//   extends React.HTMLAttributes<HTMLDivElement> {}

// export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
//   return (
//     <div
//       className={cn(
//         "flex h-full w-full items-center justify-center rounded-full bg-muted",
//         className
//       )}
//       {...props}
//     />
//   );
// }

import Image from "next/image";
import { cn } from "../../lib/utils";

export function Avatar({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({
  className,
  src,
  alt = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof Image>) {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn("aspect-square h-full w-full", className)}
      width={40}
      height={40}
      {...props}
    />
  );
}

export function AvatarFallback({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  );
}
