import { connectDB } from "@/lib/db";
import Products from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      category,
      description,
      price: { mrp, sellingPrice },
      images,
    } = await request.json();

    //validate the req body
    if (
      !name ||
      !category ||
      !description ||
      !mrp ||
      !sellingPrice ||
      !images
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    //wait for database connection
    await connectDB();

    const existingProduct = await Products.findOne({ name });

    if (existingProduct) {
      return NextResponse.json(
        { error: "Product already uploaded" },
        { status: 400 }
      );
    }

    await Products.create({
      name,
      category,
      description,
      price: {
        mrp,
        sellingPrice,
      },
      images,
    });

    return NextResponse.json(
      { message: "Product uploaded successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Product Upload Unsuccesful", error);
    return NextResponse.json(
      { error: "Failed to upload product" },
      { status: 400 }
    );
  }
}
