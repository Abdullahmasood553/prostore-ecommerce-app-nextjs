'use server'
import { LATEST_PRODUCT_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";
import { convertPlainObject } from "../utils";
// Get latest products
export async function getLatestProducts() {
    

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCT_LIMIT,
        orderBy: { createdAt: 'desc' }
    });

    return convertPlainObject(data);
}


// Get single product by its slug
export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: { slug: slug}
    });
}