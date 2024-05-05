import db from "@/db/db";
import { notFound } from "next/navigation";

export async function PurchasePage({}) {
  const product = await db.product.findUnique({ where: { id } });

  if (product == null) return notFound();

  return (
    <main>
      <h1>hello</h1>
    </main>
  );
}
