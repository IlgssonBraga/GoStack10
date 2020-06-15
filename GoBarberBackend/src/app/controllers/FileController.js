import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const arq = await File.create({
      name,
      path,
    });
    return res.json(arq);
  }
}

export default new FileController();
