const { Article } = require('../../model/article');
const { Comment } = require('../../model/comment');


module.exports = async (req, res) => {
	// 获取要删除的用户id
	// res.send(req.query.id)
	// 根据id删除用户
	await Article.findOneAndDelete({_id: req.query.id});
	await Comment.deleteMany({aid:req.query.id});
	// 将页面重定向到用户列表页面
	res.redirect('/admin/article');
}