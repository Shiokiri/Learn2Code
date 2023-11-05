package org.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        Thread vt = Thread.startVirtualThread(() -> {
            System.out.println("Start virtual thread...");
            Thread.sleep(10);
            System.out.println("End virtual thread.");
        });


        Thread thread = new Thread(new SimpleThread());
        thread.start();
    }
}