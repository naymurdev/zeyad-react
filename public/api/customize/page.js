let data = [
  {
    name: "loading..",
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
