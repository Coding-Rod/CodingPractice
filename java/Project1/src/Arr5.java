public class Arr5 {
    public static void main(String[] args) {
        int[] arr = new int[10];
        int aux;

        for (int i = 0; i < arr.length; i++) {
            arr[i] = i;
        }
        
        aux = arr[arr.length - 1];

        for (int i = 0; i < arr.length-1; i++) {
            arr[arr.length - 1-i] = arr[arr.length - 2-i];
        }

        arr[0] = aux;

        for (int i : arr) {
            System.out.println(i);
        }
    }
}