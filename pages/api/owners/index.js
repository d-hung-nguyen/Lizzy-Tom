import dbConnect from '../../../db/connect';
import Owner from '@/db/models/owner';

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const owners = await Owner.find({});
        res.status(200).json({ success: true, data: owners });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const owner = new Owner(req.body);
        await owner.save();
        res.status(201).json({ success: true, data: owner});
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}