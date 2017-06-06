package com.sending.controller;

import com.sending.entity.User;
import com.sending.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by yexixi on 2017/5/30.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userServiceImpl;

    @RequestMapping("/showUser")
    public ResponseEntity toIndex(HttpServletRequest request, Model model){

        List<User> users=this.userServiceImpl.selectAll();
        model.addAttribute("user", users.get(0));
//        return "showUser";
        return new ResponseEntity(users, HttpStatus.OK);
    }

    @RequestMapping("/login")
    public ResponseEntity login(String username,String password){

        boolean b = userServiceImpl.loginByUsername(username, password);
        System.out.println("----------"+b);
//        return "showUser";
        return new ResponseEntity(b, HttpStatus.OK);
    }

    @RequestMapping("/addUser")
    public ResponseEntity addUser(String username,String password){

        boolean b = userServiceImpl.loginByUsername(username, password);
        System.out.println("----------"+b);
//        return "showUser";
        return new ResponseEntity(b, HttpStatus.OK);
    }
}
