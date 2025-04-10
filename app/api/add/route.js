import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  const body = await request.json()

  // 👇 Clean the handle
  body.handle = body.handle.trim().toLowerCase()

  console.log(body)

  const client = await clientPromise
  const db = client.db("Bittree")
  const collection = db.collection("links")

  const doc = await collection.findOne({ handle: body.handle })

  if (doc) {
    return Response.json({
      success: false,
      error: true,
      result: null,
      message: 'Bittree already exists'
    })
  }

  const result = await collection.insertOne(body)

  return Response.json({
    success: true,
    error: false,
    result: result,
    message: 'Your link was successfully added'
  })
}
