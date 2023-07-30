-- Fib.hs
fibonacci :: (Num a, Eq a) => a -> a
fibonacci 0   =  0
fibonacci 1   =  1
fibonacci n   =  fibonacci (n-1) + fibonacci (n-2)

fibs n = map fibonacci [0..n]