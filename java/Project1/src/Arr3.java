public class Arr3 {
    public static void main(String[] args) {
        int[] a = {1,3,5,7,9,11,13,15,17,19};
        int[] b = {2,4,6,8,10,12,14,16,18,20};
        int[] c = new int[a.length+b.length];
        int count = 0;
        for (int i = 0; i < c.length; i+=2) {
            c[i] = a[count];
            c[i+1] = b[count];
            count++;
        }
        for (int i : c) {
            System.out.println(i);
        }
    }
}