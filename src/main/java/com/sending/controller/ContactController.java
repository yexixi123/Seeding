/*
 * Project: greenline-hrs-out-service
 * 
 * File Created at 2015-09-10
 
 * Copyright 2012 Greenline.com Corporation Limited.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of
 * Greenline Company. ("Confidential Information").  You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Greenline.com.
 */
package com.sending.controller;

import io.swagger.annotations.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;

@Api(value = "contacts-api", description = "有关于用户的CURD操作", position = 5)
@Controller
@RequestMapping("/contacts")
public class ContactController {
    /*@Autowired
    ContactService contactService;*/
    @ResponseBody
    @RequestMapping(value = "/1.0/contact/get.do/{id}", method = RequestMethod.GET)
    public Contact get(@PathVariable Long id) {
        return null;
    }

    @ApiOperation(value = "创建用户", notes = "返回用户实体对象", response = Contact.class, position = 2)
    @RequestMapping(value = "/1.0/contact/add.do", method = RequestMethod.POST)
    public void add(@RequestBody Contact contact, HttpServletResponse response) {
        //contactService.create(contact);
        String location = ServletUriComponentsBuilder.fromCurrentRequest().pathSegment("{id}").buildAndExpand("")
                .toUriString();

        response.setHeader("Location", location);
    }

    @RequestMapping(value = "/1.0/contact/update.do/{id}", method = RequestMethod.POST)
    @ApiResponses(value = { @ApiResponse(code = 200, message = "更新成功", response = Contact.class),
            @ApiResponse(code = 404, message = "找不到页面"), @ApiResponse(code = 500, message = "内部报错") })
    public void update(@ApiParam(name = "id", value = "编号", required = true) @PathVariable Integer id,
            @RequestBody Contact contact) {
        // contact.setId(id);;
        // contactService.update(contact);
    }
}
