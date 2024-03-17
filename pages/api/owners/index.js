import dbConnect from '@/db/connect';
import Owner from '@/db/models/owner';

dbConnect();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const owners = await Owner.find({});
      res.status(200).json({ success: true, data: owners });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
  console.log(data);
}   