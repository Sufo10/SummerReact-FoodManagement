const { Schema, model } = require('mongoose');

const counterSchema = new Schema(
  {
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
  }
);

counterSchema.index({ _id: 1, seq: 1 }, { unique: true });

const counterModel = model('Counter', counterSchema);

const autoIncrementModelID = (modelName, doc, next) => {
  counterModel.findByIdAndUpdate(
    modelName,
    { $inc: { seq: 1 } },
    { new: true, upsert: true },
    function (error, counter) {
      if (error) return next(error);

      doc.postId = counter.seq;
      next();
    }
  );
};

module.exports = autoIncrementModelID;