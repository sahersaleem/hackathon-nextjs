import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-[24px]  justify-center">
      <Skeleton className="max-h-[400px] min-h-[400px] object-cover object-center" />
      <div className="flex flex-col gap-[8px] ">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
   