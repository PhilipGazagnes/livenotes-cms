export default function Page() {
  return (
    <div>
      process.env.DATABASE_URI:
      <br />
      {process.env.DATABASE_URI}
      <br />
      <br />
      process.env.PAYLOAD_SECRET:
      <br />
      {process.env.PAYLOAD_SECRET}
      <br />
      <br />
      process.env.S3_ACCESS_KEY_ID:
      <br />
      {process.env.S3_ACCESS_KEY_ID}
      <br />
      <br />
      process.env.S3_BUCKET:
      <br />
      {process.env.S3_BUCKET}
      <br />
      <br />
      process.env.S3_ENDPOINT:
      <br />
      {process.env.S3_ENDPOINT}
      <br />
      <br />
      process.env.S3_REGION:
      <br />
      {process.env.S3_REGION}
      <br />
      <br />
      process.env.S3_SECRET_ACCESS_KEY:
      <br />
      {process.env.S3_SECRET_ACCESS_KEY}
      <br />
      <br />
    </div>
  )
}
