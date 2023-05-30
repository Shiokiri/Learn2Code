package main

import "fmt"

var done = make(chan bool)

func goroutine() {
	fmt.Println("Goroutine")
	// 1
	done <- true
	// 2
	//close(done)
}

func main() {
	go goroutine()
	<- done
	fmt.Println("Hello world!")
}