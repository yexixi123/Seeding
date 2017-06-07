package com.sending.service;

import com.sending.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yexixi on 2017/5/30.
 */
public interface UserService {

    /**
     * 查询所有
     *
     * @return
     */
    public List<User> selectAll();

    /**
     * 查询用户
     *
     * @param username
     * @return
     */
    public User queryUserByusername(String username);


    /**
     * 获取一条数据
     * @param user
     * @return
     */
    public boolean addUser(User user);

    /**
     * 验证登陆
     *
     * @param username
     * @param password
     * @return
     */
    public boolean loginByUsername(String username, String password);
}
