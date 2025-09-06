import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        int n = 10;
        int[] arr = new int[n];


        System.out.println("Enter 4 numbers to sort: ");
        for (int i = 0; i < n; i++) {
            int x = input.nextInt();
            arr[i] += x;
        }


        selectSort(arr);


        input.close();
    }



    // Methods

    public static void displayArr(int[] arr) {
        for (int i = 0 ; i < arr.length; i ++) {
            System.out.print(arr[i] + " ");
        }
    }

    // Selection Sort
    public static void selectSort(int[] arr) {
        int temp;
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i+1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    System.out.println();
                    displayArr(arr);
                }
            }
        }
    }
}