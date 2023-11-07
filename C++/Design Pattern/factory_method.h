//
// Created by shiokiri on 23-11-6.
//

#ifndef DESIGN_PATTERN_FACTORY_METHOD_H
#define DESIGN_PATTERN_FACTORY_METHOD_H

#include <iostream>
#include <string>
#include <memory>

namespace factory_method {
    class Product {
    public:
        virtual ~Product() = default;
        virtual std::string Operation() const = 0;
    };

    class ConcreteProduct1 : public Product {
    public:
        std::string Operation() const override final {
            return "{Result of the ConcreteProduct1}";
        }
    };
    class ConcreteProduct2 : public Product {
    public:
        std::string Operation() const override final {
            return "{Result of the ConcreteProduct2}";
        }
    };

    class Creator {
    public:
        virtual ~Creator() = default;
        virtual std::unique_ptr<Product> FactoryMethod() const = 0;

        std::string SomeOperation() const {
            std::unique_ptr<Product> product = this->FactoryMethod();
            std::string result = product->Operation() + "do some operation.";
            return result;
        }
    };

    class ConcreteCreator1 : public Creator {
    public:
        std::unique_ptr<Product> FactoryMethod() const override final {
            return std::make_unique<ConcreteProduct1>();
        }
    };
    class ConcreteCreator2 : public Creator {
    public:
        std::unique_ptr<Product> FactoryMethod() const override final {
            return std::make_unique<ConcreteProduct2>();
        }
    };

    void test() {
        std::cout << "Factory Method" << std::endl;
        std::unique_ptr<Creator> creator1 = std::make_unique<ConcreteCreator1>();
        std::string result1 = creator1->SomeOperation();
        std::cout << result1 << std::endl;

        std::unique_ptr<Creator> creator2 = std::make_unique<ConcreteCreator2>();
        std::string result2 = creator2->SomeOperation();
        std::cout << result2 << std::endl;

        std::cout << std::endl;
    }
}

#endif //DESIGN_PATTERN_FACTORY_METHOD_H
