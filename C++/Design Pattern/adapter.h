//
// Created by shiokiri on 23-11-7.
//

#ifndef DESIGN_PATTERN_ADAPTER_H
#define DESIGN_PATTERN_ADAPTER_H

#include <iostream>
#include <string>
#include <memory>

namespace adapter {
    class Target {
    public:
        virtual ~Target() = default;
        virtual std::string request() const = 0;
    };
    class Adaptee {
    public:
        std::string specificRequest() const {
            return "{Adaptee's specific request}";
        }
    };
    class Adapter : public Target {
    private:
        std::unique_ptr<Adaptee> adaptee;
    public:
        explicit Adapter(std::unique_ptr<Adaptee> adaptee) :
        adaptee(std::move(adaptee))
        {}
        std::string request() const override final {
            return adaptee->specificRequest()+"do some operation";
        }
    };

    void test() {
        std::cout << "Adapter" << std::endl;
        auto const adaptee = std::make_unique<Adaptee>();
        auto const adapter = std::make_unique<Adapter>(std::move(const_cast<std::unique_ptr<Adaptee>&>(adaptee)));
        std::cout << adapter->request() << std::endl;
    }
}

#endif //DESIGN_PATTERN_ADAPTER_H
