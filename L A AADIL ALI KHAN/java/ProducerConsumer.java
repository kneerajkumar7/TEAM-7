import java.util.LinkedList;
import java.util.Queue;

class SharedData {
    Queue<Integer> queue = new LinkedList<>();
    int size = 5;
    public synchronized void produce(int value) throws InterruptedException {
        while (queue.size() == size) {
            wait();
        }
        queue.add(value);
        System.out.println("Produced: " + value);
        notify();
    }
    public synchronized void consume() throws InterruptedException {
        while (queue.isEmpty()) {
            wait();
        }
        int value = queue.remove();
        System.out.println("Consumed: " + value);
        notify();
    }
}

class Producer extends Thread {
    SharedData data;
    Producer(SharedData data) {
        this.data = data;
    }
    public void run() {
        for (int i = 1; i <= 10; i++) {
            try {
                data.produce(i);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

class Consumer extends Thread {
    SharedData data;
    Consumer(SharedData data) {
        this.data = data;
    }
    public void run() {
        for (int i = 1; i <= 10; i++) {
            try {
                data.consume();
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

public class ProducerConsumer {
    public static void main(String[] args) {
        SharedData data = new SharedData();

        Producer producer = new Producer(data);
        Consumer consumer = new Consumer(data);

        producer.start();
        consumer.start();
    }
}
