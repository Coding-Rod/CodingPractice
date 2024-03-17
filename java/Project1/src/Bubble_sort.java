/**
 * Bubble_sort
 */
public class Bubble_sort {
    public static void main(String[] args) {
        int[] arr = {4,5,2,1,3};
        int aux;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length-1; j++) {
                if (arr[j] > arr[j+1]) {
                    aux = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = aux;
                }
            }
        }

        for (int i : arr) {
            System.out.println(i);
        }
    }
}