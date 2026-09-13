package Java;
import java.util.Scanner;
public class MethodOverloading {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter first integer: ");
    int a = sc.nextInt();
    System.out.print("Enter second integer: ");
    int b = sc.nextInt();
    int result1 = add(a, b);
    System.out.println("Sum of two integers: " + result1);
    System.out.print("Enter third integer: ");
    int c = sc.nextInt();
    int result2 = add(a, b, c);
    System.out.println("Sum of three integers: " + result2);
    System.out.print("Enter first decimal: ");
    double x = sc.nextDouble();
    System.out.print("Enter second decimal: ");
    double y = sc.nextDouble();
    double result3 = add(x, y);
    System.out.println("Sum of two decimal numbers: " + result3);
    sc.close();
}
static int add(int a, int b) {
    return a + b;
}
static int add(int a, int b, int c) {
    return a + b + c;
}
static double add(double a, double b) {
    return a + b;
}
}
