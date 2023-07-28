package hello;
public class Hello{
    public static void main(String[] args) {
        //#region previous
        // System.out.println("Hello, world!");
        // int n = 0;
        
        // System.out.println("n value: "+n);
        // n +=2; // n = i+2
        // System.out.println("n value: "+n);
        
        // n++;  // n = i+1 || n +=1
        // System.out.println("n value: "+n);
        
        // for (int j = 0; j < 5; j++) {
        //     System.out.println("Value: "+j);
        // }
        
        // float x = 0;
        // double y = 0; // bigger float
        // String s = "Bryson"; // double quotes
        // char c = 'B';
        
        // (1,2,3) 
        // [1,2,3]
        // set(1,2,3)
        // {1:'one',2:'two',3:'three'}
        
        // Array       // Static = size cannot be changed
        // ArrayList   // Dynamic = size can be changed
        
        //#endregion previous
        int [] array = {1,2,3,4,5,6,7,8};
        
        for (int i : array) {
            System.out.println(i);
        }
    }
}