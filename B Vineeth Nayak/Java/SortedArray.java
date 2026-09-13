package Java;
import java.util.*;
public class SortedArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        System.out.print("Enter the size of an array:");
        int n = sc.nextInt();
        int[] array = new int[n];
        for (int i = 0; i < n; i++) {
    System.out.print("Enter element " + (i + 1) + ": ");
    array[i] = sc.nextInt();
}
boolean sorted = true;
for (int i = 0; i < n - 1; i++) {
    if (array[i] > array[i + 1]) {
        sorted = false;
        break;
    }
}
if (sorted) {
    System.out.println("The array is sorted in ascending order.");
} else {
    System.out.println("The array is not sorted in ascending order.");
}
sc.close();
}
}