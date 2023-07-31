import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {

    data class Hello(val name: String, val desc: String)

    @GetMapping("/hello")
    fun getKotlinSpringBoot(): KotlinInfo {
        return Hello("kotlin", "hello world")
    }
}