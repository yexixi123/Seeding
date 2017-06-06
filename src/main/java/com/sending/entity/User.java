package com.sending.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * Created by yexixi on 2017/5/30.
 */
@ApiModel(value="用户对象模型")
public class User {
    @ApiModelProperty(value="用户名" ,required=true)
    private String username;//用户名
    @ApiModelProperty(value="密码" ,required=true)
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
