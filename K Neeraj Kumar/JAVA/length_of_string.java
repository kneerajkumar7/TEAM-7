import java.util.Scanner;
public class length_of_string {
    int length(String s){
         char [] arr1 = s.toCharArray();
         int count = 0;
            for(int i=0;i<arr1.length;i++){
                count++;
            }
            return count; 
    }
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string:");
        String str = sc.nextLine();
        length_of_string ob1 = new length_of_string();
        System.out.println("Length of the string = " + ob1.length(str));
    }
}