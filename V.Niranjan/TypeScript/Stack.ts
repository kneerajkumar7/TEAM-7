class Stack {
    private stack: number[] = [];

    push(value: number): void {
        this.stack.push(value);
    }
    pop(): number | undefined {
        return this.stack.pop();
    }
    peek(): number | undefined {
        return this.stack[this.stack.length - 1];
    }
    isEmpty(): boolean {
        return this.stack.length === 0;
    }
    display(): void {
        console.log(this.stack);
    }
}

const s = new Stack();

s.push(10);
s.push(20);
s.push(30);

console.log("Stack:");
s.display();

console.log("Top element:", s.peek());

console.log("Popped:", s.pop());

console.log("Stack after pop:");
s.display();

console.log("Is stack empty?", s.isEmpty());
