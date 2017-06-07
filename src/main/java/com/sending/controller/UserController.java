package com.sending.controller;

import com.sending.entity.User;
import com.sending.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.Contact;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * Created by yexixi on 2017/5/30.
 */
//@CrossOrigin(maxAge = 3600)
@Controller
@RequestMapping("/user")
@Api(value = "user", description = "用户信息管理")
public class UserController {
    @Resource
    private UserService userServiceImpl;

    @RequestMapping(value = "/showUser",method = RequestMethod.GET)
    public ResponseEntity toIndex(HttpServletRequest request, Model model){

        List<User> users=this.userServiceImpl.selectAll();
        model.addAttribute("user", users.get(0));
//        return "showUser";
        return new ResponseEntity(users, HttpStatus.OK);
    }


    @RequestMapping(value = "/login",method = RequestMethod.POST)
    @ApiOperation(value = "验证登陆", notes = "返回true、false，true表示登陆成功，false表示登陆失败", response = Boolean.class, position = 2)
    public ResponseEntity login( @RequestBody User user){

        boolean b = userServiceImpl.loginByUsername(user.getUsername(), user.getPassword());
        System.out.println("----------"+b);
//        return "showUser";
        return new ResponseEntity(b, HttpStatus.OK);
    }

    @RequestMapping(value = "/addUser",method = RequestMethod.POST)
    public ResponseEntity addUser(@RequestBody User user){

        boolean b = userServiceImpl.addUser(user);
        System.out.println("----------"+b);
//        return "showUser";
        return new ResponseEntity(b, HttpStatus.OK);
    }
}
