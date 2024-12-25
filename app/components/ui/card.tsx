// import { cn } from "@/app/lib/utils";

// export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

// export function Card({ className, ...props }: CardProps) {
//   return (
//     <div
//       className={cn(
//         "rounded-lg border bg-card text-card-foreground shadow-sm",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

// export function CardHeader({ className, ...props }: CardHeaderProps) {
//   return (
//     <div
//       className={cn("flex flex-col space-y-1.5 p-6", className)}
//       {...props}
//     />
//   );
// }

// export interface CardContentProps
//   extends React.HTMLAttributes<HTMLDivElement> {}

// export function CardContent({ className, ...props }: CardContentProps) {
//   return <div className={cn("p-6 pt-0", className)} {...props} />;
// }

// export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

// export function CardFooter({ className, ...props }: CardFooterProps) {
//   return (
//     <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
//   );
// }

import { cn } from "../../lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
  );
}
