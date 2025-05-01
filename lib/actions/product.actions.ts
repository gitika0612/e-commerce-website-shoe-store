'use server';
import {PrismaClient} from "@prisma/client";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { convertToPlainObject } from "../utils";

export async function getLatestProducts() {
    const prisma = new PrismaClient();
    const data = await prisma.product.findMany(
        {
            take: LATEST_PRODUCTS_LIMIT,
            orderBy: {
                createdAt: 'desc'
            }
        }
    )
    return convertToPlainObject(data);
}

// get single product by its slug 
export async function getProductBySlug(slug: string) {
    const prisma = new PrismaClient();
    return prisma.product.findFirst({
        where: {slug: slug}
    })

}