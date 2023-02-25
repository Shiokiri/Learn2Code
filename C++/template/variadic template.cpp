#include <iostream>

using namespace std;

template <typename ... Ts>
auto average(Ts... t) {
	return (t + ...) / sizeof...(t);
}

template <typename T>
void f(T t)
{
	cout << t << endl;
}
template <typename T, typename ...Ts>
void f(T t, Ts... ts)
{
	cout << t << endl;
	f(ts...);
}

template<typename T>
T sum(T t)
{
	return t;
}
template<typename T, typename ... Types>
T sum(T first, Types ... rest)
{
	return first + sum<T>(rest...);
}

template<typename... Args>
struct Sum;
template<typename First, typename... Rest>
struct Sum<First, Rest...>
{
	enum { value = Sum<First>::value + Sum<Rest...>::value };
};
template<typename Last>
struct Sum<Last>
{
	enum { value = sizeof(Last) };
};

int main() {
	std::cout << average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) << std::endl;
	cout << "---" << endl;
	f(1, 2, 3, 4, 5);
	cout << "---" << endl;
	cout << sum(1, 2, 3, 4) << endl;
	cout << "---" << endl;
	cout << Sum<int, double, short>::value << endl;
}
