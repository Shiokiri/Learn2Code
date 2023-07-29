#include <functional>
#include <iostream>

using namespace std;

void f(int n1, int n2, int n3) {
    cout << n1 << " " << n2 << " " << n3 << endl;
}

int main() {
    auto bind1 = bind(f, 1, 2, 3);
    auto bind2 = bind(f, std::placeholders::_1, std::placeholders::_2, 3);
    bind1();
    bind2(1, 2);

}
