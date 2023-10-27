import java.util.*;

public class ConfusingCode {
    public static void main(String[] args) {
        int[] a = {2, 5, 1, 7, 8, 3, 6, 9, 4};
        ArrayList<Integer> b = new ArrayList<>();

        for (int x : a) {
            if (x % 2 == 0) {
                b.add(x);
            }
        }

        int max = 0;
        int min = 10;

        for (int i = 0; i < b.size(); i++) {
            if (b.get(i) > max) {
                max = b.get(i);
            }

            if (b.get(i) < min) {
                min = b.get(i);
            }
        }

        System.out.println("Even numbers in the array: " + b);
        System.out.println("Largest even number: " + max);
        System.out.println("Smallest even number: " + min);
    }
}
