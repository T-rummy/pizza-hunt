const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');
const router = require('./pizza-routes');

router
.route('/:pizzaId').post(addComment);

router
.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment);

router
.route('/:pizzaId/:commentId/:replyId')
.delete(removeReply);
module.exports = router;