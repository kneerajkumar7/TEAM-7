package Java;
import java.util.Scanner;
public class ArmstrongNumber {
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("enter a number: ");
        int number  = sc.nextInt();
        int originalnumber = number;
        int digits = String.valueOf(number).length();
        int sum = 0;
        while (number  !=0){
            int digit = number % 10;
            sum += (int) Math.pow(digit, digits);
            number /= 10;

        }
        if (sum == originalnumber) {
    System.out.println("It is an Armstrong number.");
} else {
    System.out.println("It is not an Armstrong number.");
}
sc.close();
    }   
}
