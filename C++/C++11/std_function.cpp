#include <functional>
#include <iostream>

struct Foo {
    Foo(int num) : num(num){}
    void printAdd(int i) const { std::cout << num+i << std::endl; }
    int num;
};

void printNum(int i) {
    std::cout << i << std::endl;
}

struct PrintNum {
    void operator() (int i) const {
        std::cout << i << std::endl;
    }
};

int main() {
    // 1. 用于普通函数
    std::function<void(int)> f_display = printNum;
    f_display(0);

    // 2. 用于lambda表达式
    std::function<void()> f_display_1 = [](){printNum(1);};
    f_display_1();

    // 3. 用于std::bind
    std::function<void()> f_display_12 = std::bind(printNum, 12);
    f_display_12();

    // 4. 用于类成员函数
    std::function<void(const Foo&, int)> f_add_display = &Foo::printAdd;
    const Foo foo(123);
    f_add_display(foo, 1);
    f_add_display(123, 2);

    // 5. 用于类成员变量
    std::function<int(Foo const&)> f_num = &Foo::num;
    std::cout << "num: " << f_num(foo) << std::endl;

    // 6. 用于对象和它的成员函数
    using std::placeholders::_1;
    std::function<void(int)> f_add_display2 = std::bind(&Foo::printAdd, foo, _1);
    f_add_display2(2);

    // 7. 用于对象指针和它的成员函数
    std::function<void(int)> f_add_display3 = std::bind(&Foo::printAdd, &foo, _1);
    f_add_display3(3);

    // 8. 用于函数对象
    std::function<void(int)> f_display_obj = PrintNum();
    f_display_obj(1234);
}
