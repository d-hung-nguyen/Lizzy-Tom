import dbConnect from '../../../db/connect';
import Cat from '../../../db/models/cat';

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const cats = await Cat.find({});
        res.status(200).json({ success: true, data: cats });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const cat = new Cat(req.body);
        await cat.save();
        res.status(201).json({ success: true, data: cat });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}