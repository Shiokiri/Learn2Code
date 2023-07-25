#include <iostream>
#include <variant>
#include <vector>

struct Triangle {
    void draw() const {
        std::cout << "Triangle" << std::endl;
    }
};

struct Circle {
    void draw() const {
        std::cout << "Circle" << std::endl;
    }
};

int main() {
    using Draw = std::variant<Triangle, Circle>;
    std::vector<Draw> draw_list { Triangle{}, Circle{}, Triangle{} };
    auto drawVisitor = [](const auto &t) { t.draw(); };
    for (const auto &item : draw_list) {
        std::visit(drawVisitor, item);
    }
}
