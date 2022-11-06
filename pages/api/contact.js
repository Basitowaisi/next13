// Next.js API route support: https://nextjs.org/docs/api-routes/introduction}

export default function handler(req, res) {
  if (req.method == "POST") {
    const { subject, body, email } = req.body
    if (subject && email && body) {
      return res.status(200).json({
        message: "Success",
      })
    } else {
      return res.status(400).json({
        message: "Bad request",
      })
    }
  }
}
