package com.sending.util;

/**
 * Created by yexixi on 2017/6/3.
 */

import org.springframework.context.annotation.Configuration;
/*
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;*/

@Configuration
//@EnableWebMvc
//@EnableSwagger2
//@ComponentScan(basePackages ={"com.albert.swagger"})
public class SwaggerConfig {

    /**
     * Every Docket bean is picked up by the swagger-mvc framework - allowing for multiple
     * swagger groups i.e. same code base multiple swagger resource listings.
     */
//    @Bean
//    public Docket customDocket() {
//        return new Docket(DocumentationType.SWAGGER_2);
//
//    }
//    public static final String SWAGGER_SCAN_BASE_PACKAGE = "com.test.web.controllers";
//    public static final String VERSION = "1.0.0";
//
//    ApiInfo apiInfo() {
//        return new ApiInfoBuilder()
//                .title("Swagger API")
//                .description("This is to show api description")
//                .license("Apache 2.0")
//                .licenseUrl("http://www.apache.org/licenses/LICENSE-2.0.html")
//                .termsOfServiceUrl("")
//                .version(VERSION)
////                .contact(new Contact("","", "miaorf@outlook.com"))
//                .build();
//    }
//
//    @Bean
//    public Docket api() {
//        return new Docket(DocumentationType.SWAGGER_2)
//                .apiInfo(apiInfo())
//                .select()
//                .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
//                .build();
//    }

    /******************************************************/
    /**
     * 创建API应用
     * apiInfo() 增加API相关信息
     * 通过select()函数返回一个ApiSelectorBuilder实例,用来控制哪些接口暴露给Swagger来展现，
     * 本例采用指定扫描的包路径来定义指定要建立API的目录。
     *
     * @return
     */
   /* @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.sending"))
                .paths(PathSelectors.any())
                .build();
    }

    *//**
     * 创建该API的基本信息（这些基本信息会展现在文档页面中）
     * 访问地址：http://项目实际地址/swagger-ui.html
     * @return
     *//*
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("使用Swagger2构建RESTful APIs")
                .description("更多请关注http://www.baidu.com")
                .termsOfServiceUrl("http://www.baidu.com")
                .contact("seeding")
                .version("1.0")
                .build();
    }*/
    /******************************************************/
}

