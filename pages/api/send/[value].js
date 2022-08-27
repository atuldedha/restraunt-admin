export default async function handler(req, res) {
  const { value } = req.query;
  const dArr = value.split(" ");
  const mobNo = dArr[0];
  const otp = dArr[1];
  console.log(mobNo, otp);
  const options = {
    method: "GET",
  };
  const data = await fetch(
    `https://www.fast2sms.com/dev/bulkV2?authorization=s8eI7GrKpj2Pbu4510CaBhQzdXZgfWOTFNHnqAkJvLiVMowER9raASxhqjMYifHDsLCe1by56tp8gPO2&variables_values=${otp}&route=otp&numbers=${mobNo}`,
    options
  );
  const response = await data.json();
  res.status(200).json(response);
}
