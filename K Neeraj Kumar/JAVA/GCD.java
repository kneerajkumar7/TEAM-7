import java.util.Scanner;
public class GCD{
    int gcd(int a,int b){
        if(b==0){
            return a;
        }
        else{
            return gcd(b ,a%b);
        }
    }
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First numbers:");
        int c = sc.nextInt();
        System.out.println("Enter Second numbers:");
        int d = sc.nextInt();
        GCD  ob1 = new GCD();
        System.out.println("GCD of two numbers = " + ob1.gcd(c,d));


    }
}
