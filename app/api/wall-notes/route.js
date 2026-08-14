import { NextResponse } from 'next/server'

export async function GET() {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}?sort[0][field]=Created&sort[0][direction]=desc`

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
    },
    cache: 'no-store',
  })

  const result = await response.json()

  if (!response.ok) {
    console.error('Airtable error:', result)
    return NextResponse.json({ data: 'error', detail: result }, { status: 500 })
  }

  const notes = result.records.map((r) => ({
    id: r.id,
    story: r.fields.Story || '',
    name: r.fields.Initials || '',
  }))

  return NextResponse.json({ notes })
}

export async function POST(req) {
  const body = await req.json()
  const { initials, story } = body

  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Initials: initials,
          Story: story,
        },
      }),
    }
  )

  const result = await response.json()

  if (!response.ok) {
    console.error('Airtable error:', result)
    return NextResponse.json({ data: 'error', detail: result }, { status: 500 })
  }

  return NextResponse.json({ data: 'ok' })
}