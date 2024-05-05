import { formatCurrency } from "@/lib/formatters";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  priceInCents: number;
  description: string;
  imagePath: string;
};

export function ProductCard({
  id,
  name,
  priceInCents,
  description,
  imagePath,
}: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative aspect-video h-auto w-full">
        <Image src={imagePath} fill alt="name" />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(priceInCents)}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="line-clamp-4">{description}</p>
      </CardContent>

      <CardFooter>
        <Button asChild size="lg" className="w-full">
          <Link href={`/products/${id}/purchase`}></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProductCardSkeleton() {
  return (
    <Card className="flex animate-pulse flex-col">
      <div className="relative aspect-video h-auto w-full bg-gray-300" />
      <CardHeader>
        <CardTitle>
          <div className="h-6 w-3/4 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="h-4 w-1/2 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="h-4 w-full rounded-full bg-gray-300" />
        <div className="h-4 w-full rounded-full bg-gray-300" />
        <div className="h-4 w-3/4 rounded-full bg-gray-300" />
      </CardContent>

      <CardFooter>
        <Button size="lg" disabled className="w-full"></Button>
      </CardFooter>
    </Card>
  );
}
