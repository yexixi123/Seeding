package com.sending.entity;

/**
 * Created by yexixi on 2017/5/30.
 */
public class User {

    private String username;//用户名

    private String password;//密码

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return this.username + "-----" + this.password;
    }
}
