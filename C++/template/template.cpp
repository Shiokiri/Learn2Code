#include <iostream>
#include <string>

// 1
template <typename T>
class classA
{
private:
    T element;
public:
    classA(T element): element(element) {}
    T get() { return element; }
};

// 2
template <typename DstT, typename SrcT>
DstT c_style_cast(SrcT v)
{
    return (DstT)(v);
}
template <int i>
int add(int a)
{
    return a + i;
}

// 3
template <typename T>
class RemovePointer
{
public:
    typedef T Result;
};
template <typename T>
class RemovePointer<T*>
{
public:
    typedef typename RemovePointer<T>::Result Result;
};

// 4
template <typename T1, typename T2>
class classB {
public:
    classB(T1 a, T2 b): a(a), b(b) {
        std::cout << "template" << std::endl;
    }
private:
    T1 a;
    T2 b;
};
template<>
class classB<int, int> {
public:
    classB(int a, int b): a(a), b(b) {
        std::cout << "specialization" << std::endl;
    }
private:
    int a, b;
};
template<class T>
class classB<int, T>
{
public:
    classB(int a, T b): a(a), b(b) {
        std::cout << "partial specialization" << std::endl;
    }
private:
    int a;
    T b;
};

int main() {
    // 1 class template
    classA<std::string> a("Hello world!");
    std::cout << a.get() << std::endl;
    // 2 function template
    int v = 1;
    float vf = c_style_cast<float>(v);
    std::cout << vf << std::endl;
    std::cout << add<1>(1) << std::endl;
    // 3 Specialization
    RemovePointer<int**>::Result result = 3;
    std::cout << result << std::endl;
    // 4 Partial Specialization
    classB<double, int> b1(1.5, 1);
    classB<int, int> b2(1, 1);
    classB<int, char*> b3(1, "1");
    return 0;
}

