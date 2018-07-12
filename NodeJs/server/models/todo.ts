import * as mongoose from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
var connection = mongoose.createConnection("mongodb://localhost/turnover");

autoIncrement.initialize(connection);
const todoSchema = new mongoose.Schema({
  Key: {type: Number, default: 0, unique: true},
  title : { type: String, trim: true, required: true },
  description : { type: String},
  dueDate: {type: String},
  checkOff: { type: Boolean, default: false }

});

todoSchema.plugin(autoIncrement.plugin, {
  model: 'todoSchema',
  field: 'Key',
  startAt: 1,
  incrementBy: 1
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
