module.exports = (req, res) => {
	// 删除session
	req.session.destroy(function () {
		// 删除cookie
		res.clearCookie('connect.sid');
		// 清除模板中的用户信息
		req.app.locals.userInfo = null;
		// 重定向到用户登录页面
		res.send("<script>alert('退出成功');location.href='/admin/login'</script>");
		// res.redirect('/admin/login');
		
	});
}