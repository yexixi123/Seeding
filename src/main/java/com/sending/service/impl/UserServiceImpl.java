package com.sending.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.sending.dao.UserDao;
import com.sending.entity.User;
import com.sending.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by yexixi on 2017/5/30.
 */
@Service()
public class UserServiceImpl implements UserService {

    @Resource
    private UserDao userDao;

    public List<User> selectAll() {
        List<User> list = userDao.queryAll();
        return list;
    }

    public User queryUserByusername(String username, String password) {
        return null;
    }

    public boolean addUser(User user) {
        return false;
    }

    public boolean loginByUsername(String username, String password) {

        try {
            if (username == null || password == null) {
                return false;
            }
            // TODO 考虑对密码进行加密进行验证
            User user = userDao.selectUserByUsename(username);
            if (user.getPassword().equals(password)) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();

        }
        return false;
    }
}
