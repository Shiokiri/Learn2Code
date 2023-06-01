package test

import (
	"fmt"
	"sync"
)

func Mutex() {
	var mu sync.Mutex

	mu.Lock()
	go func() {
		fmt.Println("Hello, world!")
		mu.Unlock()
	} ()

	mu.Lock()
}