import BaseCtrl from './base';
import Todo from '../models/todo';

export default class TodoCtrl extends BaseCtrl {
  model = Todo;
  getByKey = (req, res) => {
    this.model.findOne({Key: req.params.Key}, (err, obj) => {
      if (err) {
        return console.error(err);
      }
      console.log(req.params)
      console.log(obj)
      res.json(obj);
    });
  };


  count = (req, res) => {
    this.model.count((err, count) => {
      if (err) { return console.error(err); }
      res.json(count);
    });
  };
  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    }).sort({note : -1});
  };

  deleteByKey = (req, res) => {
    this.model.findOneAndRemove({Key: req.params.Key}, (err) => {
      if (err) {
        return console.error(err);
      }



    });
  };




}
