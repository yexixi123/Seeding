/*
import com.sending.dao.UserDao;
import com.sending.entity.User;
import com.sending.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

*/
/**
 * Created by yexixi on 2017/5/30.
 *//*

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/spring-mybatis.xml"})
public class TestMyBatis {

    @Resource
    private UserDao userDao;

    @Resource
    private UserService userServiceImpl;

    @Test
    public void testQueryAllDao() {
        List<User> users = userDao.queryAll();
        for (User u : users) {
            System.out.println(u.toString());
        }
    }

    @Test
    public void testQueryAllSevice() {
        List<User> users = userServiceImpl.selectAll();
        for (User u : users) {
            System.out.println(u.toString());
        }
    }

    @Test
    public void testselectUserByUsename() {
        User yexixi = userDao.selectUserByUsename("yexixi");
        System.out.println(yexixi.toString());
    }
}
*/
