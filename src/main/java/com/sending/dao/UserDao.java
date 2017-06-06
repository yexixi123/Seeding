package com.sending.dao;

import com.sending.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yexixi on 2017/5/30.
 */
@Service("userDao")
public interface UserDao {

    /***
     * 查询所有
     *
     * @return
     */
    public List<User> queryAll();


    /**
     * 通过 用户名查询一条数据
     * 用户名唯一
     *
     * @param username
     * @return
     */
    public User selectUserByUsename(String username);

    /**
     * 添加一条数据
     * @param user
     */
    public void insertUser(User user);
}
